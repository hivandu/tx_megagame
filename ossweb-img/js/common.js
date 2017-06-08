var app = {
  init: function() {
    app.font();
    app.swiper();
    app.canvas();
    app.mentor();
  },

  font: function() {
    var documentFont = function() {};
    documentFont.set = function() {
      var _width = document.documentElement.getBoundingClientRect().width;
      _width = _width > 640 ? 640 : _width;
      _width = _width < 300 ? 300 : _width;
      document.getElementsByTagName('html')[0].style.fontSize = _width / 3.75 + 'px';
    }
    window.documentFont = new documentFont();
    documentFont.set();
  },

  canvas: function() {
    //宇宙特效
    var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      // w = canvas.width = $('.wrapper').width(),
      // h = canvas.height = $('.wrapper').height(),
      w = canvas.width = window.innerWidth,
      h = canvas.height = window.innerHeight,

      hue = 217,
      stars = [],
      count = 0,
      maxStars = 1300; //星星数量

    var canvas2 = document.createElement('canvas'),
      ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
    var half = canvas2.width / 2,
      gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#CCC');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    // End cache

    function random(min, max) {
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }

      if (min > max) {
        var hold = max;
        max = min;
        min = hold;
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
      var max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
      //星星移动范围，值越大范围越小，
    }

    var Star = function() {

      this.orbitRadius = random(maxOrbit(w, h));
      this.radius = random(60, this.orbitRadius) / 20;
      //星星大小
      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.timePassed = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 600000;
      //星星移动速度
      this.alpha = random(10, 10) / 10;

      count++;
      stars[count] = this;
    }

    Star.prototype.draw = function() {
      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
        twinkle = random(10);

      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
      }

      ctx.globalAlpha = this.alpha;
      ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
      this.timePassed += this.speed;
    }

    for (var i = 0; i < maxStars; i++) {
      new Star();
    }

    function animation() {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.5; //尾巴
      ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
      ctx.fillRect(0, 0, w, h)

      ctx.globalCompositeOperation = 'lighter';
      for (var i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
      };

      window.requestAnimationFrame(animation);
    }

    animation();
  },

  swiper: function() {
    app.mySwiper = $('.swiper-container').swiper({
      direction: 'vertical',
      mousewheelControl: true,
      longSwipesRatio:0.1,
      // simulateTouch:false,
      // preventDefault:true,
      onSlideChangeEnd: function(swiper) {
        var _index = swiper.activeIndex;
        slideAnimationEnd(_index, app.mySwiper);
      },
      onSlideChangeStart: function(swiper) {
        var _index = swiper.activeIndex;
        slideAnimationStart(_index);
      },
      onSlideReset: function(swiper) {
        var _index = swiper.activeIndex;
        slideanimationRestart(_index);
      },
    });
    $('#sign-up').click(function() {
      app.mySwiper.unlockSwipes();
      app.mySwiper.slideNext();
    });
    $('.copy-font').click(function() {
      $('#webUrl').select();
    })
  },

  mentor: function() {
    // 导师点击事件
    $('.mentor-inner').click(function() {
      $('.mentor-inner').removeClass('checked');
      // $('.mentor-inner').removeClass('shadow');
      $(this).addClass('checked');
    })
  },

  addPlayerInfo: function(data) {
    // 提交用户信息
    const _this = this;
    $.ajax({
      url: 'https://apps.game.qq.com/poker/a20161008charlieben/charlieFrame/index.php/yxds/playerImfInsertMb',
      type: 'post',
      data: {
        qq: encodeURIComponent(data.qq),
        name: encodeURIComponent(data.name),
        tel: encodeURIComponent(data.tel),
        email: encodeURIComponent(data.email)
      },
      success: function(res) {
        // 转对象
        var _res = JSON.parse(res);
        if (_res.iRet == 0) {
          if (_res.jData.changeNum > 0) {
            alert('提交报名成功！');

          } else if (_res.jData.changeNum == -2) {
            alert('报名时间已截止！');
          } else {
            alert('您已提交过报名，请到官网修改信息。');
          }
          // 解锁滑动并跳转到第一屏
          app.mySwiper.unlockSwipes();
          app.mySwiper.slideTo(0);
        } else {
          alert('提交失败，请重试！')
        }
      },
      error: function(err) {
        alert('提交失败，请重试！')
      }
    })
  },
}

// 监视设备方向
window.addEventListener("orientationchange", function() {
  media();
}, false);

function media(arg){
  setTimeout(function(){
    app.font();
    app.mySwiper.update();
  }, 200);
}


// 首页动画

var slideAnimationEnd = function(index, mySwiper) {
  var _index = index + 1;
  if (_index != 1) {
    $('.planet').addClass('planet-second undis');
    $('.robot').addClass('robot-second undis');
    $('.keyboard').addClass('undis');
    $('.swiper-slide').find('.bg').removeClass('push-in');
    $('.slide-' + _index).find('.bg').addClass('push-in');
  } else {
    $('.swiper-slide').find('.bg').removeClass('push-in');
    $('.planet').removeClass('planet-second undis');
    $('.robot').removeClass('robot-second undis');
  }

  if (_index == 2) {
    $('.drop').removeClass('blue');
    $('.drop').addClass('white');
    setTimeout(function() {
      $('.letter').addClass('letter-fadeIn');
    }, 400);
    setTimeout(function() {
      $('.letter-paper').addClass('paper-pushUp')
    }, 1000);
    setTimeout(function() {
      $('.letter-paper .title').addClass('fadeInUp')
    }, 1500);
    setTimeout(function() {
      $('.letter-paper .content').addClass('fadeInUp')
    }, 1800);
  } else {
    $('.letter-paper .title').removeClass('fadeInUp')
    $('.letter-paper .content').removeClass('fadeInUp')
    $('.letter').removeClass('letter-fadeIn');
    $('.letter-paper').removeClass('paper-pushUp')
  }

  if (_index == 3) {
    $('.drop').addClass('blue');
    $('.drop').removeClass('white');
    setTimeout(function() {
      $('.slide-3 .info').addClass('fadeInUp');
    }, 100);
    setTimeout(function() {
      $('.slide-3 .mentor-inner').addClass('mentorAnimation');
      $('.slide-3 .mentor-3').addClass('shadow');
    }, 200);
    setTimeout(function() {
      $('.slide-3 .title').addClass('fadeInUp');
    }, 1200);
    setTimeout(function() {
      $('.slide-3 .content').addClass('fadeInUp');
    }, 1500);
  } else {
    $('.slide-3 .info').removeClass('fadeInUp');
    $('.slide-3 .title').removeClass('fadeInUp');
    $('.slide-3 .content').removeClass('fadeInUp');
    $('.slide-3 .mentor-inner').removeClass('mentorAnimation');
    $('.slide-3 .mentor-inner').removeClass('checked');
  }

  if (_index == 4) {
    $('.drop').addClass('blue');
    $('.drop').removeClass('white');
    mySwiper.unlockSwipeToNext()
    $('.drop').show();
    setTimeout(function() {
      $('.slide-4 .title').addClass('fadeInUp');
    }, 200);
    setTimeout(function() {
      $('.process-item').addClass('fadeInUp');
    }, 900);
    setTimeout(function() {
      $('.line').addClass('fadeInUp');
    }, 500);
  } else {
    $('.process-item').removeClass('fadeInUp');
    $('.slide-4 .title').removeClass('fadeInUp');
    $('.line').removeClass('fadeInUp');
  }

  if (_index == 5) {
    mySwiper.lockSwipeToNext()
    $('.drop').hide();
    setTimeout(function() {
      $('.slide-5 .title').addClass('fadeInUp');
    }, 200);
    setTimeout(function() {
      $('.slide-5 .element').addClass('fadeInUp');
    }, 1000);
    setTimeout(function() {
      $('.slide-5 .center').find('a').addClass('fadeInUp');
    }, 2000);
  } else {
    $('.slide-5 .element').removeClass('fadeInUp');
    $('.slide-5 .center').find('a').removeClass('fadeInUp');
    $('.slide-5 .title').removeClass('fadeInUp');
  }

  if (_index == 6) {
    mySwiper.lockSwipes();
    $('.drop').hide();
  }
}

var slideAnimationStart = function(index) {
  var _index = index + 1;
  $('.slide-' + _index).find('.bg').removeClass('push-in');
  if (_index != 1) {
    $('.planet').addClass('planet-second undis');
    $('.robot').addClass('robot-second undis');
    $('.keyboard').addClass('undis');
  }
}

var slideanimationRestart = function(index) {
  var _index = index + 1;
  $('.slide-' + _index).find('.bg').addClass('push-in');
}
