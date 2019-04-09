import {reconcile} from "./reconciler";

export const render = (element, rootHTMLElement) => {
    let rootInstance = {
        stack: []
    };
    rootInstance.state = reconcile(
        element,
        rootInstance,
        rootHTMLElement,
        0
    );

    console.log(rootInstance)
};
