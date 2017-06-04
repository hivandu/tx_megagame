//个人信息填写
amsCfg_369445 = {
  "iActivityId": 113028, //活动id
  "iFlowId": 369445, //流程id
  "_everyRead": true, //
  "fFlowSubmitEnd": function(res) {
    var code = res.sOutValue1; //状态码
    if (code == 1) {
      //替换成对应状态展示界面
    }
    if (code > 1) {
      //替换成对应状态展示界面
    }
    return code;
  },
  "fFlowSubmitFailed": function() {
    //失败会走到这个函数
    //条件不满足，ame返回大于0是后走到这里
    return false;
  }
};

//团队信息填写
amsCfg_369455 = {
  "iActivityId": 113028, //活动id
  "iFlowId": 369455, //流程id
  "_everyRead": true, //
  "fFlowSubmitEnd": function(res) {
    var code = res.sOutValue1; //状态码
    if (code == 1) {
      //替换成对应状态展示界面
    }
    if (code > 1) {
      //替换成对应状态展示界面
    }
    return code;
  },
  "fFlowSubmitFailed": function() {
    //失败会走到这个函数
    //条件不满足，ame返回大于0是后走到这里
    return false;
  }
};

//个人信息查询
amsCfg_369456 = {
  "iActivityId": 113028, //活动id
  "iFlowId": 369456, //流程id
  "fFlowSubmitEnd": function(res) {
    var userInfoList = res.sOutValue1; //状态码
    alert(userInfoList);
    /*
     *  |为分割符 顺序为qq,name,school,grade,special,tel,email
     * */
    //"2147483647|jklfdff|qinghua|||13936330131|zheshyige@qq.com"

    return userInfoList;
  },
  "fFlowSubmitFailed": function() {
    //失败会走到这个函数
    //条件不满足，ame返回大于0是后走到这里
    return null;
  }
};

//团队信息查询
amsCfg_369457 = {
  "iActivityId": 113028, //活动id
  "iFlowId": 369457, //流程id
  "fFlowSubmitEnd": function(res) {
    var teamInfoList = res.sOutValue1; //状态码
    alert(teamInfoList);

    /*
     *  |为分割符 captaleqq,teamname,teammember,tamabstract
     * */
    //"2147483647|sdfa|13936330131:45615:78445:562124|zheshyige"
    return teamInfoList;
  },
  "fFlowSubmitFailed": function() {
    //失败会走到这个函数
    //条件不满足，ame返回大于0是后走到这里
    return null;
  }
};




// 功能js

function addPlayerInfo(data) {
  console.log(data);

  var sData = {
    "iUin": data.personQQ,
    "qq": data.personQQ,
    "name": data.name,
    "tel": data.phone,
    "email": data.mail,
    "school": data.colleges,
    "grade": data.grade,
    "special": data.special
  };
  amsCfg_369445.sData = sData;
  var code = amsSubmit(113028, 369445);
  return code;
}

function addTeamInfo(data) {
  console.log(data);

  var sData = {
    "iUin": data.captainQQ,
    "captaleqq": data.captainQQ,
    "teamname": data.teamName,
    "teammeber": data.members,
    "teamabstract": data.teamInfo
  };
  amsCfg_369455.sData = sData;
  var code = amsSubmit(113028, 369455);
  return code;
}


function getPlayerInfo() {
  // $("#login_qq_span").val('7122525');
  // $("#name").val('杜斌');
  // $("#college").val('123123');
  // $("#grade").val('1232131');
  // $("#special").val('12421412');
  // $("#mobile").val('13917347555');
  // $("#email").val('doo@hivan.me');
  //var qq=document.getElementById("login_qq_span").val;

  var userInfoList = amsSubmit(113028, 369456);
  // return userInfoList;
  // return "2147483647|jklfdff|qinghua|2年级|影视动画|13936330131|zheshyige@qq.com";
}

function getTeamInfo() {
  //var qq=document.getElementById("login_qq_span").val;
  var teamInfoList = amsSubmit(113028, 369457);

  // return teamInfoList;
  // return "2147483647|sdfa|13936330131:45615:78445:562124|zheshyige";
}