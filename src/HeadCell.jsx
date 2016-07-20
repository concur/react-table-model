import React from 'react';
import PropTypes from './PropTypes';
import classnames from 'classnames';

export default React.createClass({
    displayName: 'HeadCell',

    propTypes: {
        children: React.PropTypes.node,
        className: React.PropTypes.string,
        sortProperty: PropTypes.sortProperty,
        sorting: PropTypes.sorting
    },

    _handleSort() {
        if (this.props.sorting.onSort) {
            this.props.sorting.onSort(this.props.sortProperty);
        }
    },

    render() {
        let { sortProperty, sorting, children, className, ...headCellProps } = this.props;

        // If there's no sort property or current sorting defined
        // make sure not to indicate the column as sorted
        if (sortProperty && sorting && sortProperty === sorting.property) {
            className = classnames(className, sorting.descending ? 'desc' : 'asc');
        }
        const href = 'javascript:void(0)'; // eslint-disable no-script-url

        return (
            <th { ...headCellProps } className={ className }>
                { sortProperty && sorting && sorting.onSort ?
                    (<a href={ href } onClick={ this._handleSort }>{ children }</a>) :
                    children
                }
            </th>
        );
    }
});
