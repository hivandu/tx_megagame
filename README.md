# SISO-腾讯外包项目《游戏创意大赛》

> 此项目为腾讯的游戏创意大赛外包项目，使用vue2+webpack构建

## 基本说明

四个组件为在`src/components/`内

视图组件在`src/views`内

构建好的文件在`dist`内

`ossweb-img/mock`内有相关json文件

`sidebar`的内容和链接在`ossweb-img/mock/slide.json`内更改

资讯和作品的测试数据为`ossweb-img/mock/information.json` 和`work.json`

请求可以在相关页面内更改

测试服务器上没有安装中文语言包，如果改成`gbk`会显示乱码，所以展示暂时使用`utf-8`,之后可以更改回来。

## 使用和构建方法

需要**nodejs**环境，可以替换`yarn`为`npm`

``` bash
# 安装所需模块
yarn install

# 启动开发服务 访问:http://localhost:8089/
yarn run dev

# 构建内容
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run e2e tests
yarn run e2e

# run all tests
yarn test
```


## 主要文件目录

```json
- ...
- **dist**/ // 构建目录，可上线的文件都构建在这里
|   - ossweb-img/ //
    | - js // 构建完成的js文件
    | - css // 构建完成的css文件
    | - image // 构建完成的图片资源
    | - mock // 构建完成的测试数据
    | - file // 构建完成的部分可下载资源
- ossweb-img/ // 资源文件
- src/ // 主要项目目录
    | - ...
    | - components/ // 组件目录，
    | - libs/ // 库，写了一个routes路由文件
    | - styles/ // 重置和基础css
    | - views/ // 项目视图文件
    - App.vue // 主文件
    - main.js // 入口文件
- index.html 
- package.json // node设置文件
- README.md // 本文档
```

## libs/routes

路由设置文件，其中的路由组件关联设置全在这里

## src/components

组件，包含`button(按钮)`,`slide(边栏)`,`qrcode(二维码)`,`submit(提交成功提示)`四个组件，其四个组件都是浮动组件。

其中关联到某个部分的文案等问题，需要单独对应其文件修改。

### src/components/slide

边栏组件，其中边栏是动态渲染的。其数据为`ossweb-img/mock/slide.json`, 如需更改边栏，更改这个文件内的数据。特别是**精彩前瞻**，需要更改为确定路径

*slide.json*

```json
// 部分内容如下
[{
  "name":"精彩前瞻", // 名称
  "link":"http://localhost/guide/index.htm" // 路径
},{
  "name": "大赛首页",
  "link": "/home"
}...]
```

## src/views

主要视图组件，基本一个路由一个组件。其他组件都不太需要说明，只说明部分需要拉取数据的组件

### activityItems

**资讯页面**
其中需要拉取`information.json`内的数据，

```json
// 部分数据
/**
* [param] img:资讯缩略图, title: 标题, link: 链接地址
* 
/
{
  "success": true,
  "msg":"已获取资讯信息",
  "obj":{
    "result":[{
      "img":"../../../ossweb-img/image/information-item.png",
      "title":"16款新品深化精品布局 极光计划正式亮相",
      "link":"test"
    },{
      "img":"../../../ossweb-img/image/information-item.png",
      "title":"16款新品深化精品布局 极光计划正式亮相",
      "link":"test"
    }]
  }
}
```

有部分功能由于限制可能未完成。有什么问题请联系我, `mailto: doo[at]hivan.me`

## 视频地址及要求

--需求: 内置播放--

```json
不再孤单: https://v.qq.com/iframe/player.html?vid=i0356wc5kbg&tiny=0&auto=0

蔬菜兔: https://v.qq.com/iframe/player.html?vid=i0356lkydu4&tiny=0&auto=0

王子玫瑰: https://v.qq.com/iframe/player.html?vid=f0356s08y9j&tiny=0&auto=0

Inverted: https://v.qq.com/iframe/player.html?vid=h0356wpiw14&tiny=0&auto=0

果冻老爹: https://v.qq.com/iframe/player.html?vid=m0356wqb2h2&tiny=0&auto=0

Zubbles: https://v.qq.com/iframe/player.html?vid=f0356vrj9fz&tiny=0&auto=0

PKer: https://v.qq.com/iframe/player.html?vid=z0356qheb1z&tiny=0&auto=0

L-O-H: https://v.qq.com/iframe/player.html?vid=y0356f9i55k&tiny=0&auto=0
```