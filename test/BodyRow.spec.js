import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React from 'react';
import BodyRow from '../src/BodyRow';

describe('BodyRow', () => {

    describe('renders', () => {
        test('a tr element', () => {
            const wrapper = mount(
                <BodyRow>
                    <td />
                </BodyRow>
            );

            const theads = wrapper.find('tr');
            expect(theads.length).toBe(1);
        });

        test('its children', () => {
            const wrapper = mount(
                <BodyRow>
                    <td id='child-td'/>
                </BodyRow>
            );

            const child = wrapper.find('td#child-td');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const wrapper = shallow(
                <BodyRow abbr='supplied-abbr'
                    className='supplied-class'
                    id='supplied-id'>
                    <td />
                </BodyRow>
            );

            expect(wrapper.props()).toInclude({
                abbr: 'supplied-abbr',
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });
});
