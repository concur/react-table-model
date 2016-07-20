import React from 'react';
import { forEach } from 'lodash';

export default React.createClass({
    displayName: 'Body',

    propTypes: {
        children: React.PropTypes.node,
        rowBehaviors: React.PropTypes.arrayOf(React.PropTypes.func)
    },

    render() {
        let { children, rowBehaviors, ...props } = this.props;

        if (rowBehaviors) {
            forEach(rowBehaviors, (applyBehavior) => {
                children = applyBehavior(children);
            });
        }

        return (
            <tbody {...props}>
                { children }
            </tbody>
        );
    }
});
