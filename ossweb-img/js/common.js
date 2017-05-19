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


// 首页动画

var slideAnimationEnd = function(index) {
  var _index = index + 1;
  if (_index != 1) {
    $('.swiper-slide').find('.bg').removeClass('push-in');
    $('.slide-' + _index).find('.bg').addClass('push-in');
    $('.robot').addClass('robot-second undis');
    $('.planet').addClass('planet-second undis');
    $('.keyboard').addClass('undis');
  } else {
    $('.planet').removeClass('planet-second undis');
    $('.robot').removeClass('robot-second undis');
    $('.swiper-slide').find('.bg').removeClass('push-in');
  }

  if (_index == 2) {
    setTimeout(function(){
      $('.letter').addClass('letter-fadeIn');
    }, 300);
    setTimeout(function(){
      $('.letter-paper').addClass('paper-pushUp')
    }, 600);
  } else {
    $('.letter').removeClass('letter-fadeIn');
    $('.letter-paper').removeClass('paper-pushUp')
  }

  if (_index == 3) {
    setTimeout(function(){
      $('.slide-3 .info').addClass('info-fadeIn');
    }, 300);
  }else{
    $('.slide-3 .info').removeClass('info-fadeIn');
  }

  if (_index == 4) {
    setTimeout(function(){
      $('.slide-4 .info').addClass('info-fadeIn');
      $('.process-item').addClass('info-fadeIn');
    }, 300);
    setTimeout(function(){
      $('.line').addClass('info-fadeIn');
    }, 1200);
  }else{
    $('.slide-4 .info').removeClass('info-fadeIn');
    $('.process-item').removeClass('info-fadeIn');
    $('.line').removeClass('info-fadeIn');
  }

  if (_index == 5) {
    setTimeout(function(){
      $('.slide-5 .element').addClass('fadeIn');
    }, 400);

    setTimeout(function(){
      $('.slide-5 .center').find('a').addClass('info-fadeIn');
    }, 1300);
  }else{
    $('.slide-5 .element').removeClass('fadeIn');
    $('.slide-5 .center').find('a').removeClass('info-fadeIn');
  }
}

var slideAnimationStart = function(index){
  var _index = index + 1;
  $('.slide-' + _index).find('.bg').removeClass('push-in');
}

var slideanimationRestart = function(index){
  var _index = index + 1;
  $('.slide-' + _index).find('.bg').addClass('push-in');
}