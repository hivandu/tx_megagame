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
  env.setEnv('pathUrlPrefix', '/act/a20170522nextidea')


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
      'true': '/mock/information.json',
      'false': '/mock/information.json'
    }

    // 获取资讯
    ,
    'getActivity': {
      'true': '/mock/activityInfo.json',
      'false': '/mock/activityInfo.json'
    }

    // 获取全部作品信息列表
    ,
    'getWorkItems': {
      'true': '/mock/work.json',
      'false': '/mock/work.json'
    }

    // 获取2016作品列表
    ,
    'getOldWork': {
      'true': '/mock/oldWorkItems.json',
      'false': '/mock/oldWorkItems.json'
    }

    // 获取作品详情
    ,
    'getWorkInfo': {
      'true': '/mock/workInfo.json',
      'false': '/mock/workInfo.json'
    }

    // 获取导师列表
    ,
    'getMentor': {
      'true': '/mock/mentor.json',
      'false': '/mock/mentor.json'
    }

    // 提交表单
    ,
    'postSubmit': {
      'true': '/mock/form.json',
      'false': '/mock/form.json',
    }

    // 获取验证码
    ,
    'getVerification': {
      'true': '/mock/getVerification.json',
      'false': '/mock/getVerification.json',
    }

    // 验证验证码
    ,
    'verifyCode':{
      "true":'/mock/verifyCode.json',
      "false":'/mock/verifyCode.json'
    }

    // 边栏列表
    ,
    'getSlideItems': {
      'true': '/mock/slide.json',
      'false': '/mock/slide.json',
    }

    // 边栏列表
    ,
    'getCooperation': {
      'true': '/mock/sponsor.json',
      'false': '/mock/sponsor.json',
    }

  }

  var flag = ENV.getEnv('remoteInvoke') + '';

  // 引入访问路径前缀
  var _pathUrlPrefix = ENV.getEnv('pathUrlPrefix');

  window['PathUtil'] = {
    pathRoot: _pathUrlPrefix,
    getPath: function(key) {
      return this.pathRoot + URLS[key][flag];
    }
  }
})(window);
