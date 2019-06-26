// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = 'development';

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

    module: {
        rules: [
            // Sassファイルの読み込みとコンパイル
            {
                test: /\.scss/, // 対象となるファイルの拡張子
                // ローダー名
                use: [
                    // linkタグに出力する機能
                    'style-loader',
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
                    // Sassをバンドルするための機能
                    {
                        loader: 'sass-loader',
                        options: {
                            // ソースマップの利用有無
                            sourceMap: enabledSourceMap,
                        }
                    }
                ],
            },
            {
                // 対象となるファイルの拡張子
                test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
                // 画像を埋め込まず任意のフォルダに保存する
                loader: 'file-loader',
                options: {
                    name: './images/[name].[ext]'
                }
            },
            {
                test: /\.(eot|otf|ttf|woff2?|svg)(\?.+)?$/,
                loader: 'file-loader',
                options: {
                    name: './font/[name].[ext]'
                }
            },
        ],
    },
};