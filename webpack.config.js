var path = require('path');
var webpack = require('webpack');

const APP_DIR = path.join(__dirname, 'app/js');
const BUILD_DIR = path.join(__dirname, 'build');


module.exports = {
	context: __dirname + "/app/js",
	entry: "./app.jsx",
	output: {
		filename: "app.bundle.js",
		path: BUILD_DIR,
		publicPath: "/build/"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
};