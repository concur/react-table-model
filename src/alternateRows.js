import React from 'react';
import classnames from 'classnames';

export default function alternateRows(alternateClassName, firstIsAlternate) {
    return (children) => {
        // Reset alternate each time the behavior is called
        let alternate = firstIsAlternate;

        return React.Children.map(children, (child) => {
            const currentIsAlternate = alternate;
            alternate = !alternate;

            if (currentIsAlternate) {
                return child && React.cloneElement(child, {
                    className: classnames(child.props.className, (alternateClassName || 'alternaterow'))
                });
            }

            return child;
        });
    };
}
