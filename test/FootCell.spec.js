import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React from 'react';
import FootCell from '../src/FootCell';

describe('FootCell', () => {

    describe('renders', () => {
        test('a td element', () => {
            const wrapper = mount(
                <FootCell />
            );

            const theads = wrapper.find('td');
            expect(theads.length).toBe(1);
        });

        test('its children', () => {
            const wrapper = mount(
                <FootCell><span id='child-span'/></FootCell>
            );

            const child = wrapper.find('span#child-span');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const wrapper = shallow(
                <FootCell className='supplied-class'
                    id='supplied-id'/>
            );

            expect(wrapper.props()).toInclude({
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });
});
