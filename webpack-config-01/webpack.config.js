const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './js/main.js',

    plugins: [
      new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: "[id].css"
      })
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },

    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         publicPath: '../'
                    //     }
                    // },
                    {
                      loader: 'style-loader/url'
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            }
        ]
    }
};
