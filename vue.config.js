const {defineConfig} = require('@vue/cli-service')
const webpack = require('webpack')
const vuxLoader = require('@vux/loader')
//由于在webpack5中移除了nodejs核心模块的polyfill自动引入，所以需要手动引入
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const px2rem = require("postcss-plugin-px2rem");

const px2remOpts = {
    rootValue: 37.5, //换算基数，1rem相当于10px,值为37.5时,1rem为20px,淘宝的flex默认为1rem为10px
    //unitPrecision: 5, //允许REM单位增长到的十进制数字。
    //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
    //propBlackList: ['border'], //黑名单
    exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
    // selectorBlackList: [], //要忽略并保留为px的选择器
    // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
    // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
    mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
    minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
};


module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // 运行 vue-cli-service build 时生成的生产环境构建文件的目录
    outputDir: "dist",
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: "public",
    devServer: {
        port: 8080, // 端口号
        host: '0.0.0.0',
        open: false, //配置自动启动浏览器
        proxy: {
            '/aiui': {
                target: 'https://openapi.xfyun.cn/v2/aiui',//设置你调用的接口域名和端口号
                changeOrigin: true, //跨域
                pathRewrite: {
                    '^/aiui': '/' //这里理解成用‘/api’代替target里面的地址，
                }
            },
            '/douban': {
                target: 'https://api.douban.com/v2',//设置你调用的接口域名和端口号
                changeOrigin: true, //跨域
                pathRewrite: {
                    '^/douban': '/' //这里理解成用‘/api’代替target里面的地址，
                }
            }
        },
    },
    //configureWebpack函数形式
    configureWebpack: config => {
        vuxLoader.merge(config, {
            plugins: ['vux-ui']
        })

        // 返回一个将要合并得对象
        return {
            module: {
                rules: [
                    {
                        test: /\.(yaml|yml)$/,
                        loader: 'js-yaml-loader'
                    },
                    {
                        test: /\.css$/,
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                ident: "postcss",
                                config: false,
                                plugins: [
                                    px2rem(px2remOpts),
                                ],
                            }
                        }
                    }
                ]
            },
            plugins: [
                new webpack.ProvidePlugin({
                    'window.Quill': 'quill/dist/quill.js',
                    'Quill': 'quill/dist/quill.js'
                }),
                new webpack.ProvidePlugin({
                    process: 'process/browser',
                    Buffer: ['buffer', 'Buffer']
                }),
                new NodePolyfillPlugin()
            ]
        }
    }
})
