import { Types, InternalComponentInstance, ComponentElement } from "../../types";
export declare class TegridyDom {
    virtualDom: any;
    rootComponent: ComponentElement | null;
    static instantiate: (element: Types.Element, parentInstance: any, parentDom: any) => any;
    static updateInstance: (internalInstance: any) => void;
    static createPublicInstance: (element: any) => any;
    static updateDomProperties: (dom: HTMLElement, nextProps: any, lastProps: any) => void;
    static reconsile: (parentDom: HTMLElement, instance: InternalComponentInstance | null, element: Types.Element | null) => any;
    static reconsileChildren: (instance: InternalComponentInstance, element: Types.Element) => InternalComponentInstance[];
}
