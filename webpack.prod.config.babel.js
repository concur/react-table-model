import webpack from 'webpack';
import base from './webpack.base.config.babel';
import merge from 'webpack-merge';

export default merge(base, {
    output: {
        filename: 'react-table-model.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});
