import React from 'react';

export default React.createClass({
    displayName: 'FootCell',

    render() {
        return (<td {...this.props} />);
    }
});
