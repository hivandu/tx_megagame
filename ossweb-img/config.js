;
(function(win) {
  var obj = {};
  var env = (function() {
    var _dataMap = {};
    obj.setEnv = function(k, v) {
      _dataMap[k] = v;
      return this;
    };
    obj.getEnv = function(k) {
      return _dataMap[k];
    };
    return obj;
  })();

  //root path
  var pathName = document.location.pathname;
  var index = pathName.substr(1).indexOf("/");
  var root = pathName.substr(0, index + 1);

  env.setEnv('root', root);
  env.setEnv('pathUrlPrefix', '')


  //微信充值阀值(单位分)
  // env.setEnv('weChatThreshold',0);

  //微信充值url
  // env.setEnv('rechargeWeChartUrl',root + '/wywkPay/h5Pay');

  //开启远程调用
  env.setEnv('remoteInvoke', true);

  win['ENV'] = env;

  var URLS = {
      // 获取资讯列表
      'getActivityItems': {
        'true': '/ossweb-img/information.json',
        'false': '/ossweb-img/information.json'
      }

      // 获取资讯
      ,
      'getActivity': {
        'true': '/ossweb-img/activityInfo.json',
        'false': '/ossweb-img/activityInfo.json'
      }

      // 获取全部作品信息列表
      ,
      'getWorkItems': {
        'true': '/ossweb-img/work.json',
        'false': '/ossweb-img/work.json'
      }

      // 获取2016作品列表
      , 'getOldWork':{
        'true': '/ossweb-img/oldWorkItems.json',
        'false': '/ossweb-img/oldWorkItems.json'
      }

      // 获取作品详情
      ,
      'getWorkInfo': {
        'true': '/ossweb-img/workInfo.json',
        'false': '/ossweb-img/workInfo.json'
      }

      // 获取导师列表
      ,
      'getMentor': {
        'true': '/ossweb-img/mentor.json',
        'false': '/ossweb-img/mentor.json'
      }

      // 提交表单
      ,
      'postSubmit':{
        'true':'/ossweb-img/form.json',
        'false':'/ossweb-img/form.json',
      }

      // 获取验证码
      , 'getVerification':{
        'true':'/ossweb-img/getVerification.json',
        'false':'/ossweb-img/getVerification.json',
      }

      // 边栏列表
      , 'getSlideItems':{
        'true':'/ossweb-img/slide.json',
        'false':'/ossweb-img/slide.json',
      }
    }

  var flag = ENV.getEnv('remoteInvoke')+'';
    // 引入访问路径前缀
  var _pathUrlPrefix = ENV.getEnv('pathUrlPrefix');
  window['PathUtil'] = {
    pathRoot: _pathUrlPrefix,
    getPath: function(key) {
      return this.pathRoot + URLS[key][flag];
    }
  };
  window['userStatus'] = false;
})(window);
