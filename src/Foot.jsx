import React from 'react';

export default React.createClass({
    displayName: 'Foot',

    render() {
        return (<tfoot {...this.props} />);
    }
});
