import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React from 'react';
import Foot from '../src/Foot';

describe('Foot', () => {

    describe('renders', () => {
        test('a tfoot', () => {
            const wrapper = mount(
                <Foot />
            );

            const tFoots = wrapper.find('tfoot');
            expect(tFoots.length).toBe(1);
        });

        test('its children', () => {
            const wrapper = mount(
                <Foot>
                    <tr id='child-tr'/>
                </Foot>
            );

            const child = wrapper.find('tr#child-tr');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const wrapper = shallow(
                <Foot className='supplied-class'
                    id='supplied-id'/>
            );

            expect(wrapper.props()).toInclude({
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });
});
