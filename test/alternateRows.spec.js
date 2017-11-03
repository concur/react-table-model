import expect from 'expect';
import React from 'react';
import alternateRows from '../src/alternateRows';

describe('alternateRows', () => {
    const behavior = alternateRows();

    test('returns a behavior function', () => {
        expect(behavior).toBeA(Function);
    });

    describe('behavior function', () => {
        describe('handles null children', () => {
            const actual = behavior(null);

            test('and returns null', () => {
                expect(actual).toBe(null);
            });
        });

        describe('handles an empty array of children', () => {
            const actual = behavior([]);

            test('and returns an empty array of children', () => {
                expect(actual).toEqual([]);
            });

            test('and the output can be consumed by React.Children.map', () => {
                expect(() => React.Children.map(actual, (child) => (child))).toNotThrow();
            });
        });

        describe('handles a single child', () => {
            const actual = behavior(<tr ref='single-child'/>);

            test('and returns a single child', () => {
                const count = React.Children.count(actual);
                expect(count).toBe(1);
            });

            const singleChild = React.Children.toArray(actual)[0];

            test('and returns the provided child', () => {
                expect(singleChild.ref).toEqual('single-child');
            });

            test('and does not apply the alternaterow class (by default)', () => {
                expect(singleChild.props.className).toNotExist();
            });

            test(
                'and will apply the default alternaterow class if the first is alternate',
                () => {
                    const firstIsAlternateBehavior = alternateRows(null, true);
                    const firstIsAlternate = React.Children.toArray(firstIsAlternateBehavior(<tr />))[0];
                    expect(firstIsAlternate.props.className).toEqual('alternaterow');
                }
            );

            test(
                'and will apply a custom alternate class if the first is alternate',
                () => {
                    const firstIsAlternateBehavior = alternateRows('custom-alternate-class', true);
                    const firstIsAlternate = React.Children.toArray(firstIsAlternateBehavior(<tr />))[0];
                    expect(firstIsAlternate.props.className).toEqual('custom-alternate-class');
                }
            );
        });

        describe('handles multiple children', () => {
            const parent = (
                <tbody>
                    <tr ref='first'/>
                    <tr ref='second'/>
                    <tr ref='third'/>
                    <tr ref='fourth'/>
                    <tr ref='fifth'/>
                    <tr ref='sixth'/>
                    <tr ref='seventh'/>
                </tbody>
            );

            const actual = behavior(parent.props.children);

            test('and returns an array with the same number of children', () => {
                const count = React.Children.count(actual);
                expect(count).toBe(7);
            });

            const children = React.Children.toArray(actual);

            test('and returns the provided children', () => {
                const refs = children.map((child) => child.ref);
                expect(refs).toEqual(['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh']);
            });

            test(
                'and applies the alternaterow class to every other row (skipping the first by default)',
                () => {
                    let notDefined;

                    const classNames = children.map((child) => child.props.className);
                    expect(classNames).toEqual([notDefined, 'alternaterow', notDefined, 'alternaterow', notDefined, 'alternaterow', notDefined]);
                }
            );

            test(
                'and will apply the default alternaterow class to the first row if told to',
                () => {
                    const firstIsAlternateBehavior = alternateRows(null, true);
                    const firstIsAlternate = React.Children.toArray(firstIsAlternateBehavior(parent.props.children));

                    let notDefined;

                    const classNames = firstIsAlternate.map((child) => child.props.className);
                    expect(classNames).toEqual(['alternaterow', notDefined, 'alternaterow', notDefined, 'alternaterow', notDefined, 'alternaterow']);
                }
            );

            test('and will apply a custom alternate class', () => {
                const firstIsAlternateBehavior = alternateRows('custom-alternate-class', true);
                const firstIsAlternate = React.Children.toArray(firstIsAlternateBehavior(parent.props.children));

                let notDefined;

                const classNames = firstIsAlternate.map((child) => child.props.className);
                expect(classNames).toEqual(['custom-alternate-class', notDefined, 'custom-alternate-class', notDefined, 'custom-alternate-class', notDefined, 'custom-alternate-class']);
            });
        });

        test('resets the alternate row position each time it is called', () => {
            const reusedBehavior = alternateRows('custom-alternate-class', true);

            const firstRun = React.Children.toArray(reusedBehavior(<tr />))[0];
            const secondRun = React.Children.toArray(reusedBehavior(<tr />))[0];

            const classNames = [firstRun.props.className, secondRun.props.className];

            expect(classNames).toEqual(['custom-alternate-class', 'custom-alternate-class']);
        });
    });
});
