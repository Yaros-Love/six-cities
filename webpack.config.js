const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        open: false,
        port: 1337,
        historyApiFallback: true
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            },
        }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
    },
    devtool: 'source-map',
};
