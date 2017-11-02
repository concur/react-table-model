import expect from 'expect';
import testComponentRenderer from './_testComponentRenderer';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import HeadCell from '../src/HeadCell';

describe('HeadCell', () => {
    // Swallow errors from React to avoid 'validateDOMNesting' errors in the console
    const render = testComponentRenderer({ error: false });

    describe('renders', () => {
        it('a th element', () => {
            const { document } = render(
                <HeadCell />
            );

            const theads = document.querySelectorAll('th');
            expect(theads.length).toBe(1);
        });

        it('supplied props', () => {
            const { component } = render(
                <HeadCell className='supplied-class' id='supplied-id' />
            );

            expect(component.props).toInclude({
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });

        it('its children', () => {
            const { document } = render(
                <HeadCell><span id='child-span' /></HeadCell>
            );

            const child = document.querySelector('span#child-span');
            expect(child).toExist();
        });

        describe('without a link', () => {
            it('if neither sortProperty nor sorting is provided', () => {
                const { document } = render(
                    <HeadCell><span id='child-span' /></HeadCell>
                );

                const child = document.querySelector('a');
                expect(child).toNotExist();
            });

            it('if a sortProperty is provided, but no sorting is', () => {
                const props = { sortProperty: 'sorted-property' };

                const { document } = render(
                    <HeadCell {...props}>
                        <span id='child-span' />
                    </HeadCell>
                );

                const child = document.querySelector('a');
                expect(child).toNotExist();
            });

            it('if sorting is provided, but no sortProperty is', () => {
                const props = {
                    sorting: {
                        property: 'sorted-property',
                        onSort() { }
                    }
                };

                const { document } = render(
                    <HeadCell {...props}>
                        <span id='child-span' />
                    </HeadCell>
                );

                const child = document.querySelector('a');
                expect(child).toNotExist();
            });

            it('if no onSort callback is provided', () => {
                const props = {
                    sorting: {
                        property: 'sorted-property'
                    },
                    sortProperty: 'sorted-property'
                };

                const { document } = render(
                    <HeadCell {...props}>
                        <span id='child-span' />
                    </HeadCell>
                );

                const child = document.querySelector('a');
                expect(child).toNotExist();
            });
        });

        it('with a link if all sorting props are provided', () => {
            const props = {
                sorting: {
                    property: 'sorted-property',
                    onSort() { }
                },
                sortProperty: 'sorted-property'
            };

            const { document } = render(
                <HeadCell {...props}>
                    <span id='child-span' />
                </HeadCell>
            );

            const child = document.querySelector('a #child-span');
            expect(child).toExist();
        });
    });

    describe('sorting', () => {
        it('causes the className asc to be applied for the currently sorted property', () => {
            const props = {
                sortProperty: 'sorted-property',
                sorting: {
                    property: 'sorted-property'
                }
            };

            const { element } = render(
                <HeadCell {...props} />
            );

            expect(element.className).toBe('asc');
        });

        it('causes the className desc to be applied when currently sorted descending', () => {
            const props = {
                sortProperty: 'sorted-property',
                sorting: {
                    descending: true,
                    property: 'sorted-property'
                }
            };

            const { element } = render(
                <HeadCell {...props} />
            );

            expect(element.className).toBe('desc');
        });

        it('does not apply a className when it is not the currently sorted property', () => {
            const props = {
                sortProperty: 'another-property',
                sorting: {
                    property: 'sorted-property'
                }
            };

            const { element } = render(
                <HeadCell {...props} />
            );

            expect(element.className).toNotExist();
        });

        describe('to call the onSort callback', () => {
            let callCount = 0;
            let calledPropertyToSort;

            const onSort = (propertyToSort) => {
                callCount++;
                calledPropertyToSort = propertyToSort;
            };

            const props = {
                sortProperty: 'another-property',
                sorting: {
                    property: 'sorted-property',
                    onSort
                }
            };

            const { element } = render(
                <HeadCell {...props} />
            );

            const link = element.querySelector('a');
            ReactTestUtils.Simulate.click(link);

            it('once', () => {
                expect(callCount).toBe(1);
            });

            it('passing the property to be sorted', () => {
                expect(calledPropertyToSort).toBe('another-property');
            });
        });
    });
});
