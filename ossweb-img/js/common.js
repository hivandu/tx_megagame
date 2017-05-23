var app = {
  init: function() {
    // app.canvas();
    app.swiper();
    app.mentor();
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
    var mySwiper = $('.swiper-container').swiper({
      mode: 'vertical',
      mousewheelControl: true,
      onSlideChangeEnd: function(swiper) {
        var _index = swiper.activeIndex;
        slideAnimationEnd(_index);
      },
      onSlideChangeStart: function(swiper) {
        var _index = swiper.activeIndex;
        slideAnimationStart(_index);
      },
      onSlideReset: function(swiper) {
        var _index = swiper.activeIndex;
        slideanimationRestart(_index);
      }
    });
  },

  mentor: function() {
    var _w = window.innerWidth;
    var _h = window.innerHeight;
    app.setPoint(_w, _h);
    window.onresize = function() {
      _w = window.innerWidth;
      _h = window.innerHeight;
      app.setPoint(_w, _h);
    }
  },

  setPoint: function(_x,  _y) {
    document.onmousemove = function(evt) {
      evt = evt || window.event;
      showP(evt.clientX, evt.clientY);
    }
    var middleX = _x / 2,
      middleY = _y / 2 //中心坐标
    function showP(x, y) {
      xP = (x - 500) / 500;
      yP = (y - 250) / 250;
      $(".mentor-1").css('left',(20 + xP * 20) + "px") // lay1的左右移动区间是正负20像素
      $(".mentor-1").css('top', (20 + yP * 15) + "px"); // lay1的上下移动区间是正负15像素

      $(".mentor-2").css('right',(60 - xP * 30) + "px") // lay2的左右移动区间是正负40像素
      $(".mentor-2").css('top', (40 + yP * 27) + "px"); // lay2的上下移动区间是正负27像素

      $(".mentor-3").css('left',(220 + xP * 25) + "px") // lay3的左右移动区间是正负60像素
      $(".mentor-3").css('top', (125 + yP * 35) + "px"); // lay3的上下移动区间是正负35像素

      $(".mentor-4").css('left',(50 + xP * 25) + "px") // lay3的左右移动区间是正负60像素
      $(".mentor-4").css('bottom', (40 - yP * 35) + "px"); // lay3的上下移动区间是正负35像素

      $(".mentor-5").css('right',(20 - xP * 25) + "px") // lay3的左右移动区间是正负60像素
      $(".mentor-5").css('bottom', (20 - yP * 35) + "px"); // lay3的上下移动区间是正负35像素
    }

  }
}



// 首页动画

var slideAnimationEnd = function(index) {
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
    setTimeout(function() {
      $('.letter').addClass('letter-fadeIn');
    }, 300);
    setTimeout(function() {
      $('.letter-paper').addClass('paper-pushUp')
    }, 600);
  } else {
    $('.letter').removeClass('letter-fadeIn');
    $('.letter-paper').removeClass('paper-pushUp')
  }

  if (_index == 3) {
    setTimeout(function() {
      $('.slide-3 .info').addClass('info-fadeIn');
    }, 300);
    setTimeout(function() {
      $('.slide-3 .title').addClass('info-fadeIn');
    }, 1000);
  } else {
    $('.slide-3 .info').removeClass('info-fadeIn');
    $('.slide-3 .title').removeClass('info-fadeIn');
  }

  if (_index == 4) {
    setTimeout(function() {
      $('.slide-4 .info').addClass('info-fadeIn');
      $('.process-item').addClass('info-fadeIn');
    }, 300);
    setTimeout(function() {
      $('.line').addClass('info-fadeIn');
      $('.slide-4 .title').addClass('info-fadeIn');
    }, 1200);
  } else {
    $('.slide-4 .info').removeClass('info-fadeIn');
    $('.process-item').removeClass('info-fadeIn');
    $('.slide-4 .title').removeClass('info-fadeIn');
    $('.line').removeClass('info-fadeIn');
  }

  if (_index == 5) {
    setTimeout(function() {
      $('.slide-5 .info').addClass('info-fadeIn');
    }, 300);
    setTimeout(function() {
      $('.slide-5 .element').addClass('fadeIn');
    }, 500);

    setTimeout(function() {
      $('.slide-5 .center').find('a').addClass('info-fadeIn');
      $('.slide-5 .title').addClass('info-fadeIn');
    }, 1300);
  } else {
    $('.slide-5 .info').removeClass('info-fadeIn');
    $('.slide-5 .element').removeClass('fadeIn');
    $('.slide-5 .center').find('a').removeClass('info-fadeIn');
    $('.slide-5 .title').removeClass('info-fadeIn');
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
