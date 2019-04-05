import {TegridyStatefullComponent} from './lib/Components/TegridyStatefullComponent';
import {isBoolean, isFunction, isNumber} from "./lib/Helpers";
import {isArray, isExist, isString} from "./lib/Helpers";
import {isShallowEqual} from "./lib/Helpers";

const createComponent = (tag, props, ...children) => {
    if (isFunction(tag) && !tag.__isStatefull) {
        tag.__isFunctional = true;
    }
    return {
        tag,
        props: props || {},
        children: children,
        isF: Boolean(tag.__isFunctional),
        isC: Boolean(tag.__isStatefull)
    }
};

const applyElementProps = (dom, props, lastProps) => {
    Object.keys(props).forEach((name) => {
        if (name.startsWith('on')) {
            dom.addEventListener(name.substring(2).toLowerCase(), props[name]);
        } else {
            dom.setAttribute(name, props[name]);
        }
    });

};

export class Tegridy {
    vDom = null;
    rootElement = null;

    static updateState(instance, newState) {
        const {parentDom, dom, rootVDom} = instance;
        instance.state = newState;
        instance.elementsUsedFromCache = [];
        Tegridy.reconcileComponent(rootVDom, parentDom, instance, dom);
        // delete unused keys
        const keys = Object.keys(instance.cachedElements);
        if (keys.length !== instance.elementsUsedFromCache.length) {
            keys.forEach((k) => {
                if (!instance.elementsUsedFromCache.includes(k)) {
                    delete instance.cachedElements[k]
                }
            })
        }
    }

    static reconcileChildren(parentComponent, parentDom, lastInstance, lastDom, lastComponentInstance) {
        if (!parentComponent.children) {
            return null
        }

        parentComponent.children.map((child, i) => {
            if (isArray(child)) {
                if (lastComponentInstance && lastComponentInstance.cachedElements) {
                    child.map((subChild) => {
                        const key = i + parentComponent.tag + subChild.props.key;
                        const cachedInstance = lastComponentInstance.cachedElements[key];
                        if (!cachedInstance) {
                            const {dom, vDom} = Tegridy.reconcile(subChild, parentDom, null, null, lastComponentInstance);
                            lastComponentInstance.cachedElements[key] = {
                                dom, vDom, r: lastComponentInstance.renderID
                            };
                            lastComponentInstance.elementsUsedFromCache.push(key);
                        } else {
                            // no need to render this
                            const {dom, vDom} = Tegridy.reconcile(subChild, parentDom, cachedInstance.vDom, cachedInstance.dom, lastComponentInstance);
                            lastComponentInstance.cachedElements[key] = {
                                dom, vDom, r: lastComponentInstance.renderID
                            };
                            lastComponentInstance.elementsUsedFromCache.push(key);
                        }
                    });
                } else {
                    child.map((child) => {
                        return Tegridy.reconcile(child, parentDom, null, null, lastComponentInstance);
                    });
                }
                //cachedElements

                // child.map((child) => {
                //     return Tegridy.reconcile(child, parentDom, lastInstance, lastDom, null);
                // });
                return;
            } else {
                const childDom = lastDom
                    ? isArray(lastDom)
                        ? lastDom[i]
                        : lastDom.childNodes[i]
                    : null;

                const childInstance = lastInstance
                    ? isArray(lastInstance)
                        ? lastInstance[i]
                        : lastInstance.children[i]
                    : null;


                return Tegridy.reconcile(
                    child,
                    parentDom,
                    childInstance,
                    childDom,
                    lastComponentInstance
                )
            }
        });

        return {dom: parentDom, vDom: parentComponent};
    }

    static reconcileComponent(component, parentDom, lastInstance, lastDom) {
        if (component.isF) {
            const instance = component.tag;
            instance.parentDom = parentDom;
            const res = instance(component.props);
            if (!instance.cachedElements) {
                instance.cachedElements = {};
            }
            const reconciled = Tegridy.reconcile(
                res,
                parentDom,
                instance.vDom,
                lastDom ? lastDom : null,
                instance
            );
            instance.vDom = reconciled.vDom;
            instance.dom = reconciled.dom;
            instance.rootVDom = component;
            return reconciled;
        } else {
            const instance = lastInstance ? lastInstance : new component.tag(component.props);
            const res = instance.render();
            instance.parentDom = parentDom;
            if (!instance.cachedElements) {
                instance.cachedElements = {};
            }
            const reconciled = Tegridy.reconcile(
                res,
                parentDom,
                instance.vDom,
                lastDom ? lastDom : null,
                instance
            );
            instance.vDom = reconciled.vDom;
            instance.dom = reconciled.dom;
            instance.rootVDom = component;
            return reconciled;
        }
    }

    static reconcile(component, parentDom, lastInstance, lastDom, lastComponentInstance) {
        if (isBoolean(component) || !isExist(component)) {
            return null;
        }

        if (isString(component) || isNumber(component)) {
            const newNode = document.createTextNode(component.toString());
            if (lastDom) {
                parentDom.replaceChild(newNode, lastDom);
            } else {
                parentDom.appendChild(newNode);
            }
            return {dom: newNode, vDom: component};
        }

        if (component.tag && isFunction(component.tag)) {
            return Tegridy.reconcileComponent(component, parentDom, lastInstance, lastDom);
        }

        if (lastInstance && lastDom) {
            if (component.tag) {
                if (lastInstance.tag !== component.tag) {
                    parentDom.removeChild(lastDom);
                    return Tegridy.reconcileChildren(component, parentDom, null, null, lastComponentInstance);
                }
                debugger
                if (!isShallowEqual(lastInstance.props, component.props)) {
                    applyElementProps(lastDom, component.props, lastInstance.props);
                    return {dom: lastDom, vDom: lastInstance.vDom}
                }

                if (component.children) {
                    return Tegridy.reconcileChildren(component, lastDom, component, lastDom, lastComponentInstance);
                }
            } else {
                // compare text nodes
                if (lastInstance === component) {
                    return {dom: lastDom, vDom: component}
                } else {
                    parentDom.replaceWith(document.createTextNode(component))
                }
            }
        } else {
            if (component.tag) {
                const newDomNode = document.createElement(component.tag);
                parentDom.appendChild(newDomNode);
                applyElementProps(newDomNode, component.props, null);
                if (component.children) {
                    return Tegridy.reconcileChildren(component, newDomNode, null, null, lastComponentInstance);
                }

                return {dom: newDomNode, vDom: component}
            } else {
                const newDomNode = document.createTextNode(component);
                if (parentDom.nodeType === Node.TEXT_NODE) {
                    parentDom.replaceWith(newDomNode);
                } else {
                    debugger
                    parentDom.appendChild(newDomNode);
                }
                return {dom: newDomNode, vDom: component}
            }
        }
        return {dom: parentDom, vDom: component}
    }
}


const render = (component, element) => {
    const t = new Tegridy();
    t.vDom = component;
    t.rootElement = element;
    Tegridy.reconcile(component, t.rootElement, null, null, null)
};

export default {
    createComponent,
    Component: TegridyStatefullComponent,
    render
}
