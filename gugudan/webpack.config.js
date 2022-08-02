const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'gugudan',
    mode: 'development', // 실제 서비스에서는 production
    devtool: 'eval', //production일 때는 hidden-source-map
    resolve: { // 확장자 알아서 처리
        extensions: ['.js', '.jsx']
    },
    entry: { // 입력
        app: './client',
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets:
                    ['@babel/preset-env', '@babel/preset-react'],
            }
        }]
    },

    output: { // 출력
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
};