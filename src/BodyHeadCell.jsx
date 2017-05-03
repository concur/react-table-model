import React from 'react';

export default React.createClass({
    displayName: 'BodyCell',

    render() {
        return (<th {...this.props} />);
    }
});
