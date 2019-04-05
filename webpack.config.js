const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// check if this is a production build
const isProduction = process.env.NODE_ENV === 'production';

const config = {
    mode: isProduction ? 'production' : 'development',
    entry: path.resolve('src/index.ts'),
    devtool: "source-map",
    output: {
        path: path.resolve('dist'),
        filename: `index.js`,
        library: 'tegridy',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            // load ts/tsx files
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            // load js/jsx files
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    optimization:
        !isProduction
            ? {}
            : {
                minimizer: [

                    new UglifyJsPlugin({
                        sourceMap: true,
                        extractComments: true,
                        uglifyOptions: {
                            warnings: false,
                            parse: {},
                            compress: {
                                passes: 3
                            },
                            mangle: {
                                // properties: true, // breaks the build
                                eval: true,
                                keep_fnames: false,
                                toplevel: false
                            },
                            output: null,
                            toplevel: false,
                            nameCache: null,
                            ie8: false,
                            sourceMap: true
                        }
                    })
                ]
            }
};

module.exports = config;
