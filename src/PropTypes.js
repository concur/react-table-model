import React from 'react';

export default {
    sortProperty: React.PropTypes.string,
    sorting: React.PropTypes.shape({
        descending: React.PropTypes.bool,
        property: React.PropTypes.string,
        onSort: React.PropTypes.func
    })
};
