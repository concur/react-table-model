import expect from 'expect';
import testComponentRenderer from './_testComponentRenderer';
import React from 'react';
import BodyRow from '../src/BodyRow';

describe('BodyRow', () => {
    // Swallow errors from React to avoid 'validateDOMNesting' errors in the console
    const render = testComponentRenderer({ error: false });

    describe('renders', () => {
        test('a tr element', () => {
            const { document } = render(
                <BodyRow><td /></BodyRow>
            );

            const theads = document.querySelectorAll('tr');
            expect(theads.length).toBe(1);
        });

        test('its children', () => {
            const { document } = render(
                <BodyRow><td id='child-td' /></BodyRow>
            );

            const child = document.querySelector('td#child-td');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const { component } = render(
                <BodyRow abbr='supplied-abbr' className='supplied-class' id='supplied-id'><td /></BodyRow>
            );

            expect(component.props).toInclude({
                abbr: 'supplied-abbr',
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });
});
