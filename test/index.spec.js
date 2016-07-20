import expect from 'expect';
import TableModel, { PropTypes, Table, Head, HeadRow, HeadCell, Body, BodyRow, BodyCell, Foot, FootRow, FootCell, alternateRows } from '../src';

describe('index', () => {
    describe('exports', () => {
        it('the TableModel as a component', () => {
            expect(TableModel).toBeA(Function);
        });

        describe('with shortcut property', () => {
            it('PropTypes', () => {
                expect(TableModel.PropTypes).toBeA(Object);
            });

            it('the Table component', () => {
                expect(TableModel.Table).toBeA(Function);
            });

            it('the Head component', () => {
                expect(TableModel.Head).toBeA(Function);
            });

            it('the HeadRow component', () => {
                expect(TableModel.HeadRow).toBeA(Function);
            });

            it('the HeadCell component', () => {
                expect(TableModel.HeadCell).toBeA(Function);
            });

            it('the Body component', () => {
                expect(TableModel.Body).toBeA(Function);
            });

            it('the BodyRow component', () => {
                expect(TableModel.BodyRow).toBeA(Function);
            });

            it('the BodyCell component', () => {
                expect(TableModel.BodyCell).toBeA(Function);
            });

            it('the Foot component', () => {
                expect(TableModel.Foot).toBeA(Function);
            });

            it('the FootRow component', () => {
                expect(TableModel.FootRow).toBeA(Function);
            });

            it('the FootCell component', () => {
                expect(TableModel.FootCell).toBeA(Function);
            });

            it('the alternateRows behavior', () => {
                expect(TableModel.alternateRows).toBeA(Function);
            });
        });

        describe('named exports for', () => {
            it('PropTypes', () => {
                expect(PropTypes).toBeA(Object);
            });

            it('the Table component', () => {
                expect(Table).toBeA(Function);
            });

            it('the Head component', () => {
                expect(Head).toBeA(Function);
            });

            it('the HeadRow component', () => {
                expect(HeadRow).toBeA(Function);
            });

            it('the HeadCell component', () => {
                expect(HeadCell).toBeA(Function);
            });

            it('the Body component', () => {
                expect(Body).toBeA(Function);
            });

            it('the BodyRow component', () => {
                expect(BodyRow).toBeA(Function);
            });

            it('the BodyCell component', () => {
                expect(BodyCell).toBeA(Function);
            });

            it('the Foot component', () => {
                expect(Foot).toBeA(Function);
            });

            it('the FootRow component', () => {
                expect(FootRow).toBeA(Function);
            });

            it('the FootCell component', () => {
                expect(FootCell).toBeA(Function);
            });

            it('the alternateRows behavior', () => {
                expect(alternateRows).toBeA(Function);
            });
        });
    });
});
