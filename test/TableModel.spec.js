import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React from 'react';
import TableModel from '../src/TableModel';
import PropTypes from '../src/PropTypes';

describe('TableModel', () => {

    describe('renders', () => {
        test('a table', () => {
            const wrapper = mount(<TableModel />);
            const tables = wrapper.find('table');
            expect(tables.length).toBe(1);
        });

        test('its children', () => {
            const wrapper = mount(
                <TableModel>
                    <tbody id='child-tbody'/>
                </TableModel>
            );

            const child = wrapper.find('tbody#child-tbody');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const wrapper = shallow(
                <TableModel border={1}
                    className='supplied-class'
                    id='supplied-id'/>
            );

            expect(wrapper.props()).toInclude({
                border: 1,
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
        const wrapper = mount(<TableModel { ...{sorting, children} } />);

        const renderedChild = wrapper.find(Child);

        expect(renderedChild.prop('sorting')).toBe(sorting);
    });
});
