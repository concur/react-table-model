import { jsdom } from 'jsdom';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

export default function testComponentRenderer(options = { }) {
    const renderer = ReactTestUtils.createRenderer();

    return (component) => {
        renderer.render(component);

        const { warn, error } = console;
        const swallow = () => { };

        if (options.warn === false) console.warn = swallow;
        if (options.error === false) console.error = swallow;

        const renderedComponent = ReactTestUtils.renderIntoDocument(component);
        const element = ReactDOM.findDOMNode(renderedComponent);

        const renderResult = {
            output: renderer.getRenderOutput(),
            component: renderedComponent,
            document: element.parentElement,
            element
        };

        console.warn = warn;
        console.error = error;

        return renderResult;
    };
}
