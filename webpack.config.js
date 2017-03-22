var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry:['./js/index'],
	output: {
		path: path.join(__dirname,'dist'),
		filename:'bundle.js'
	},
	plugins: [
        new webpack.optimize.UglifyJsPlugin({
        	compressor: {
        		warnings: false,
        	},
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    module: {
        loaders:[{
            test: /\.jsx?$/,  
            loader: 'babel-loader', // 'babel-loader' is also a legal name to reference  
            query: {
                presets: ['react', 'es2015']
            }
        }]  
    	// loaders: [{
    	// 	test: /\.css$/,
    	// 	loaders: ['style', 'css','babel-loader','babel?presets=es2015']    
    	// }]
    }
}