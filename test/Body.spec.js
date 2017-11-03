import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React from 'react';
import Body from '../src/Body';

describe('Body', () => {
    // Swallow errors from React to avoid 'validateDOMNesting' errors in the console
    // const render = testComponentRenderer({ error: false });

    describe('renders', () => {
        test('a tbody', () => {
            const wrapper = mount(
                <Body />
            );

            const tBodys = wrapper.find('tbody');
            expect(tBodys.length).toBe(1);
        });

        test('its children', () => {
            const wrapper = mount(
                <Body>
                    <tr id='child-tr'/>
                </Body>
            );

            const child = wrapper.find('tr#child-tr');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const wrapper = shallow(
                <Body className='supplied-class'
                    id='supplied-id'/>
            );

            expect(wrapper.props()).toInclude({
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });
});
