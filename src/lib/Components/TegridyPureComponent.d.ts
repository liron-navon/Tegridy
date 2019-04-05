import { TegridyStatefullComponent } from "./TegridyStatefullComponent";
export declare class TegridyPureComponent<PP = any, SS = any> extends TegridyStatefullComponent<PP, SS> {
    shouldComponentUpdate(nextProps: PP, nextState: SS): boolean;
}
