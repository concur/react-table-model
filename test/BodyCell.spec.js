import expect from 'expect';
import testComponentRenderer from './_testComponentRenderer';
import React from 'react';
import BodyCell from '../src/BodyCell';

describe('BodyCell', () => {
    // Swallow errors from React to avoid 'validateDOMNesting' errors in the console
    const render = testComponentRenderer({ error: false });

    describe('renders', () => {
        test('a td element', () => {
            const { document } = render(
                <BodyCell />
            );

            const theads = document.querySelectorAll('td');
            expect(theads.length).toBe(1);
        });

        test('its children', () => {
            const { document } = render(
                <BodyCell><span id='child-span' /></BodyCell>
            );

            const child = document.querySelector('span#child-span');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const { component } = render(
                <BodyCell className='supplied-class' id='supplied-id' />
            );

            expect(component.props).toInclude({
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });
});
