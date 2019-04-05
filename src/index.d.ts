import { TegridyStatefullComponent } from './lib/Components/TegridyStatefullComponent';
import { Types } from "./types";
import { TegridyPureComponent } from "./lib/Components/TegridyPureComponent";
declare const _default: {
    render: (component: Types.Element, container: HTMLElement) => {
        component: import("./types").ComponentElement | null;
        vDom: any;
    };
    createComponent: (tag: any, props: any, ...children: any[]) => Types.Element;
    Component: typeof TegridyStatefullComponent;
    PureComponent: typeof TegridyPureComponent;
};
export default _default;
export declare const Component: typeof TegridyStatefullComponent;
export declare const PureComponent: typeof TegridyPureComponent;
export { Types, JSX } from "./types";
