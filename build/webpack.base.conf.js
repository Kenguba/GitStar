'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      // ...(config.dev.useEslint ? [createLintingRule()] : []),
      // { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // {
      //   test: /\.less$/,
      //   use: ['style-loader', 'css-loader', 'less-loader'],
      //   // loader: "style-loader!css-loader!less-loader",
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}


//-------------------------------------------------------------

// const path = require('path')
// const webpack = require('webpack')
// const htmlWebpackPlugin = require('html-webpack-plugin')
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
// // const {VueLoaderPlugin} = require('vue-loader')


// module.exports = {
//   mode: 'development',
//   entry: path.join(__dirname, './src/main.js'),
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: 'bundle.js'
//   },


//   devServer: {
//     // 热更新  --open --port 3000 --contentBase src --hot
//     // open: true, // 自动打开浏览器
//     // host:'',
//     port: 3000, // 设置启动时候的运行端口
//     contentBase: 'src', // 指定托管的根目录
//     hot: true // 启用热更新 的 第1步
//   },


//   plugins: [
//     // 配置插件的节点 这是 启用热更新的第 3 步
//     // new webpack.HotModuleReplacementPlugin(), 
//     new htmlWebpackPlugin({
//       template: path.join(__dirname, './src/index.html'),     //源文件
//       filename: 'index.html'                                 //生成内存中的
//     }),
//     new VueLoaderPlugin()
//   ],


//   module: {// 配置所有第三方loader模块

//     rules: [
//       { test: /\.css$/, use: ['style-loader', 'css-loader'] },
//       { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
//       { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
//       { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' },
//       { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
//       { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, //配置Babel来转换高级的ES语法
//       { test: /\.vue$/, use: 'vue-loader' } // 处理 .vue 文件的 loader
//     ]
//   },

//   resolve: {

//     extensions: ['.js', '.jsx', '.json'],  //表示这个个文件的后缀名可以不写
//     alias: {
//       "vue$": "vue/dist/vue.js", //修改导入包路径`
//       "@": path.join(__dirname, './src') //修改导入包路径
//     }
//   }


// }



// // 选择开发、生产模式 development production
// // 在webpack 4 默认的entry文件入口 src / index   output出口文件 dist / main.js
// // exports default 这个是es语法，node不支持 node.js基于chorme的V8引擎
