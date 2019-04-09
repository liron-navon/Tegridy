import {reconcile} from "./reconciler";

export const render = (element, rootHTMLElement) => {
    reconcile(
        element,
        null,
        rootHTMLElement);
};
