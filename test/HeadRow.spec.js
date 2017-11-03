import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React from 'react';
import HeadRow from '../src/HeadRow';
import PropTypes from '../src/PropTypes';

describe('HeadRow', () => {

    describe('renders', () => {
        test('a tr element', () => {
            const wrapper = mount(
                <HeadRow>
                    <td />
                </HeadRow>
            );

            const theads = wrapper.find('tr');
            expect(theads.length).toBe(1);
        });

        test('its children', () => {
            const wrapper = mount(
                <HeadRow>
                    <th id='child-th'/>
                </HeadRow>
            );

            const child = wrapper.find('th#child-th');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const wrapper = shallow(
                <HeadRow abbr='supplied-abbr'
                    className='supplied-class'
                    id='supplied-id'>
                    <td />
                </HeadRow>
            );

            expect(wrapper.props()).toInclude({
                abbr: 'supplied-abbr',
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });

    test('passes the sorting prop to its children', () => {
        const onSort = () => {
        };

        const sorting = {
            descending: true,
            sortProperty: 'sorted-property',
            onSort
        };



        const Child = () => {
            return null;
        };

        Child.propTypes = {
            sorting: PropTypes.sorting
        };

        const children = (<Child />);
        const wrapper = mount(<HeadRow { ...{sorting, children} } />);

        const renderedChild = wrapper.find(Child);

        expect(renderedChild.prop('sorting')).toBe(sorting);
    });
});
