import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React from 'react';
import Head from '../src/Head';
import PropTypes from '../src/PropTypes';

describe('Head', () => {

    describe('renders', () => {
        test('a thead', () => {
            const wrapper = mount(
                <Head />
            );

            const theads = wrapper.find('thead');
            expect(theads.length).toBe(1);
        });

        test('its children', () => {
            const wrapper = mount(
                <Head>
                    <tr id='child-tr'/>
                </Head>
            );

            const child = wrapper.find('tr#child-tr');
            expect(child).toExist();
        });

        test('supplied props', () => {
            const wrapper = shallow(
                <Head className='supplied-class'
                    id='supplied-id'/>
            );

            expect(wrapper.props()).toInclude({
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
        const wrapper = mount(<Head { ...{sorting, children} } />);

        const renderedChild = wrapper.find(Child);

        expect(renderedChild.prop('sorting')).toBe(sorting);
    });
});
