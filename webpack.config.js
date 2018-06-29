let webpack = require('webpack');

module.exports =  {
	entry: './reactApp/index.js',
	output : {
		path : __dirname + '/build',
		filename: 'index.bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react']
					}
				}
			},
		]
	},
	stats : {
		colors: true
	},
	devtool: 'source-map'
};