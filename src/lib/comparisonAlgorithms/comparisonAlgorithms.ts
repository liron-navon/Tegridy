import {fastHash, isExist} from "../Helpers";

// manually check shallow equality
export function isShallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }

    if (!objA || !objB) {
        return false;
    }

    const aKeys = Object.keys(objA);
    const bKeys = Object.keys(objB);
    const len = aKeys.length;

    if (bKeys.length !== len) {
        return false;
    }

    for (let i = 0; i < len; i++) {
        const key = aKeys[i];
        if (objA[key] !== objB[key]) {
            return false;
        }
    }

    return true;
};

// check if props changed
export const didPropsChange = (prevProps, newProps) => !isShallowEqual(prevProps, newProps);

// check if state changed
export const didStateChange = (prevState, newState) => !isShallowEqual(prevState, newState);

// Make a comparison for the virtual dom
export const didVDomChange = (oldDom, newDom) => {
    const html1 = oldDom.innerHTML;
    const html2 = newDom.innerHTML;

    // if the length has changed, change the dom
    if (html1.length !== html2.length) {
        return true;
    }
    // If the hash is different, change the dom
    // this might not work properly, should be improved 🤷‍♀️
    return fastHash(html1) !== fastHash(html2)
};

// check if state changed for pure component
export const didPureStateChange = (prevState, newState) => !isShallowEqual(prevState, newState);

// check if props changed for pure component
export const didPurePropsChange = (prevProps, newProps) => !isShallowEqual(prevProps, newProps);
