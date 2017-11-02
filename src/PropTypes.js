import React from 'react';
import ReactPropTypes from 'prop-types';

export default {
    sortProperty: ReactPropTypes.string,
    sorting: ReactPropTypes.shape({
        descending: ReactPropTypes.bool,
        property: ReactPropTypes.string,
        onSort: ReactPropTypes.func
    })
};
