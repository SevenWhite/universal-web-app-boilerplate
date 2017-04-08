const path = require('path');

module.exports = {
	entry: './src/client/index',
	output: {
		path: path.resolve(__dirname, 'public/assets'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, './src/client')
				],
				loader: 'babel-loader'
			}
		]
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	},
	target: 'web'
};