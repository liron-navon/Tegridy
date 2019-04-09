import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import isBoolean from 'lodash/isBoolean';
import * as hooks from '../tegridy-core/hooks';

const reconcileHTMLElement = (element, instance, parentDom, cursor, currentInstance, hasInstance) => {
    if (hasInstance) {
        if (currentInstance.element.tag === element.tag) {
            // if no children
            if (!element.children.length) {
                return {vDom: currentInstance.vDom, dom: currentInstance.dom};
            }
            // skip this element, but render it's children
            const result = reconcileChildren(element, currentInstance, currentInstance.dom);

            Object.assign(currentInstance, {
                element,
                ...result
            });

            return result;
        } else {
            const node = document.createElement(element.tag);
            parentDom.replaceChild(node, currentInstance.dom);

            const result = element.children.length
                ? reconcileChildren(element, currentInstance, node)
                : {dom: node, vDom: element};

            Object.assign(currentInstance, {
                element,
                ...result
            });

            return result;
        }
    }

    // create a new element
    const node = document.createElement(element.tag);
    parentDom.appendChild(node);

    const result = element.children.length
        ? reconcileChildren(element, currentInstance, node)
        : {dom: node, vDom: element};

    Object.assign(currentInstance, {
        element,
        ...result
    });

    return result;
};

const reconcileFunction = (element, instance, parentDom, cursor, currentInstance, hasInstance) => {
    // assign simpler names for readability
    const render = element.tag;
    const props = {...element.props, children: element.children};

    hooks.beforeCall(
        (p) => reconcile(render(p), currentInstance, parentDom, 0),
        props,
        currentInstance.hooks || []);
    const jsx = render(props);
    currentInstance.hooks = hooks.getHooks();

    // keep reconciling the result of the component
    const result = reconcile(
        jsx,
        currentInstance,
        parentDom,
        0
    );

    Object.assign(currentInstance, {
        element,
        ...result
    });

    return result;
};

const reconcileTextNode = (element, instance, parentDom, cursor, currentInstance, hasInstance) => {
    if (hasInstance) {
        // has instance and didn't change, don't touch it
        if (element === currentInstance.element) {
            return {vDom: currentInstance.vDom, dom: currentInstance.dom}
        }

        // replace the text content of the node
        currentInstance.dom.textContent = element;
        const result = {dom: currentInstance.dom, vDom: element};

        Object.assign(currentInstance, {
            element,
            ...result
        });

        return result;
    }

    // doesn't have an instance, create one
    const node = document.createTextNode(element);
    parentDom.appendChild(node);
    const result = {dom: node, vDom: element};

    Object.assign(currentInstance, {
        element,
        ...result
    });

    return result;
};

const reconcileOptional = (element, instance, parentDom, cursor, currentInstance, hasInstance) => {
    if (element === false) {
        instance.stack[cursor] = undefined;
        if (instance.childInstances && instance.childInstances.length >= cursor) {
            instance.childInstances[cursor] = undefined;
            parentDom.removeChild(currentInstance.dom);
        }
    }
    return {vDom: null, dom: null}
};

// the algorithm to instantiate, create, update and remove elements and components.
export const reconcile = (element, instance, parentDom, cursor) => {
    let currentInstance = instance.stack[cursor];
    if (!currentInstance) {
        currentInstance = {stack: []};

        // if this was an optional element, we need to rehydrate it and not append it
        if (instance.stack.length >= cursor) {
            instance.stack[cursor] = currentInstance;
        } else {
            instance.stack.push(currentInstance)
        }
    }
    const hasInstance = !!currentInstance.dom;

    // a functional component
    if (isFunction(element.tag)) {
        return reconcileFunction(element, instance, parentDom, cursor, currentInstance, hasInstance);
    }

    // an optional render
    if (isBoolean(element)) {
        return reconcileOptional(element, instance, parentDom, cursor, currentInstance, hasInstance)
    }

    // a text node
    if (isString(element) || isNumber(element)) {
        return reconcileTextNode(element, instance, parentDom, cursor, currentInstance, hasInstance);
    }

    // an HTML element
    return reconcileHTMLElement(element, instance, parentDom, cursor, currentInstance, hasInstance);
};

// go over the children and keep reconciling them
const reconcileChildren = (element, parentInstance, parentDom) => {
    if (!parentInstance.stack) {
        parentInstance.stack = [];
    }

    const childInstances = element.children.map((child, index) =>
        reconcile(
            child,
            parentInstance,
            parentDom,
            index
        ));

    if (parentInstance) {
        parentInstance.childInstances = childInstances;
    }
    return {dom: parentDom, vDom: element};
};
