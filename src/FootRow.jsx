import React from 'react';

export default React.createClass({
    displayName: 'FootRow',

    propTypes: {
        children: React.PropTypes.node.isRequired
    },

    render() {
        return (<tr {...this.props} />);
    }
});
