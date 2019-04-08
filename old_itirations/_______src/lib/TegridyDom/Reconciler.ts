// will lookup Tegridy components in the an array of children
import {TegridyDom} from ".";
import {fastHash, isArray, isExist, isStateFullComponent} from "../Helpers";
import {Types, InternalComponentInstance} from "../../types";

// recursively looking for the children who are also components
// to call the componentWillUnmount hook
const findComponentsInChildren = (childInstances) => {
    let total: any[] = [];
    for (let i = 0, len = childInstances.length; i < len; i++) {
        const child = childInstances[i];

        // filter null children
        if (!isExist(child)) {
            return [];
        }

        // for array children we need to look for each child and check it
        if (isArray(child)) {
            for (let j = 0, len2 = child.length; j < len2; j++) {
                const subChild = child[j];
                if (subChild.publicInstance && isStateFullComponent(subChild)) {
                    total.push(subChild);
                }

                if (subChild.childInstances) {
                    const childrenFound = findComponentsInChildren(subChild.childInstances);
                    total = total.concat(childrenFound)
                }
            }
        } else {
            if (child.publicInstance && isStateFullComponent(child)) {
                total.push(child);
            }

            if (child.childInstances) {
                const childrenFound = findComponentsInChildren(child.childInstances);
                total = total.concat(childrenFound)
            }
        }
    }
    return total;
};

// handle instance when it's not created (the first call to render)
export const reconcileNoInstance = (parentDom: HTMLElement, element: Types.Element | null) => {
    if (element === null) {
        return null;
    }
    const newInstance = TegridyDom.instantiate(element, null, parentDom);
    parentDom.appendChild(newInstance.dom);
    return newInstance;
};

// Element is non existent (when returning null from render)
export const reconcileNoElement = (parentDom: HTMLElement, instance: InternalComponentInstance | null) => {
    instance && instance.dom && parentDom.removeChild(instance.dom);
    return null;
};

// reconcile dom changes to an existing component
export const reconcileComponentDomChange = (parentDom: HTMLElement, instance: InternalComponentInstance, element: Types.Element) => {
    const newInstance = TegridyDom.instantiate(element, instance, parentDom);
    const oldInstanceChildComponents = findComponentsInChildren(instance.childInstances);
    const newInstanceChildComponents = findComponentsInChildren(newInstance.childInstance.childInstances);

    for (let i = 0; i < oldInstanceChildComponents.length; i++) {
        const component: any = oldInstanceChildComponents[i];

        const exists = !!(newInstanceChildComponents as any).find((c: any) => {
            return c.publicInstance === component.publicInstance;
        });

        if (!exists) {
            // before unmount hook
            component.publicInstance.componentWillUnmount();
            component.publicInstance.mounted = false;
        }
    }


    // for shadow root elements
    if (parentDom && (parentDom as any).host) {
        // replace child manually
        if (parentDom.firstElementChild) {
            parentDom.removeChild(parentDom.firstElementChild);
        }
        parentDom.appendChild(newInstance.dom);
        console.log(newInstance.dom.innerText)
    }else {
        parentDom.replaceChild(newInstance.dom, instance.dom);
    }

    return newInstance;
};

// reconcile a regular HTML element
export const reconcileNativeElement = (parentDom: HTMLElement, instance: InternalComponentInstance, element: Types.Element) => {
    TegridyDom.updateDomProperties(instance.dom, instance.element.props, element.props);
    instance.childInstances = TegridyDom.reconsileChildren(instance, element);
    instance.element = element;
    return instance;
};

// reconcile changes to an existing component
export const reconcileComponentChanges = (parentDom: HTMLElement, instance: InternalComponentInstance, element: Types.Element) => {
    // if we need to reconsile a component
    const childInstance = TegridyDom.reconsile(
        parentDom,
        instance.childInstance!,
        instance.publicInstance as Types.Element
    );

    return {
        publicInstance: instance.publicInstance,
        dom: childInstance.dom,
        childInstances: childInstance,
        element
    };
};
