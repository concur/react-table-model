import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React from 'react';
import BodyHeadCell from '../src/BodyHeadCell';

describe('BodyHeadCell', () => {

    describe('renders', () => {
        test('a th element', () => {
            const wrapper = mount(
                <BodyHeadCell />
            );

            const theads = wrapper.find('th');
            expect(theads.length).toBe(1);
        });

        test('its children', () => {
            const wrapper = mount(
                <BodyHeadCell><span id='child-span'/></BodyHeadCell>
            );

            const child = wrapper.find('span#child-span');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const wrapper = shallow(
                <BodyHeadCell className='supplied-class'
                    id='supplied-id'/>
            );

            expect(wrapper.props()).toInclude({
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });
});
