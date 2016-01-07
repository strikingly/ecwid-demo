module.exports = {
	entry: './js/bootstrap.js',
	output: {
		path: 'js',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel",
			query: {
				presets: ['react', 'es2015']
			}
		}]
	}
}
