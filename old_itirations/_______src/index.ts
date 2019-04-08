import {TegridyDom} from "./lib/TegridyDom";
import {TegridyStatefullComponent} from './lib/Components/TegridyStatefullComponent';
import {Types} from "./types";
import {TegridyPureComponent} from "./lib/Components/TegridyPureComponent";

// create a standard component from the templating engine syntax (JSX|HTM|etc...)
const createComponent = (tag, props, ...children): Types.Element => {
    if (children.length > 0) {
        (children as any).__isChildren = true;
    }
    return {
        tag,
        props: {...props, children}
    }
};

// create a new tegridy instance and create it's vDom
const render = (component: Types.Element, container: HTMLElement) => {
    const tegridy = new TegridyDom();

    tegridy.virtualDom = TegridyDom.reconsile(container, tegridy.virtualDom, component);
    tegridy.rootComponent = tegridy.virtualDom && tegridy.virtualDom.publicInstance;

    return {
        component: tegridy.rootComponent,
        vDom: tegridy.virtualDom
    };
};

// the public API for tegridy
export default {
    render,
    createComponent,
    Component: TegridyStatefullComponent,
    PureComponent: TegridyPureComponent
};

export const Component = TegridyStatefullComponent;
export const PureComponent = TegridyPureComponent;
export {Types, JSX} from "./types";
