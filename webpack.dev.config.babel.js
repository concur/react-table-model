import base from './webpack.base.config.babel';
import merge from 'webpack-merge';

export default merge(base, {
    output: {
        filename: 'react-table-model.js'
    }
});
