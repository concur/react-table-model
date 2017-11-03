import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React from 'react';
import FootRow from '../src/FootRow';

describe('FootRow', () => {

    describe('renders', () => {
        test('a tr element', () => {
            const wrapper = mount(
                <FootRow>
                    <td />
                </FootRow>
            );

            const theads = wrapper.find('tr');
            expect(theads.length).toBe(1);
        });

        test('its children', () => {
            const wrapper = mount(
                <FootRow>
                    <td id='child-td'/>
                </FootRow>
            );

            const child = wrapper.find('td#child-td');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const wrapper = shallow(
                <FootRow abbr='supplied-abbr'
                    className='supplied-class'
                    id='supplied-id'>
                    <td />
                </FootRow>
            );

            expect(wrapper.props()).toInclude({
                abbr: 'supplied-abbr',
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });
});
