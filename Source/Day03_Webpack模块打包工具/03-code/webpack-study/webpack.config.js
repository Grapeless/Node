const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 配置入口
  entry: './src/main.js',
  // 配置出口, 必须是绝对路径
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  // 安装插件
  plugins: [new HtmlWebpackPlugin({
    // 指定自动复制的 HTML 文件
    template: path.join(__dirname, 'public/index.html')
  })],
  module: {
    rules: [
      {
        // 匹配 css 结尾的文件, webpack 打包时如果碰到 css 文件, 会自动交给下面的 loader 来处理
        test: /\.css$/i,
        // 先交给 css-loader 再交给 style-loader
        // 从右到左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          // 解析 less, 先交给 less-loader 将 less 转成 css 
          // 再交给 css-loader 解析 css
          // 最后交给 style-loader 插入到 DOM
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      { // 针对资源模块（图片，字体文件，图标文件等）处理
        test: /\.(png|jpg|jpeg|gif|bmp)$/i,
        type: 'asset', // 根据文件大小（8KB）小于：把文件转成 base64 打包进 js 文件中（减少网络请求次数）大于：文件复制到输出的目录下
        generator: { // 输出文件时，路径+名字
          filename: 'assets/[hash][ext]'
        }
      },
      {
        // 匹配以 .js 结尾的文件
        // mjs 就是能使用 es6 module 模块化的 js 文件, 不需要额外做 type 配置
        test: /\.m?js$/,
        // 排除: node_modules bower_components (bower 打包工具的包)
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // preset-env 语法预设, 将 xxx 语法转成 xxx 语法
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  // 把代码位置信息一起打包
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
}