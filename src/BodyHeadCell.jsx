import React from 'react';

export default React.createClass({
    displayName: 'BodyHeadCell',

    render() {
        return (<th {...this.props} />);
    }
});
