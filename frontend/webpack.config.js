const HtmlWebpackPlugin = require('html-webpack-plugin');

const IS_PROD = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: [
    (IS_PROD ? null : 'react-hot-loader/patch'),
    `${__dirname}/src/index.jsx`,
  ].filter(e => e),
  output: {
    publicPath: (process.env.PUBLIC_PATH || (IS_PROD ? './' : '/')),
    path: `${__dirname}/dist`,
    filename: 'kompis.js',
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /.(jpg|jpeg|png|mp3|gif|woff|ttf|svg|eot|woff2)$/,
        use: ['url-loader?limit=50000'],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Kompis' }),
  ],
};
