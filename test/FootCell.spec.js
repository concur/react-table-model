import expect from 'expect';
import testComponentRenderer from './_testComponentRenderer';
import React from 'react';
import FootCell from '../src/FootCell';

describe('FootCell', () => {
    // Swallow errors from React to avoid 'validateDOMNesting' errors in the console
    const render = testComponentRenderer({ error: false });

    describe('renders', () => {
        test('a td element', () => {
            const { document } = render(
                <FootCell />
            );

            const theads = document.querySelectorAll('td');
            expect(theads.length).toBe(1);
        });

        test('its children', () => {
            const { document } = render(
                <FootCell><span id='child-span' /></FootCell>
            );

            const child = document.querySelector('span#child-span');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const { component } = render(
                <FootCell className='supplied-class' id='supplied-id' />
            );

            expect(component.props).toInclude({
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });
});
