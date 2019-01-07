const config = {
    mode: 'development',

    entry: './src/app.js',

    output: {
        path: __dirname + '/dist/[hash]',
        publicPath: "http://cdn.example.com/assets/[hash]/"
    }
}

module.exports = config
