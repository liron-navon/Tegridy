import { JSX } from "../types/jsx";
export declare class TegridyStatefullComponent<PP = any, SS = any> {
    props: PP;
    state: PP;
    mounted: boolean;
    dom: any;
    vDom: any;
    cachedElements: {
        [key: string]: {
            vDom: any;
            dom: any;
        };
    };
    elementsUsedFromCache: any[];
    static __isStatefull: boolean;
    constructor(props: PP);
    setState(partialState: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: PP, prevProps: PP): void;
    shouldComponentUpdate(nextProps: PP, nextState: SS): boolean;
    componentWillUpdate(nextProps: PP, nextState: SS): void;
    componentDidUpdate(prevProps: PP, prevState: SS): void;
    render(): JSX.Element | null;
    forceUpdate(): void;
}
