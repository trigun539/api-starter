var path = require('path');

module.exports = {
  entry: {
    main: './main.js',
  },
  output: {
    filename: './app.js'
  },
  progress: true,
  colors: true,
  inline: true,
	resolve: {
		modulesDirectories: ['node_modules']
	},
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: false,
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
	devtool: '#eval-source-map'
};
