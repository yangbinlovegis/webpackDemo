var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool:'source-map',

	entry:['./js/index.jsx'],
	output: {
		filename:'bundle.js'
	},
	plugins: [
        new webpack.optimize.UglifyJsPlugin({
        	compressor: {
        		warnings: false,
        	},
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ],
    module: {
        loaders:[
            {
                test: /\.jsx|\.js$/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react','es2015','stage-0'] //es2015必须放在stage-0后面，否则遇到react的class报错
                }
                //}
            }
        ]
    },
    resolve: {
        alias: {
            'js': __dirname+'/js'
        },
        extensions: ['.js','.jsx'] //import 文件的时候默认省略后缀
    }
}