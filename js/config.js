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
      'true': '/ossweb-img/mock/information.json',
      'false': '/ossweb-img/mock/information.json'
    }

    // 获取资讯
    ,
    'getActivity': {
      'true': '/ossweb-img/mock/activityInfo.json',
      'false': '/ossweb-img/mock/activityInfo.json'
    }

    // 获取全部作品信息列表
    ,
    'getWorkItems': {
      'true': '/ossweb-img/mock/work.json',
      'false': '/ossweb-img/mock/work.json'
    }

    // 获取2016作品列表
    ,
    'getOldWork': {
      'true': '/ossweb-img/mock/oldWorkItems.json',
      'false': '/ossweb-img/mock/oldWorkItems.json'
    }

    // 获取作品详情
    ,
    'getWorkInfo': {
      'true': '/ossweb-img/mock/workInfo.json',
      'false': '/ossweb-img/mock/workInfo.json'
    }

    // 获取导师列表
    ,
    'getMentor': {
      'true': '/ossweb-img/mock/mentor.json',
      'false': '/ossweb-img/mock/mentor.json'
    }

    // 提交表单
    ,
    'postSubmit': {
      'true': '/ossweb-img/mock/form.json',
      'false': '/ossweb-img/mock/form.json',
    }

    // 获取验证码
    ,
    'getVerification': {
      'true': '/ossweb-img/mock/getVerification.json',
      'false': '/ossweb-img/mock/getVerification.json',
    }

    // 边栏列表
    ,
    'getSlideItems': {
      'true': '/ossweb-img/mock/slide.json',
      'false': '/ossweb-img/mock/slide.json',
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
