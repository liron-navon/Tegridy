import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import isBoolean from 'lodash/isBoolean';
import * as hooks from '../tegridy-core/hooks';

// the algorithm to instantiate, create, update and remove elements and components.
export const reconcile = (element, instance, parentDom) => {
    // a functional component
    if (isFunction(element.tag)) {
        // assign simpler names for readability
        const render = element.tag;
        const props = {...element.props, children: element.children};

        hooks.beforeCall(
            (p) => reconcile(render(p), instance, parentDom),
            props,
            []);
        const jsx = render(props);
        const hooksToCache = hooks.getHooks();

        // keep reconciling the result of the component
        const result = reconcile(
            jsx,
            instance,
            parentDom
        );

        return result;
    }


    // a text node
    if (isString(element) || isNumber(element) || isBoolean(element)) {
        const node = document.createTextNode(element);
        parentDom.appendChild(node);
        return {dom: node, vDom: element};
    }

    // an HTML element
    const node = document.createElement(element.tag);
    parentDom.appendChild(node);

    return element.children.length
        ? reconcileChildren(element, instance, node)
        : {dom: node, vDom: element};
};

// go over the children and keep reconciling them
const reconcileChildren = (element, instance, parentDom) => {
    const childInstances = element.children.map((child) =>
        reconcile(
            child,
            instance,
            parentDom
        ));
    if (instance) {
        instance.childInstances = childInstances;
    }
    return {dom: parentDom, vDom: element};
};
