var path = require('path');


module.exports = {
    entry: "./widget.jsx",
    output:{
        path: path.resolve(__dirname),
        filename:"bundle.js",
    },
    module: {
        rules: [
          {
            test: [/\.jsx?$/],
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              query: {
                presets: ['@babel/env', '@babel/react']
              }
            },
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true
                }
              }
            ],
            include: /\.module\.css$/
          },   
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ],
            exclude: /\.module\.css$/
          } 
        ]
      },
     
    devtool:'source-map',
    resolve:{
        extensions:['.js','.jsx','*']
    }
}
