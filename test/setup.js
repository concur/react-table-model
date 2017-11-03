import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const swallow = () => {
};

console.warn = swallow;
console.error = swallow;
configure({adapter: new Adapter()});
