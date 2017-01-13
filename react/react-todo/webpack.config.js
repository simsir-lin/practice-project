var PATH = {
  ROOT: __dirname,
  APP: __dirname + '/app',
  BUILD: __dirname + '/build'
};

module.exports = {
  entry: [
    './app/app.jsx'
  ],

  output: {
    path: PATH.BUILD + '/',  // 打包文件存放的绝对路径
    // publicPath: './src/assets/',  // index中js的引用路径
    filename: 'app.js'  // 打包后的文件名称
  },

  devServer: {
    inline: true
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],  // 处理顺序从右至左
        include: PATH.ROOT  // 在哪个路径下找文件，绝对路径
      },
      {
        test: /\.jsx$/,
        loader: 'babel',
        include: PATH.APP,
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  // 把jsx这种扩展名添加进去，这样就可以在js中import加载jsx这种扩展名的脚本
  resolve: {
      extensions: ['', '.js', '.jsx']
  }

};
