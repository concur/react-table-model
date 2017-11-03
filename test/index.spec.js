import expect from 'expect';
import TableModel, {
    alternateRows,
    Body,
    BodyCell,
    BodyRow,
    Foot,
    FootCell,
    FootRow,
    Head,
    HeadCell,
    HeadRow,
    PropTypes,
    Table
} from '../src';

describe('index', () => {
    describe('exports', () => {
        test('the TableModel as a component', () => {
            expect(TableModel).toBeA(Function);
        });

        describe('with shortcut property', () => {
            test('PropTypes', () => {
                expect(TableModel.PropTypes).toBeA(Object);
            });

            test('the Table component', () => {
                expect(TableModel.Table).toBeA(Function);
            });

            test('the Head component', () => {
                expect(TableModel.Head).toBeA(Function);
            });

            test('the HeadRow component', () => {
                expect(TableModel.HeadRow).toBeA(Function);
            });

            test('the HeadCell component', () => {
                expect(TableModel.HeadCell).toBeA(Function);
            });

            test('the Body component', () => {
                expect(TableModel.Body).toBeA(Function);
            });

            test('the BodyRow component', () => {
                expect(TableModel.BodyRow).toBeA(Function);
            });

            test('the BodyCell component', () => {
                expect(TableModel.BodyCell).toBeA(Function);
            });

            test('the Foot component', () => {
                expect(TableModel.Foot).toBeA(Function);
            });

            test('the FootRow component', () => {
                expect(TableModel.FootRow).toBeA(Function);
            });

            test('the FootCell component', () => {
                expect(TableModel.FootCell).toBeA(Function);
            });

            test('the alternateRows behavior', () => {
                expect(TableModel.alternateRows).toBeA(Function);
            });
        });

        describe('named exports for', () => {
            test('PropTypes', () => {
                expect(PropTypes).toBeA(Object);
            });

            test('the Table component', () => {
                expect(Table).toBeA(Function);
            });

            test('the Head component', () => {
                expect(Head).toBeA(Function);
            });

            test('the HeadRow component', () => {
                expect(HeadRow).toBeA(Function);
            });

            test('the HeadCell component', () => {
                expect(HeadCell).toBeA(Function);
            });

            test('the Body component', () => {
                expect(Body).toBeA(Function);
            });

            test('the BodyRow component', () => {
                expect(BodyRow).toBeA(Function);
            });

            test('the BodyCell component', () => {
                expect(BodyCell).toBeA(Function);
            });

            test('the Foot component', () => {
                expect(Foot).toBeA(Function);
            });

            test('the FootRow component', () => {
                expect(FootRow).toBeA(Function);
            });

            test('the FootCell component', () => {
                expect(FootCell).toBeA(Function);
            });

            test('the alternateRows behavior', () => {
                expect(alternateRows).toBeA(Function);
            });
        });
    });
});
