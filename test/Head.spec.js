import expect from 'expect';
import testComponentRenderer from './_testComponentRenderer';
import React from 'react';
import Head from '../src/Head';
import PropTypes from '../src/PropTypes';

describe('Head', () => {
    // Swallow errors from React to avoid 'validateDOMNesting' errors in the console
    const render = testComponentRenderer({ error: false });

    describe('renders', () => {
        it('a thead', () => {
            const { document } = render(
                <Head />
            );

            const theads = document.querySelectorAll('thead');
            expect(theads.length).toBe(1);
        });

        it('its children', () => {
            const { document } = render(
                <Head><tr id='child-tr' /></Head>
            );

            const child = document.querySelector('tr#child-tr');
            expect(child).toExist();
        });

        it('supplied props', () => {
            const { component } = render(
                <Head className='supplied-class' id='supplied-id' />
            );

            expect(component.props).toInclude({
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });
    });

    it('passes the sorting prop to its children', () => {
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
        render(<Head { ...{ sorting, children } } />);

        expect(renderedChildProps.sorting).toBe(sorting);
    });
});
