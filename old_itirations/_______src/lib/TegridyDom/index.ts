import {fastHash, isArray, isBoolean, isExist, isFunction, isNumber, isStateFullComponent, isString} from "../Helpers";
import {didPropsChange, isShallowEqual} from "../comparisonAlgorithms/comparisonAlgorithms";
import {Internal} from "../enums";
import * as Reconciler from './Reconciler';
import {Types, InternalComponentInstance, ComponentElement} from "../../types";

export class TegridyDom {
    // where we keep the entire virtual dom
    virtualDom: any = null;

    // the root component
    rootComponent: ComponentElement | null = null;

    // instantiate the element
    static instantiate = (element: Types.Element, parentInstance, parentDom) => {
        // element cannot be an array, must exist and cannot be a boolean
        // these values occur when doing conditional rendering
        if (!isExist(element) || isBoolean(element)) {
            return null
        }
        // it is a text Node
        if (isString(element) || isNumber(element)) {
            const textDom = document.createTextNode(element as unknown as string);
            return {
                dom: textDom,
                childInstances: [],
                element
            };
        }
        const {tag, props} = element;
        let noKeysHit = true;

        // if dom element
        if (isString(tag)) {
            if (parentDom) {

            }

            // let dom;
            // const stateHash = fastHash(JSON.stringify(props)).toString();
            // if (parentDom) {
            //     const childrenWithSameTags = [...parentDom.getElementsByTagName(tag as string)];
            //
            //     const cachedChildDom = childrenWithSameTags.find((d) => {
            //         console.log(d.getAttribute('_tegridy'), stateHash);
            //         return d.getAttribute('_tegridy') === stateHash;
            //     });
            //
            //     // if (cachedChildDom) {
            //     //     // dom = cachedChildDom;
            //     // } else {
            //         dom = document.createElement(tag as string);
            //         TegridyDom.updateDomProperties(dom, props, null, stateHash);
            //     // }
            // } else {
            //     dom = document.createElement(tag as string);
            //     TegridyDom.updateDomProperties(dom, props, null, stateHash);
            // }

            const dom = document.createElement(tag as string);
            TegridyDom.updateDomProperties(dom, props, null);

            const children = props.children || [];
            // create and add children to the dom
            const childInstances = children.map((child, index) => {
                let childInstance;

                const isChildList = isArray(child);
                const formerChild = !isChildList && parentInstance && parentInstance.__instance && parentInstance.__instance.childInstance && parentInstance.__instance.childInstance.childInstances[index];

                if (formerChild && formerChild.publicInstance && formerChild.element.tag === child.tag && isFunction(formerChild.publicInstance.render)) {
                    const publicInstance = formerChild.publicInstance;

                    if (isFunction(publicInstance.componentWillReceiveProps)) {
                        publicInstance.componentWillReceiveProps(publicInstance.props, child.props)
                    }

                    const isStatefull = isStateFullComponent(formerChild);
                    const shouldUpdate = isStatefull
                        // statefull/pure component
                        ? publicInstance.shouldComponentUpdate(child.props, publicInstance.props)
                        // functional component
                        : didPropsChange(publicInstance.props, child.props);

                    if (shouldUpdate) {
                        // lifecycle hook componentWillUpdate
                        isStatefull && publicInstance.componentWillUpdate(child.props, publicInstance.state)

                        const prevProps = publicInstance.props;
                        publicInstance.props = child.props;
                        const myChildInstance = TegridyDom.instantiate(
                            publicInstance.render(),
                            formerChild.publicInstance,
                            publicInstance.__instance && publicInstance.__instance.dom
                        );
                        const instance = {
                            childInstance: myChildInstance,
                            dom: myChildInstance.dom,
                            element: child,
                            publicInstance: publicInstance
                        };


                        myChildInstance && dom.appendChild(myChildInstance.dom);

                        // lifecycle hook componentDidUpdate
                        isStatefull && publicInstance.componentDidUpdate(prevProps, publicInstance.state)

                        childInstance = instance;
                    } else {
                        formerChild && dom.appendChild(formerChild.dom);
                        childInstance = formerChild;
                    }
                } else if (isChildList) {
                    const hitKeys = {};
                    if (!parentInstance[Internal.componentCache].componentKeys) {
                        parentInstance[Internal.componentCache].componentKeys = {};
                    }
                    const componentKeys = parentInstance[Internal.componentCache].componentKeys;
                    childInstance = child.reduce((acc, listChild) => {
                        if (listChild.props && isExist(listChild.props.key)) {
                            const childKey = `${index}-listChild.props.key`;
                            // check if this list element is already cached
                            const cachedElement = componentKeys[childKey];
                            if (cachedElement && isShallowEqual(listChild.props, cachedElement.element.props)) {
                                if (noKeysHit) {
                                    noKeysHit = false
                                }
                                dom.appendChild(cachedElement.instance.dom);
                                acc.push(cachedElement);
                                return acc;
                            }

                            const listChildInstance = TegridyDom.instantiate(listChild, parentInstance, parentDom);

                            // cache this component
                            componentKeys[childKey] = {
                                element: listChild,
                                instance: listChildInstance
                            };
                            listChildInstance && dom.appendChild(listChildInstance.dom);
                            listChildInstance && acc.push(listChildInstance);
                            return acc;
                        } else {
                            if (!children.__isChildren) {
                                console.warn('array element must contain key for optimization reasons');
                            }
                        }

                        const listChildInstance = TegridyDom.instantiate(listChild, parentInstance, parentDom);
                        listChildInstance && dom.appendChild(listChildInstance.dom);
                        listChildInstance && acc.push(listChildInstance);

                        return acc;
                    }, []);
                    if (!noKeysHit) {
                        Object.keys(componentKeys)
                            .forEach((key) => {
                                // key for this list, but the key wasn't hit
                                if (key.startsWith(`${index}`) && !hitKeys[key]) {
                                    delete componentKeys[key];
                                }
                            })
                    }
                } else {
                    childInstance = TegridyDom.instantiate(child, parentInstance, parentDom);
                    childInstance && dom.appendChild(childInstance.dom);
                }
                return childInstance;
            });

            // clean up the keys if needed
            if (noKeysHit && parentInstance && parentInstance[Internal.componentCache].componentKeys) {
                parentInstance[Internal.componentCache].componentKeys = {};
            }

            return {dom, element, childInstances, parentDom};
        } else {
            // create and render the component
            const publicInstance = TegridyDom.createPublicInstance(element);
            const childElement = publicInstance.render();

            // instantiate the children
            const childInstance = TegridyDom.instantiate(
                childElement,
                publicInstance,
                publicInstance.__instance.dom || parentDom
            );

            const newInternalInstance = {
                dom: childInstance.dom,
                element,
                childInstance,
                publicInstance,
                parentDom
            };
            publicInstance[Internal.instance] = newInternalInstance;

            // call the componentDidMount lifecycle hook
            if (!publicInstance.mounted && isStateFullComponent(newInternalInstance)) {
                publicInstance.componentDidMount();
                publicInstance.mounted = true;
            }

            return newInternalInstance;
        }
    };

    // update the instance for our component
    static updateInstance = (internalInstance) => {
        const parentDom = internalInstance.parentDom || internalInstance.dom.parentNode;
        const element = internalInstance.element;
        TegridyDom.reconsile(parentDom, internalInstance, element)
    };

    // creates a public instance of the TegridyStatefullComponent
    static createPublicInstance = (element) => {
        // component already exist, don't recreate it
        if (element[Internal.instance] && element[Internal.instance].publicInstance) {
            return element[Internal.instance].publicInstance;
        }

        const {tag, props} = element;

        let publicInstance;

        // when this is an anonymous function, it will have no tag
        // component is a class
        if (tag && tag[Internal.isStateFullComponent]) {
            publicInstance = new tag(props);
        }
        // component is a function
        else {
            publicInstance = {
                props,
                [Internal.isFunctionalComponent]: true,
                render: () => tag
                    ? tag(publicInstance.props)
                    : isFunction(element) && element() // call anonymous function
            };
        }

        // give the ref of the created component
        if (props && props.ref && isFunction(props.ref)) {
            props.ref(publicInstance);
        }

        // create an empty internal instance
        publicInstance[Internal.instance] = {};
        publicInstance[Internal.componentCache] = {};
        return publicInstance;
    };

    // remove old dom properties, and add new ones
    static updateDomProperties = (dom: HTMLElement, nextProps: any, lastProps: any) => {

        // give the ref of the html element
        if (nextProps.ref && isFunction(nextProps.ref)) {
            nextProps.ref(dom);
        }

        // remove the old props
        if (lastProps) {
            const lastPropsNames = Object.keys(lastProps);
            for (let i = 0, len = lastPropsNames.length; i < len; i++) {
                const name = lastPropsNames[i];
                const value = lastProps[name];

                if (name === 'children') {
                    return;
                }
                if (isFunction(value)) {
                    dom[name.toLowerCase()] = null;
                } else {
                    dom[name] = null;
                }
            }
        }

        // apply the new props
        if (nextProps) {
            const nextPropsNames = Object.keys(nextProps);
            for (let i = 0, len = nextPropsNames.length; i < len; i++) {
                const name = nextPropsNames[i];
                const value = nextProps[name];

                if (name === 'children') {
                    return;
                }

                if (isFunction(value)) {
                    dom[name.toLowerCase()] = value;
                } else {
                    dom[name] = value;
                }
            }
        }
    };

    // makes sure that all the elements are fitted properly, deletes, replace and create if needed.
    static reconsile = (parentDom: HTMLElement, instance: InternalComponentInstance | null, element: Types.Element | null) => {
        if (instance === null) {
            return Reconciler.reconcileNoInstance(parentDom, element);
        } else if (element === null) {
            return Reconciler.reconcileNoElement(parentDom, instance);
        } else if (instance.element.tag !== element.tag) {
            return Reconciler.reconcileComponentDomChange(parentDom, instance, element as ComponentElement);
        } else if (isString(element.tag)) {
            return Reconciler.reconcileNativeElement(parentDom, instance, element);
        } else {
            return Reconciler.reconcileComponentChanges(parentDom, instance, element as ComponentElement)
        }
    };

    // reconcile the children of an instance
    static reconsileChildren = (instance: InternalComponentInstance, element: Types.Element) => {
        const {dom, childInstances} = instance;
        const nextChildElements = element.props.children || [];

        const newChildInstances: InternalComponentInstance[] = [];
        const count = Math.max(childInstances.length, nextChildElements.length);
        for (let i = 0; i < count; i++) {
            const childInstance = childInstances[i];
            const childElement = nextChildElements[i];
            const newChildInstance = TegridyDom.reconsile(dom, childInstance, childElement);
            if (newChildInstance) {
                newChildInstances.push(newChildInstance);
            }
        }
        return newChildInstances;
    };
}
