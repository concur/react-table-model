import React from 'react';
import propagatePropsToChildren from './utils/propagatePropsToChildren';
import PropTypes from './PropTypes';

export default React.createClass({
    displayName: 'TableModel',

    propTypes: {
        children: React.PropTypes.node,
        sorting: PropTypes.sorting
    },

    render() {
        const { children, sorting, ...tableProps } = this.props;

        return (
            <table {...tableProps}>
                { propagatePropsToChildren(children, { sorting }, PropTypes) }
            </table>
        );
    }
});
