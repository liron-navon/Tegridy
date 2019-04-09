export const createComponent = (tag, props, ...children) => {
    return {
        tag,
        props,
        children
    }
};

export {useState} from './hooks';
