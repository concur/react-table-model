import React from 'react';

export default React.createClass({
    displayName: 'BodyRow',

    propTypes: {
        children: React.PropTypes.node.isRequired
    },

    render() {
        return (<tr {...this.props} />);
    }
});
