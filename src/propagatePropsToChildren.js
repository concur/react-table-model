import React from 'react';
import isUndefined from './utils/isUndefined';

export default function propagatePropsToChildren(children, props, propTypes) {
    // If none of the props are defined, then we can short circuit
    let propsToApply = Object.keys(propTypes).some(propName => !isUndefined(props[propName]));

    if (propsToApply) {
        return React.Children.map(children, (child) => {
            // Guard against null children, which happens
            if (child && child.type && child.type.propTypes) {
                let newProps = null;

                Object.keys(propTypes).forEach((propName) => {
                    // If the parent has this property, the child defines the property with the same prop type,
                    // and the child's property is not defined, then apply the parent prop value to the child
                    // Note the importance of using isUndefined--this allows falsy values to be propagated down
                    if (!isUndefined(props[propName]) && child.type.propTypes[propName] === propTypes[propName] && isUndefined(child.props[propName])) {
                        newProps = newProps || {};
                        newProps[propName] = props[propName];
                    }
                });

                if (newProps) {
                    return React.cloneElement(child, newProps);
                }
            }

            return child;
        });
    }

    return children;
}
