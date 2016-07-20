import expect from 'expect';
import testComponentRenderer from './_testComponentRenderer';
import React from 'react';
import FootRow from '../src/FootRow';

describe('FootRow', () => {
    // Swallow errors from React to avoid 'validateDOMNesting' errors in the console
    const render = testComponentRenderer({ error: false });

    describe('renders', () => {
        it('a tr element', () => {
            const { document } = render(
                <FootRow><td /></FootRow>
            );

            const theads = document.querySelectorAll('tr');
            expect(theads.length).toBe(1);
        });

        it('its children', () => {
            const { document } = render(
                <FootRow><td id='child-td' /></FootRow>
            );

            const child = document.querySelector('td#child-td');
            expect(child).toExist();
        });

        it('supplied props', () => {
            const { component } = render(
                <FootRow abbr='supplied-abbr' className='supplied-class' id='supplied-id'>
                    <td />
                </FootRow>
            );

            expect(component.props).toInclude({
                abbr: 'supplied-abbr',
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });
});
