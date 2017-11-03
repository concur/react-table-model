import expect from 'expect';
import testComponentRenderer from './_testComponentRenderer';
import React from 'react';
import TableModel from '../src/TableModel';
import PropTypes from '../src/PropTypes';

describe('TableModel', () => {
    const render = testComponentRenderer(TableModel);

    describe('renders', () => {
        test('a table', () => {
            const { document } = render(<TableModel />);
            const tables = document.querySelectorAll('table');
            expect(tables.length).toBe(1);
        });

        test('its children', () => {
            const { document } = render(
                <TableModel><tbody id='child-tbody' /></TableModel>
            );

            const child = document.querySelector('tbody#child-tbody');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const { component } = render(
                <TableModel border={1} className='supplied-class' id='supplied-id' />
            );

            expect(component.props).toInclude({
                border: 1,
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });

    test('passes the sorting prop to its children', () => {
        const onSort = () => { };

        const sorting = {
            descending: true,
            sortProperty: 'sorted-property',
            onSort
        };

        let renderedChildProps = { };

        const Child = React.createClass({
            propTypes: {
                sorting: PropTypes.sorting
            },

            render() {
                renderedChildProps = this.props;
                return false;
            }
        });

        const children = (<Child />);
        render(<TableModel { ...{ sorting, children } } />);

        expect(renderedChildProps.sorting).toBe(sorting);
    });
});
