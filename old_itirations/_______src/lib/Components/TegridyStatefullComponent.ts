// the base component class
import {Internal} from "../enums";
import {didPropsChange, didStateChange} from "../comparisonAlgorithms/comparisonAlgorithms";
import {TegridyDom} from "../TegridyDom";
import {JSX} from "../../types";

export class TegridyStatefullComponent<PP = any, SS = any> {
    props: PP;
    state: PP;
    mounted: boolean;

    constructor(props: PP) {
        this.props = props;

        // @ts-ignore
        this.state = this.state || {};
        this.mounted = false;

        // helps us know if the component is our's
        this[Internal.isStateFullComponent] = true;
    }

    // set the new state for the component, triggers an update if needed
    setState(partialState) {
        const newState = {...this.state, ...partialState};

        // check if we want to update the changes
        if (this.shouldComponentUpdate(this.props, newState)) {
            this.state = newState;

            this.componentWillUpdate(this.props, newState);

            TegridyDom.updateInstance(this[Internal.instance]);

            this.componentDidUpdate(this.props, newState);
        } else {
            // update the state without updating the component
            this.state = newState;
        }
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
        // handle state change
        if (nextProps === this.props) {
            return didStateChange(this.state, nextState)
        } else {
            // handle props change
            return didPropsChange(this.props, nextProps)
        }
    }

    // called before every render, not including the first render.
    componentWillUpdate(nextProps: PP, nextState: SS) {

    }

    // Called after every render, not including the first render.
    componentDidUpdate(prevProps: PP, prevState: SS) {

    }

    render (): JSX.Element | null {}

    forceUpdate() {
        TegridyDom.updateInstance(this[Internal.instance]);
    }
}

// helps us know if the component is our's
TegridyStatefullComponent[Internal.isStateFullComponent] = true;
