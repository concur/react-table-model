import expect from 'expect';
import testComponentRenderer from './_testComponentRenderer';
import React from 'react';
import HeadRow from '../src/HeadRow';
import PropTypes from '../src/PropTypes';

describe('HeadRow', () => {
    // Swallow errors from React to avoid 'validateDOMNesting' errors in the console
    const render = testComponentRenderer({ error: false });

    describe('renders', () => {
        test('a tr element', () => {
            const { document } = render(
                <HeadRow><td /></HeadRow>
            );

            const theads = document.querySelectorAll('tr');
            expect(theads.length).toBe(1);
        });

        test('its children', () => {
            const { document } = render(
                <HeadRow><th id='child-th' /></HeadRow>
            );

            const child = document.querySelector('th#child-th');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const { component } = render(
                <HeadRow abbr='supplied-abbr' className='supplied-class' id='supplied-id'>
                    <td />
                </HeadRow>
            );

            expect(component.props).toInclude({
                abbr: 'supplied-abbr',
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
        render(<HeadRow { ...{ sorting, children } } />);

        expect(renderedChildProps.sorting).toBe(sorting);
    });
});
