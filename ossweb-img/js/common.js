var app = {
  // 设置星空效果
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

  // swiper事件
  swiper: function() {
    var mySwiper = $('.swiper-container').swiper({
      mode: 'vertical',
      mousewheelControl: true,
      simulateTouch: false,
      shortSwipes: false,
      onSlideChangeEnd: function(swiper) {
        var _index = swiper.activeIndex;
        app.slideAnimationEnd(_index);
      },
      onSlideChangeStart: function(swiper) {
        var _index = swiper.activeIndex;
        app.slideAnimationStart(_index);
      },
      onSlideReset: function(swiper) {
        var _index = swiper.activeIndex;
        app.slideanimationRestart(_index);
      }
    });
  },

  // 首页动画

  slideAnimationEnd: function(index) {
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
      }, 400);
      setTimeout(function() {
        $('.letter-paper').addClass('paper-pushUp')
      }, 1000);
      setTimeout(function() {
        $('.letter-paper .title').addClass('faedInUp')
      }, 1500);
      setTimeout(function() {
        $('.letter-paper .content').addClass('faedInUp')
      }, 1800);
    } else {
      $('.letter-paper .title').removeClass('faedInUp')
      $('.letter-paper .content').removeClass('faedInUp')
      $('.letter').removeClass('letter-fadeIn');
      $('.letter-paper').removeClass('paper-pushUp')
    }

    if (_index == 3) {
      $('.slide-3 .mentor-inner').addClass('mentorAnimation');
      setTimeout(function() {
        $('.slide-3 .info').addClass('faedInUp');
      }, 100);
      setTimeout(function() {
        $('.slide-3 .title').addClass('faedInUp');
      }, 1200);
      setTimeout(function() {
        $('.slide-3 .content').addClass('faedInUp');
      }, 1500);
    } else {
      $('.slide-3 .info').removeClass('faedInUp');
      $('.slide-3 .title').removeClass('faedInUp');
      $('.slide-3 .content').removeClass('faedInUp');
      $('.slide-3 .mentor-inner').removeClass('faedInUp');
      $('.slide-3 .mentor-inner').removeClass('mentorAnimation');
    }

    if (_index == 4) {
      setTimeout(function() {
        $('.slide-4 .title').addClass('faedInUp');
      }, 200);
      setTimeout(function() {
        $('.process-item').addClass('faedInUp');
      }, 900);
      setTimeout(function() {
        $('.line').addClass('faedInUp');
      }, 500);
    } else {
      $('.process-item').removeClass('faedInUp');
      $('.slide-4 .title').removeClass('faedInUp');
      $('.line').removeClass('faedInUp');
    }

    if (_index == 5) {
      setTimeout(function() {
        $('.slide-5 .title').addClass('faedInUp');
      }, 200);
      setTimeout(function() {
        $('.slide-5 .element').addClass('faedInUp');
      }, 1000);
      setTimeout(function() {
        $('.slide-5 .center').find('a').addClass('faedInUp');
      }, 2000);
    } else {
      $('.slide-5 .element').removeClass('faedInUp');
      $('.slide-5 .center').find('a').removeClass('faedInUp');
      $('.slide-5 .title').removeClass('faedInUp');
    }
  },

  slideAnimationStart: function(index) {
    var _index = index + 1;
    $('.slide-' + _index).find('.bg').removeClass('push-in');
    if (_index != 1) {
      $('.planet').addClass('planet-second undis');
      $('.robot').addClass('robot-second undis');
      $('.keyboard').addClass('undis');
    }
  },

  slideanimationRestart: function(index) {
    var _index = index + 1;
    $('.slide-' + _index).find('.bg').addClass('push-in');
  },

  init: function() {
    app.canvas();
    app.swiper();
    // var _w = window.innerWidth;
    // var _h = window.innerHeight;
    // console.log('width:' + _w + "; height:" + _h);
    // alert('width:' + _w + "; height:" + _h);
  }
}
