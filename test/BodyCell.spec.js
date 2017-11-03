import expect from 'expect';
import React from 'react';
import BodyCell from '../src/BodyCell';

import {mount, shallow} from 'enzyme';
describe('BodyCell', () => {

    describe('renders', () => {
        test('a td element', () => {
            const wrapper = mount(
                <BodyCell />
            );

            const theads = wrapper.find('td');
            expect(theads.length).toBe(1);
        });

        test('its children', () => {
            const wrapper = mount(
                <BodyCell><span id='child-span'/></BodyCell>
            );

            const child = wrapper.find('span#child-span').first();
            expect(child).toExist();
        });

        test('supplied props', () => {
            const wrapper = shallow(
                <BodyCell className='supplied-class'
                    id='supplied-id'/>
            );

            expect(wrapper.props()).toInclude({
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });
});
