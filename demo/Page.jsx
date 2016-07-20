import React from 'react';

export default React.createClass({
    displayName: 'Demo Page',

    propTypes: {
        children: React.PropTypes.node.isRequired
    },

    render() {
        return (
            <html>
                <head>
                    <title>react-table-model demo</title>
                    <link rel='stylesheet' href='/css/demo.css' />
                </head>
                <body>
                    { this.props.children }
                </body>
            </html>
        );
    }
});
