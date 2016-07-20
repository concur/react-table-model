import expect from 'expect';
import testComponentRenderer from './_testComponentRenderer';
import React from 'react';
import Foot from '../src/Foot';

describe('Foot', () => {
    // Swallow errors from React to avoid 'validateDOMNesting' errors in the console
    const render = testComponentRenderer({ error: false });

    describe('renders', () => {
        it('a tfoot', () => {
            const { document } = render(
                <Foot />
            );

            const tFoots = document.querySelectorAll('tfoot');
            expect(tFoots.length).toBe(1);
        });

        it('its children', () => {
            const { document } = render(
                <Foot><tr id='child-tr' /></Foot>
            );

            const child = document.querySelector('tr#child-tr');
            expect(child).toExist();
        });

        it('supplied props', () => {
            const { component } = render(
                <Foot className='supplied-class' id='supplied-id' />
            );

            expect(component.props).toInclude({
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });
});
