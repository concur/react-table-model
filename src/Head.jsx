import React from 'react';
import PropTypes from './PropTypes';
import propagatePropsToChildren from './utils/propagatePropsToChildren';

export default React.createClass({
    displayName: 'Head',

    propTypes: {
        children: React.PropTypes.node,
        sorting: PropTypes.sorting
    },

    render() {
        const { children, sorting, ...headProps } = this.props;

        return (
            <thead {...headProps}>
                { propagatePropsToChildren(children, { sorting }, PropTypes) }
            </thead>
        );
    }
});
