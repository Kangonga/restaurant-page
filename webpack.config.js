const { type } = require('os');
const path = require('path');

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test:/\.(png|jpg|gif|jpeg|svg)$/i,
                type:'asset/resource',
            },            
        ]
    }
}