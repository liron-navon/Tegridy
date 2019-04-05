import {JSX} from "../types/jsx";
import {Tegridy} from "../../index";

export class TegridyStatefullComponent<PP = any, SS = any> {
    props: PP;
    state: PP;
    mounted: boolean;
    dom: any;
    vDom: any;
    cachedElements: {[key: string]: { vDom: any, dom: any }} = {};
    elementsUsedFromCache: any[] = [];

    static __isStatefull = true;

    constructor(props: PP) {
        this.props = props;

        // @ts-ignore
        this.state = this.state || {};
        this.mounted = false;
    }

    // set the new state for the component, triggers an update if needed
    setState(partialState) {
        const newState = {...this.state, ...partialState};
        //
        // // check if we want to update the changes
        // if (this.shouldComponentUpdate(this.props, newState)) {
        //     this.state = newState;
        //
        //     this.componentWillUpdate(this.props, newState);
        //
        Tegridy.updateState(this, newState);
        //
        //     this.componentDidUpdate(this.props, newState);
        // } else {
        //     // update the state without updating the component
        //     this.state = newState;
        // }
    }

    // called before mounting the component into the dom
    componentDidMount() {
    }

    // called after unmounting the component from the dom
    componentWillUnmount() {

    }

    // called before receiving new props
    componentWillReceiveProps(nextProps: PP, prevProps: PP) {

    }

    // check if the component should update
    shouldComponentUpdate(nextProps: PP, nextState: SS): boolean {
        // // handle state change
        // if (nextProps === this.props) {
        //     return didStateChange(this.state, nextState)
        // } else {
        //     // handle props change
        //     return didPropsChange(this.props, nextProps)
        // }
        return true;
    }

    // called before every render, not including the first render.
    componentWillUpdate(nextProps: PP, nextState: SS) {

    }

    // Called after every render, not including the first render.
    componentDidUpdate(prevProps: PP, prevState: SS) {

    }

    render (): JSX.Element | null {return null}

    forceUpdate() {
        // TegridyDom.updateInstance(this[Internal.instance]);
    }
}
