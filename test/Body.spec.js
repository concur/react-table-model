import expect from 'expect';
import testComponentRenderer from './_testComponentRenderer';
import React from 'react';
import Body from '../src/Body';

describe('Body', () => {
    // Swallow errors from React to avoid 'validateDOMNesting' errors in the console
    const render = testComponentRenderer({ error: false });

    describe('renders', () => {
        test('a tbody', () => {
            const { document } = render(
                <Body />
            );

            const tBodys = document.querySelectorAll('tbody');
            expect(tBodys.length).toBe(1);
        });

        test('its children', () => {
            const { document } = render(
                <Body><tr id='child-tr' /></Body>
            );

            const child = document.querySelector('tr#child-tr');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const { component } = render(
                <Body className='supplied-class' id='supplied-id' />
            );

            expect(component.props).toInclude({
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });
});
