import Tegridy from '../src/index';
import {render} from './renderer';


class StatefullComponent extends Tegridy.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    increament() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.increament()}>
                    count
                </button>
                <h1>{this.state.counter}</h1>
            </div>
        )
    }
}

test('StatefullComponent can render', () => {
    const  {getDom, component} = render(<StatefullComponent/>);

    expect(getDom().innerHTML).toBe('<button>count</button><h1>0</h1>');
});

test('StatefullComponent can change state', () => {
    const  {getDom, component} = render(<StatefullComponent/>);

    const btn = getDom().querySelector('button');
    btn.style.color = 'red';
    console.log(btn.style)

    expect(getDom().querySelector('h1').innerHTML).toBe('0');
    btn.click();
    expect(getDom().querySelector('h1').innerHTML).toBe('1');
    btn.click();
    expect(getDom().querySelector('h1').innerHTML).toBe('2');

    const btn2 = getDom().querySelector('button');
    console.log(btn2.style)
});
