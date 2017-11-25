module.exports = {
  entry: [
    'react-hot-loader/patch',
    `${__dirname}/src/index.jsx`,
  ],
  output: {
    publicPath: '/',
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
};
