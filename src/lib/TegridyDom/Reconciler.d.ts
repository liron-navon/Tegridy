import { Types, InternalComponentInstance } from "../../types";
export declare const reconcileNoInstance: (parentDom: HTMLElement, element: Types.Element | null) => any;
export declare const reconcileNoElement: (parentDom: HTMLElement, instance: InternalComponentInstance | null) => null;
export declare const reconcileComponentDomChange: (parentDom: HTMLElement, instance: InternalComponentInstance, element: Types.Element) => any;
export declare const reconcileNativeElement: (parentDom: HTMLElement, instance: InternalComponentInstance, element: Types.Element) => InternalComponentInstance;
export declare const reconcileComponentChanges: (parentDom: HTMLElement, instance: InternalComponentInstance, element: Types.Element) => any;
