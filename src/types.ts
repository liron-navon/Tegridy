import {TegridyStatefullComponent} from "./lib/Components/TegridyStatefullComponent";
import {Internal} from "./lib/enums";

export declare namespace JSX {
    export type Element = any;
    export interface IntrinsicElements {
        [key: string]: any;
    }
}

export interface ComponentElement extends Types.Element{
    [Internal.isStateFullComponent]: boolean;
    [Internal.instance]: InternalComponentInstance;
}

export type InternalComponentInstance = {
    dom: HTMLElement,
    childInstances: InternalComponentInstance[],
    element: Types.Element,

    // only exist in actual tegridy components (non html elements)
    childInstance?: InternalComponentInstance
    publicInstance?: Partial<TegridyStatefullComponent> | Element
};

export declare namespace Types {
    export type StatelessComponent = (props: any) => JSX.Element;

    export type Component = StatelessComponent | typeof TegridyStatefullComponent;

    export type Element = {
        tag: string | Component,
        props: any,
    }
}
