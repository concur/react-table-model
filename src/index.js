import TableModel from './TableModel';
import PropTypes from './PropTypes';
import Head from './Head';
import HeadRow from './HeadRow';
import HeadCell from './HeadCell';
import Body from './Body';
import BodyRow from './BodyRow';
import BodyCell from './BodyCell';
import BodyHeadCell from './BodyHeadCell';
import Foot from './Foot';
import FootRow from './FootRow';
import FootCell from './FootCell';
import alternateRows from './alternateRows';

TableModel.PropTypes = PropTypes;
TableModel.Table = TableModel;
TableModel.Head = Head;
TableModel.HeadRow = HeadRow;
TableModel.HeadCell = HeadCell;
TableModel.Body = Body;
TableModel.BodyRow = BodyRow;
TableModel.BodyCell = BodyCell;
TableModel.BodyHeadCell = BodyHeadCell;
TableModel.Foot = Foot;
TableModel.FootRow = FootRow;
TableModel.FootCell = FootCell;
TableModel.alternateRows = alternateRows;

export default TableModel;

export {
    PropTypes,
    TableModel as Table,
    Head,
    HeadRow,
    HeadCell,
    Body,
    BodyRow,
    BodyCell,
    BodyHeadCell,
    Foot,
    FootRow,
    FootCell,
    alternateRows
};
