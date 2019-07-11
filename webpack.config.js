// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = 'development';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = (MODE === 'development');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: MODE,

    devServer: {
        contentBase: "dist",
        open: true
    },

    entry: './src/index.js',
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,
        // 出力ファイル名
        filename: 'main.js'
    },

    module: {
        rules: [
            // Sassファイルの読み込みとコンパイル
            {
                test: /\.scss/, // 対象となるファイルの拡張子
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        // CSSをバンドルするための機能
                        {
                            loader: 'css-loader',
                            options: {
                                // オプションでCSS内のurl()メソッドを取り込む
                                url: true,
                                // ソースマップの利用有無
                                sourceMap: enabledSourceMap,

                                // 0 => no loaders (default);
                                // 1 => postcss-loader;
                                // 2 => postcss-loader, sass-loader
                                importLoaders: 2
                            },
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                // PostCSS側でもソースマップを有効にする
                                sourceMap: true,
                                plugins: [
                                    // Autoprefixerを有効化
                                    // ベンダープレフィックスを自動付与する
                                    require("autoprefixer")({
                                        grid: true
                                    })
                                ]
                            }
                        },
                        // Sassをバンドルするための機能
                        {
                            loader: 'sass-loader',
                            options: {
                                // ソースマップの利用有無
                                sourceMap: enabledSourceMap,
                            }
                        }
                    ],
                }),
            },
            {
                test: /\.(wof|woff|woff2|ttf)$/,
                loader: "url-loader"
            },
            {
                // 対象となるファイルの拡張子
                test: /\.(gif|png|jpg|eot|svg)$/,
                // 画像を埋め込まず任意のフォルダに保存する
                loader: 'file-loader',
                options: {
                    name: './images/[name].[ext]'
                }
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
    ],
};