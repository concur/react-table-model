import React from 'react';
import PropTypes from './PropTypes';
import ReactPropTypes from 'prop-types';
import classnames from 'classnames';

const HeadCell = (props) => {
    let {sortProperty, sorting, children, className, ...headCellProps} = props;

    const _handleSort = () => {
        if (props.sorting.onSort) {
            props.sorting.onSort(props.sortProperty);
        }
    };
    // If there's no sort property or current sorting defined
    // make sure not to indicate the column as sorted
    if (sortProperty && sorting && sortProperty === sorting.property) {
        className = classnames(className, sorting.descending ? 'desc' : 'asc');
    }
    const href = 'javascript:void(0)'; // eslint-disable no-script-url

    return (
        <th { ...headCellProps } className={ className }>
            { sortProperty && sorting && sorting.onSort ?
                (<a href={ href }
                    onClick={ _handleSort }>{ children }</a>) :
                children
            }
        </th>
    );
};

HeadCell.propTypes = {
    children: ReactPropTypes.node,
    className: ReactPropTypes.string,
    sortProperty: PropTypes.sortProperty,
    sorting: PropTypes.sorting
};

export default HeadCell;
