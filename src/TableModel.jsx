import React from 'react';
import propagatePropsToChildren from './utils/propagatePropsToChildren';
import PropTypes from './PropTypes';
import ReactPropTypes from 'prop-types';

const TableModel = ({ children, sorting, ...tableProps }) => (
    <table {...tableProps}>
        { propagatePropsToChildren(children, { sorting }, PropTypes) }
    </table>
);

TableModel.propTypes = {
    children: ReactPropTypes.node,
    sorting: PropTypes.sorting
};
