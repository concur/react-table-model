import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

export default createReactClass({
    displayName: 'Demo Page',

    propTypes: {
        children: PropTypes.node.isRequired
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
