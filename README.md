#### 脚手架构建说明

##### `webpack`

- 目前使用是 **4.x**最高版本

- 在配置文件中`webpack.config.js`中进行声明和构建

- [x] 目前是 ***5.x* 【后续在迭代】

> 入口 `entry`

- 告诉`webpack`原始文件，寻找依赖包和各种资源，根据资源选择合适`loader`进行处理

> 出口 `output`

- 告诉`webpack`经过各种`loader`处理后的文件生成到那个目录中（也就是文件所在地方）

> `loader` 结合 `babel`

- 除去原生`javascript`，还需要处理非`javascript`文件

- [x] 图片

- [x] 样式

- [x] `es6+`API转换成`es3~es5`被浏览器支持语法

> 插件 `plugins`

- 可以执行范围更广的任务，包括**打包**、**优化**、**压缩**、**重新定义环境**

- 开发过程中**热启动**、把`js`文件放到`html`中

- 引入响应依赖包（支持两种），添加到`plugins`数组中；多数插件可以选择`option`自定义

- [查询网址](https://www.npmjs.com/)

- [x] `import`导入 、`require`导入

> 模式 `mode`

- 设置**生成模式** `production`、**开发模式** `development`、**none模式**

- 开发环境和生产环境中打出来的文件是不一样的

```js
const path = require('path');    // 路径 node API
module.exports = {
  mode: 'development',         // production 、development 、 none
  entry: './path/index.js',    // 可以是字符串，数组，对象
  output: {
    path: path.resolve(__dirname, 'dist'),  // 打包以后文件
    filename: 'index.[name].[bundle].js'    // 可以设置hsah
  }
}

```

#### `babel`

- **工作原理：**是把一种代码转换成另一种代码

![avatar](/image/babel.jpg)

- `babel`把原始代码转成抽象语法树（AST）


#### `JavaScript` 知识点集合

- 包含 `es5`到`es10`所有的知识点集合

> 文件说明

- ``