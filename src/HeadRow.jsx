import React from 'react';
import PropTypes from './PropTypes';
import ReactPropTypes from 'prop-types';
import propagatePropsToChildren from './utils/propagatePropsToChildren';

const HeadRow = ({ children, sorting, ...headRowProps }) => (
    <tr {...headRowProps}>
        { propagatePropsToChildren(children, { sorting }, PropTypes) }
    </tr>
);

HeadRow.propTypes = {
    children: ReactPropTypes.node.isRequired,
    sorting: PropTypes.sorting
};

export default HeadRow;
