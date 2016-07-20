import webpack from 'webpack';

export default {
    entry: './src/index',
    output: {
        libraryTarget: 'umd',
        library: 'TableModel',
        path: './dist/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx' ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    externals: [
        {
            'react': {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        }
    ],
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            __DEVTOOLS__: process.env.NODE_ENV === 'development',
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    node: { Buffer: false },
    devtool: 'source-map',
    devServer: {
        contentBase: './lib/'
    }
};
