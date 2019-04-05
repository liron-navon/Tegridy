import { TegridyStatefullComponent } from './lib/Components/TegridyStatefullComponent';
export declare class Tegridy {
    vDom: null;
    rootElement: null;
    static updateState(instance: any, newState: any): void;
    static reconcileChildren(parentComponent: any, parentDom: any, lastInstance: any, lastDom: any, lastComponentInstance: any): {
        dom: any;
        vDom: any;
    } | null;
    static reconcileComponent(component: any, parentDom: any, lastInstance: any, lastDom: any): any;
    static reconcile(component: any, parentDom: any, lastInstance: any, lastDom: any, lastComponentInstance: any): any;
}
declare const _default: {
    createComponent: (tag: any, props: any, ...children: any[]) => {
        tag: any;
        props: any;
        children: any[];
        isF: boolean;
        isC: boolean;
    };
    Component: typeof TegridyStatefullComponent;
    render: (component: any, element: any) => void;
};
export default _default;
