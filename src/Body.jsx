import React from 'react';

export default React.createClass({
    displayName: 'Body',

    propTypes: {
        children: React.PropTypes.node
    },

    render() {
        let { children, ...props } = this.props;

        return (
            <tbody {...props}>
                { children }
            </tbody>
        );
    }
});
