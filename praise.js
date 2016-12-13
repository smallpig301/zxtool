$(function() {
	var n = 32,//宽高
		  r = 32,
		  i = 8,//最多数量
		  s = ["FF5D31", "FF7043", "FF9800", "F9A825", "F57F17", "FFCA28"],//svg颜色
		  o = '<svg viewBox="-1 -1 27 27">'+
		  			'<path class="svgpath" style="fill:$fill$;stroke: #FFF; stroke-width: 1px;" d="M11.29,2C7-2.4,0,1,0,7.09c0,4.4,4.06,7.53,7.1,9.9,2.11,1.63,3.21,2.41,4,3a1.72,1.72,0,0,0,2.12,0c0.79-.64,1.88-1.44,4-3,3.09-2.32,7.1-5.55,7.1-9.94,0-6-7-9.45-11.29-5.07A1.15,1.15,0,0,1,11.29,2Z"/>'+
		  		'</svg>',//定义svg 爱心图形
		  u = function(t) {
		  	this.width = t.width(), this.height = t.height();
		  	var n = s[Math.floor(Math.random() * s.length)],
		  	r = $(o.replace("$fill$", "#" + n));
		  	this.startx = this.width / 2 - 10,
		  	this.pos = Math.random() * Math.PI,
		  	this.hz = Math.random() * 20 + 10,
		  	this.zf = Math.random() * 15 + 10,
		  	this.opacityStart = Math.random() * 10 + 10,
		  	this.y = 0, this.$el = r,
		  	t.append(this.$el),
		  	this.setStyle(),
		  	this.run()
		  };
		  u.prototype.setStyle = function() {
		  	var e = this.startx + Math.sin(this.pos + this.y / this.hz) * this.zf,
		  		  t = 1 - Math.max((this.y - this.opacityStart) / (this.height - this.opacityStart), 0),
		  		  i = Math.min(this.y * 2 / this.height * (n - r) + r, n);
		  		  
		  		  this.$el.css({
		  		  	'left': e,
		  		  	'bottom': this.y,
		  		  	'opacity': t
		  		  }).width(i).height(i)
		  },
		  u.prototype.run = function() {
		  	var t = this,
		  		  n = Math.random() * 20 + 10,
		  		  r = Date.now(),
		  		  time = (new Date()).gettime,
		  		  i = setInterval(function() {
		  		  	var s = Date.now();
		  		  	t.y += Math.round((s - r) / n), r = s, t.setStyle(), t.y >= t.height && (t.$el.remove(), clearTimeout(i))
		  		  	}, n)
		  }
		  var add = function(e) {
		  	//创建svg
		  	e = e || 1;
		  	if ($('.bubble').find("svg").length + e > i) return;
		  	for (var t = e; t > 0; t--) new u($('.bubble'))
		  },
		  p = function() {
		  	//时间间隔
		  	var t = parseInt(Math.random() * 500 + 300, 10);
		  	setTimeout(function() {
		  		add(), p()
		  	}, t)
		  };
		  
		setTimeout(function(){
			p();
		},1000)
});