import webpack from 'webpack';

const path = require('path');

export default {
    entry: './src/index',
    output: {
        libraryTarget: 'umd',
        library: 'TableModel',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
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
        },
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            }
        }
    ],
    plugins: [
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
