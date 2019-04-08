import Tegridy from '../../../src';
import {render} from './renderer';

test('Simple render', () => {
    const  {getDom} = render(() => <div>hello world</div>);
    expect(getDom().innerHTML).toBe('hello world');
});

test('Simple render with prop', () => {
    const TitleComponent = (props) => <h1>{props.title}</h1>;

    const  {getDom, component} = render(<TitleComponent title={'hello world'}/>);
    expect(getDom().innerHTML).toBe('hello world');
    expect(component.props.title).toBe('hello world');
});
