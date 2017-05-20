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

```bash
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
  "link":"http://project.hivan.me/guide/index.htm" // 路径
},{
  "name": "大赛首页",
  "link": "/home"
}...]
```

## src/views
主要视图组件，基本一个路由一个组件。其他组件都不太需要说明，只说明部分需要拉取数据的组件

### activityInfo

**资讯详情页**

### activityItems

**资讯页面列表**
其中需要拉取`information.json`内的数据，

```json
/**
* [param] img:资讯缩略图, title: 标题, link: 链接地址
*/
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

而页面中的`gotoInfo(item)`是传参跳转，跳转到详情页后将根据参数决定详情页的具体数据， 详情可见 ` ### review` 和`### workInfo` 之间的关系.

### allWorks

**全部作品列表**

和资讯列表页面基本相同, 数据为`work.json`,

```json
/**
* [param] key基本相同，不同的是多了一个 vid: 为视频唯一码
*/
{
  "success": true,
  "msg":"已获取资讯信息",
  "obj":{
    "result":[{
      "img":"../../../ossweb-img/image/information-item.png",
      "title":"16款新品深化精品布局 极光计划正式亮相",
      "vid":"h0356wpiw14",
      "link":"test"
    },{
      "img":"../../../ossweb-img/image/information-item.png",
      "title":"16款新品深化精品布局 极光计划正式亮相",
      "vid":"h0356wpiw14",
      "link":"test"
    }]
  }
}
```

`gotoInfo(item)`方法也将传递参数`query:{“vid”: item.vid}`来传参, 页面跳转到详情页传递的参数只有`vid`, 将根据`vid`传参拉取数据

**由于我测试数据内`vid`都设置的`h0356wpiw14`，为《Inverted》的视频唯一码，所以在全部作品页面跳转到详情页展示的都是《Inverted》页面**

### award

**奖项设置**

### cooperation

**合作伙伴**

### home

**大赛首页**

### index

**主界面**

所有组件的显示都在这个页面执行

### introduce

**大赛简介**

### mentor

**大赛评委**

大赛评委是动态拉取数据的，页面数据为`mentor.json`

```json
/**
 * [json][导师库]
 * @param
 *   slide: 分组
 *   result: 分组内容
 *   name: 导师姓名
 *   image: 导师照片地址
 *   info: 导师信息
 */
{
  "success": true,
  "msg": "",
  "obj": [{
    "slide": "",
    "result": [{
      "name": "夏琳",
      "image": "../ossweb-img/image/foto-sammi.jpg",
      "info": "腾讯游戏学院院长"
    }, {
      "name": "刘子建",
      "image": "../ossweb-img/image/foto-jim.jpg",
      "info": "腾讯游戏学院副院长"
    }, {
      "name": "张晗劲",
      "image": "../ossweb-img/image/foto-hanjin.jpg",
      "info": "魔方工作室群总裁"
    }, {
      "name": "刘丹",
      "image": "../ossweb-img/image/foto-walker.jpg",
      "info": "天行工作室总经理"
    }, {
      "name": "沈黎",
      "image": "../ossweb-img/image/foto-lishen.jpg",
      "info": "NEXT研发中心总经理"
    }]
  }, {
    "slide": "",
    "result": [{
      "name": "夏琳",
      "image": "../ossweb-img/image/foto-sammi.jpg",
      "info": "腾讯游戏学院院长"
    }, {
      "name": "刘子建",
      "image": "../ossweb-img/image/foto-jim.jpg",
      "info": "腾讯游戏学院副院长"
    }, {
      "name": "张晗劲",
      "image": "../ossweb-img/image/foto-hanjin.jpg",
      "info": "魔方工作室群总裁"
    }, {
      "name": "刘丹",
      "image": "../ossweb-img/image/foto-walker.jpg",
      "info": "天行工作室总经理"
    }, {
      "name": "沈黎",
      "image": "../ossweb-img/image/foto-lishen.jpg",
      "info": "NEXT研发中心总经理"
    }]
  }]
}

```

### review

**精彩回顾**

这里也是一个列表展示页面， 只有八个游戏。照样是拉取数据的动态展示页面:  `oldWorkItems.json`

```json
/**
 * [json][精彩回顾列表数据]
 * @param
 *   vid: 视频唯一码
 *   name: 标题
 *   image: 缩略图地址
 */

{
  "success": true,
  "msg": "",
  "obj":[{
    "vid":"i0356wc5kbg",
    "name":"一等奖《不再孤单》",
    "image":"ossweb-img/image/review-bzgd.jpg"
  },{
    "vid":"i0356lkydu4",
    "name":"二等奖《蔬菜兔》",
    "image":"ossweb-img/image/review-sct.jpg"
  }]
}
```

`gotoWorkInfo(item)` 传递视频唯一码到详情页

### rule

**赛事规则**

### workInfo

**作品详情**

八个**”回顾作品”**以及之后上传的新作品详情展示都是这个组件

将根据传递的`vid`来进行展示数据

拉取到JSON数据后，将根据视频唯一码来进行key -> value的比对查询

```json
/**
 * [json][作品详情数据]
 * @param
 *   i0356wc5kbg: 视频唯一码, 此时作为key值
 *   title: 标题
 *   subTitle: 副标题
 *   vid: 视频唯一码
 *   navImage: 头图地址
 *   teamName: 团队名称
 *   teamMembers: 团队成员列表
 *   PPT: PPT的下载地址
 *   infoFirst: 第一段文案
 *   infoSec: 第二段文案
 * @info:
 *   文案将定义为数组，每段用","号隔开
 */
{
  "success": true,
  "msg": "success",
  "obj":{
    "i0356wc5kbg":{
      "title":"《不再孤单》",
      "subTitle":"一等奖",
      "vid":"i0356wc5kbg",
      "navImage":"ossweb-img/image/review-bzgd.jpg",
      "teamName":"测试团队",
      "teamMembers":[{
        "name":"天海波",
        "college":"已毕业",
        "professional":"设计"
      },{
        "name":"天海波",
        "college":"已毕业",
        "professional":"设计"
      },{
        "name":"天海波",
        "college":"已毕业",
        "professional":"设计"
      },{
        "name":"天海波",
        "college":"已毕业",
        "professional":"设计"
      }],
      "PPT":"",
      "infoFirst": [],
      "infoSec": []
    }
  }
}
```

### upload

**上传作品**

这个页面重点是获取验证码和表单提交两个功能

表单数据已经定义好key值

```javascript
formData: {
  captainQQ: '', // 队长QQ
  name: '', // 姓名
  colleges: '', // 学校
  grade: '', // 年纪
  pro: '', // 专业
  phone: '', // 手机
  mail: '', // 邮箱
  teamName: '', // 团队名称
  members: '', // 团队成员
  teamInfo: '' // 团队介绍
}
```

然后将整个`formData`对象进行提交

**注意：所有的方法内的ajax请求都需要另外修改地址。另外，index.html内的编码需要更改，由于展示服务器没有中文，为了展示防止乱码，暂时定位`lang=“en”`, `charset=“utf-8”`**

有部分功能由于限制可能不完善，有什么问题请联系我,
mailto:   `doo[at]hivan.me` 
wechat:  `hivandu`
phone:  `18602198175`
name: 杜斌 思烁

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
``````