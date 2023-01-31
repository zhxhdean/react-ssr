module.exports = {
	module: {
		rules: [{
			test: /\.(js|jsx)?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			options: {
				presets: [['@babel/preset-react'], ['@babel/preset-env', {modules: false}]],
				'plugins': ['@babel/plugin-transform-regenerator', '@babel/plugin-transform-runtime']
			}
		}]
	},
	 resolve: {
		extensions: [".js", ".jsx"],
		mainFiles: ["index"]
	 }
}