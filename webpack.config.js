// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
    // parcel index.html
    // 파일 읽어들이는 진입점 설정
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // 첫번째 인수와 두번째 인수 경로 병합
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'app.js',
        clean: true
    },
    
    module: {
        rules: [
            {
                // s,css로 끝나는 모든 파일을 찾는 정규식
                // sass-postcss-css loader를 읽고 style-loader로 index.html에 style적용한다.
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    // output을 만드는 과정에서 plugins를 사용한다.
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })

    ],

    devServer: {
        host: 'localhost'
    }

}