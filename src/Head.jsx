import React from 'react';
import PropTypes from './PropTypes';
import ReactPropTypes from 'prop-types';
import propagatePropsToChildren from './utils/propagatePropsToChildren';

const Head = ({ children, sorting, ...headProps }) => { // eslint-disable-line
    return (
        <thead {...headProps}>
            { propagatePropsToChildren(children, { sorting }, PropTypes) }
        </thead>
    );
};

Head.propTypes = {
    children: ReactPropTypes.node,
    sorting: PropTypes.sorting
};

export default Head;
