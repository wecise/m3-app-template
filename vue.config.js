const webpack = require('webpack')
const WebpackZipPlugin = require('webpack-zip-plugin')

module.exports = {
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
    },

    outputDir: 'app/matrix/m3-app-template',
    productionSourceMap: false,

    configureWebpack: config => {
        // 生产环境
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new webpack.ProvidePlugin({
        
                    }),
                    new WebpackZipPlugin({
                        initialFile: 'app',
                        endPath: './',
                        zipName: 'app.zip',
                        //frontShell: 'sed -i \'\' \'s/src="/src="\\/static\\/app\\/matrix\\/m3-app-template/g\; s/href="/href="\\/static\\/app\\/matrix\\/m3-app-template/g\' ./app/matrix/m3-app-template/index.html',
                        behindShell: './deploy.sh'
                    })
                ]
            }
        } 
        // 开发环境
        else {
          
        }
      },

    publicPath: '/static/app/matrix/m3-app-template',

    css: {
        loaderOptions: {
            sass: {
                prependData: `$publicPath: "${ process.env.NODE_ENV === 'production' ? './' : '/' }";`
            }
        }
    }

}