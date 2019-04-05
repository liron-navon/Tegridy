// the base component class
import {didPurePropsChange, didPureStateChange} from '../comparisonAlgorithms/comparisonAlgorithms';
import {TegridyStatefullComponent} from "./TegridyStatefullComponent";

export class TegridyPureComponent<PP = any, SS = any> extends TegridyStatefullComponent<PP, SS> {
    // check if the component should update
    shouldComponentUpdate(nextProps: PP, nextState: SS): boolean {
        // handle state change
        if (nextProps === this.props) {
            return didPureStateChange(this.state, nextState)
        }
        // handle props change
        return didPurePropsChange(this.props, nextProps)
    }
}

