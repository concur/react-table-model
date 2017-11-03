import React from 'react';
import ReactPropTypes from 'prop-types';

const Body = ({ children, ...props }) =>
        (
            <tbody {...props}>
                { children }
            </tbody>
        );


Body.propTypes = {
    children: ReactPropTypes.node
};

export default Body;
