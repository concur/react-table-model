import expect from 'expect';
import testComponentRenderer from './_testComponentRenderer';
import React from 'react';
import BodyHeadCell from '../src/BodyHeadCell';

describe('BodyHeadCell', () => {
    // Swallow errors from React to avoid 'validateDOMNesting' errors in the console
    const render = testComponentRenderer({ error: false });

    describe('renders', () => {
        test('a th element', () => {
            const { document } = render(
                <BodyHeadCell />
            );

            const theads = document.querySelectorAll('th');
            expect(theads.length).toBe(1);
        });

        test('its children', () => {
            const { document } = render(
                <BodyHeadCell><span id='child-span' /></BodyHeadCell>
            );

            const child = document.querySelector('span#child-span');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const { component } = render(
                <BodyHeadCell className='supplied-class' id='supplied-id' />
            );

            expect(component.props).toInclude({
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });
});
