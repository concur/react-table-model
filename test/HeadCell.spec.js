import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React from 'react';
import HeadCell from '../src/HeadCell';

describe('HeadCell', () => {

    describe('renders', () => {
        test('a th element', () => {
            const wrapper = mount(
                <HeadCell />
            );

            const theads = wrapper.find('th');
            expect(theads.length).toBe(1);
        });

        test('supplied props', () => {
            const wrapper = shallow(
                <HeadCell className='supplied-class'
                          id='supplied-id'/>
            );

            expect(wrapper.props()).toInclude({
                className: 'supplied-class',
                id: 'supplied-id'
            });
        });

        test('its children', () => {
            const wrapper = mount(
                <HeadCell><span id='child-span'/></HeadCell>
            );

            const child = wrapper.find('span#child-span');
            console.log('child', child);
            expect(child.length).toBe(1);
        });

        describe('without a link', () => {
            test('if neither sortProperty nor sorting is provided', () => {
                const wrapper = mount(
                    <HeadCell><span id='child-span'/></HeadCell>
                );

                const child = wrapper.find('a');
                expect(child.length).toBe(0);
            });

            test('if a sortProperty is provided, but no sorting is', () => {
                const props = {sortProperty: 'sorted-property'};

                const wrapper = mount(
                    <HeadCell {...props}>
                        <span id='child-span'/>
                    </HeadCell>
                );

                const child = wrapper.find('a');
                expect(child.length).toBe(0);
            });

            test('if sorting is provided, but no sortProperty is', () => {
                const props = {
                    sorting: {
                        property: 'sorted-property',
                        onSort() {
                        }
                    }
                };

                const wrapper = mount(
                    <HeadCell {...props}>
                        <span id='child-span'/>
                    </HeadCell>
                );

                const child = wrapper.find('a');
                expect(child.length).toBe(0);
            });

            test('if no onSort callback is provided', () => {
                const props = {
                    sorting: {
                        property: 'sorted-property'
                    },
                    sortProperty: 'sorted-property'
                };

                const wrapper = mount(
                    <HeadCell {...props}>
                        <span id='child-span'/>
                    </HeadCell>
                );

                const child = wrapper.find('a');
                expect(child.length).toBe(0);
            });
        });

        test('with a link if all sorting props are provided', () => {
            const props = {
                sorting: {
                    property: 'sorted-property',
                    onSort() {
                    }
                },
                sortProperty: 'sorted-property'
            };

            const wrapper = mount(
                <HeadCell {...props}>
                    <span id='child-span'/>
                </HeadCell>
            );

            const child = wrapper.find('a #child-span');
            expect(child.length).toBe(1);
        });
    });

    describe('sorting', () => {
        test(
            'causes the className asc to be applied for the currently sorted property',
            () => {
                const props = {
                    sortProperty: 'sorted-property',
                    sorting: {
                        property: 'sorted-property'
                    }
                };

                const wrapper = shallow(
                    <HeadCell {...props} />
                );

                expect(wrapper.prop('className')).toBe('asc');
            }
        );

        test(
            'causes the className desc to be applied when currently sorted descending',
            () => {
                const props = {
                    sortProperty: 'sorted-property',
                    sorting: {
                        descending: true,
                        property: 'sorted-property'
                    }
                };

                const wrapper = shallow(
                    <HeadCell {...props} />
                );

                expect(wrapper.prop('className')).toBe('desc');
            }
        );

        test(
            'does not apply a className when it is not the currently sorted property',
            () => {
                const props = {
                    sortProperty: 'another-property',
                    sorting: {
                        property: 'sorted-property'
                    }
                };

                const wrapper = shallow(
                    <HeadCell {...props} />
                );

                expect(wrapper.prop('className')).toNotExist();
            }
        );

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

            const wrapper = mount(
                <HeadCell {...props} />
            );

            const link = wrapper.find('a');

            link.simulate('click');
            test('once', () => {
                expect(callCount).toBe(1);
            });

            test('passing the property to be sorted', () => {
                expect(calledPropertyToSort).toBe('another-property');
            });
        });
    });
});
