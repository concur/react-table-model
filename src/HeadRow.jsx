import React from 'react';
import PropTypes from './PropTypes';
import propagatePropsToChildren from './utils/propagatePropsToChildren';

export default React.createClass({
    displayName: 'HeadRow',

    propTypes: {
        children: React.PropTypes.node.isRequired,
        sorting: PropTypes.sorting
    },

    render() {
        const { children, sorting, ...headRowProps } = this.props;

        return (
            <tr {...headRowProps}>
                { propagatePropsToChildren(children, { sorting }, PropTypes) }
            </tr>
        );
    }
});
