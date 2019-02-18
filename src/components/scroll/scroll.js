function Scroll(el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el; // 获取滚动的外框元素
  this.scroller = this.wrapper.children[0]; // 获取滚动内容元素
  this.scrollStyle = this.scroller.style;

  this.options = {
    wrapperHeight: this.wrapper.offsetHeight,
    scrollerHeight: this.scroller.scrollHeight,
    startX: 0,
    startY: 0,
    scrollY: true,
    curY: 0, // 当前被上滑的距离
    directionLockThreshold: 5,
    momentum: true,
    bounce: true,
    bounceTime: 600,
    bounceEasing: '',
    useTransition: true,
    useTransform: true,
    deceleration: 0.004
  }

  for (var i in options) {
    this.options[i] = options[i];
  }

  this.init();
}

Scroll.prototype = {
  init: function () {
    this._initEvents();
  },
  destroy: function () {
    this._initEvents(true);
  },
  _initEvents: function (remove) {
    var eventType = remove ? this.removeEvent : this.addEvent;
    eventType(this.wrapper, 'touchstart', this);
    eventType(this.wrapper, 'touchmove', this);
    eventType(this.wrapper, 'touchcancel', this);
    eventType(this.wrapper, 'touchend', this);
  },
  handleEvent: function (e) {
    switch (e.type) {
      case 'mousedown':
      case 'touchstart':
        this._start(e);
        break;
      case 'mousemove':
      case 'touchmove':
        this._move(e);
        break;
      case 'mouseup':
      case 'mousecancel':
      case 'touchend':
      case 'touchcancel':
        this._end(e);
        break;
    }
  },
  addEvent: function (el, type, fn, capture) {
    el.addEventListener(type, fn, !!capture);
  },
  removeEvent: function (el, type, fn, capture) {
    el.removeEventListener(type, fn, !!capture);
  },
  getWrapperHeight: function () {
    var height = this.wrapper.offsetHeight;
    var margins = window.getComputedStyle(this.scroller, null)['margin'];
    var marginArr = margins.replace(/px/ig, '').split(' ');
    if (marginArr.length > 0 && marginArr.length <= 2) {
      height = this.wrapper.offsetHeight - marginArr[0] * 2;
    } else if (marginArr.length > 2 && marginArr.length <= 4) {
      height = this.wrapper.offsetHeight - marginArr[0] - marginArr[2];
    }
    return height
  },
  getTransform: function () {
    if (this.scrollStyle.transform) {
      var _transform = this.scrollStyle.transform;
      if (_transform.toLowerCase().indexOf('translate3d') > -1) {
        return parseInt(_transform.split(',')[1].replace('px', ''));
      } else if (_transform.toLowerCase().indexOf('translatey') > -1) {
        return parseInt(_transform.match(/translateY\((-)?\w*\)/)[0].split('translateY(')[1].split('px')[0])
      }
    }
    return 0;
  },
  _start: function (e) {
    this.options.wrapperHeight = this.getWrapperHeight();
    this.options.scrollerHeight = this.scroller.scrollHeight;
    // 获取目前内容上移的距离
    // this.curY = this.scrollStyle.transform ? parseInt(this.scrollStyle.transform.split(',')[1].replace('px', '')) : 0;
    this.curY = this.getTransform();
    // this.curX = this.scrollStyle.transform ? parseInt(this.scrollStyle.transform.split(',')[0].replace('px', '')) : 0;
    if (e.changedTouches.length < 1) return;
    this.startY = e.targetTouches[0].pageY;
    this.startX = e.targetTouches[0].pageX;
    // this.pointX = 0;
    this.pointY = 0;
    this.startTime = e.timeStamp;
  },
  _move: function (e) {
    if (e.changedTouches.length < 1) return;
    e.preventDefault();
    this.disY = e.changedTouches[0].pageY - this.startY;
    this.disX = e.changedTouches[0].pageX - this.startX;
    this.stopInertiaMove = true;
    this.pointX += this.disX;
    this.pointY += this.disY;
    /* if (e.timeStamp - this.lastMoveTime > 300 && (Math.abs(this.pointX) < 10 && Math.abs(this.pointY))) {
       return;
     }*/
    if (Math.abs(this.pointX) < 10 && Math.abs(this.pointY) < 10) {
      return;
    }
    // var newX = this.curX + this.disX;
    var newY = this.curY + this.disY;

    // 当滚动距离要超过边界时，缓慢滚动
    if (newY > 0 || newY < this.options.wrapperHeight - this.options.scrollerHeight) {
      newY = this.options.bounce ? this.curY + this.disY / 4 : newY > 0 ? 0 : (this.options.wrapperHeight - this.options.scrollerHeight);
    }
    // if (newX > 0 || newX < this.wrapper.offsetWidth - this.scroller.scrollWidth) {
    //   newX = this.options.bounce ? this.curX + this.disX / 3 : newX > 0 ? 0 : (this.wrapper.offsetWidth - this.scroller.scrollWidth);
    // }
    this.scrollTo(newY);
    // if (!this.options.bounce) {
    //   this.isBounds();
    // } else {
    //   this.scrollTo(this.curY + this.disY);
    // }
  },
  _end: function (e) {
    // clearInterval(this.timer);
    if (e.changedTouches.length < 0) return;
    this.disY = e.changedTouches[0].pageY - this.startY;
    // this.disX = e.changedTouches[0].pageX - this.startX;
    this.curY += this.disY;
    this.curX += this.disX;
    var speed = (this.disY / (e.timeStamp - this.startTime)) * 16,
      self = this,
      f = 0,
      timer = true,
      distance = 0;
    if (e.timeStamp - this.startTime > 300) timer = false;
    if (this.options.momentum && timer) {
      momentumFunc();
    } else if ((!this.options.momentum || !timer) && (this.curY >= 0 || this.curY <= self.options.wrapperHeight - self.options.scrollerHeight)) {
      this.ease();
    }

    function momentumFunc() { // 惯性滚动
      timer && requestAnimationFrame(momentumFunc)
      f = Math.min(Math.abs(speed) / 32, 0.5)
      if (speed > 0.2) {
        speed -= f;
      } else if (speed < -0.2) {
        speed += f;
      } else {
        timer = false;
        speed = 0;
        if (self.curY >= 0 || self.curY <= self.options.wrapperHeight - self.options.scrollerHeight) {
          self.ease();
        }
        return;
      }
      if (!self.options.bounce && (self.curY + speed >= 0 || self.curY + speed <= self.options.wrapperHeight - self.options.scrollerHeight)) {
        self.curY += speed
        self.ease()
        timer = false;
        speed = 0;
        return;
      }
      if (self.options.bounce && (self.curY >= 0 || self.curY <= self.options.wrapperHeight - self.options.scrollerHeight)) {
        distance += Math.abs(speed / 3);
        if (distance < 50) {
          // self.curY = self.options.bounce ? self.curY + speed / 6 : self.curY > 0 ? 0 : (self.wrapper.offsetHeight - self.scroller.scrollHeight);
          self.curY = self.curY + speed / 3;
        } else {
          self.ease();
          timer = false;
          speed = 0;
          return;
        }
      } else {
        self.curY += speed;
      }
      self.scrollTo(self.curY);
    }
  },
  ease() {
    this.curY = this.curY >= 0 ? 0 : (this.options.wrapperHeight - this.options.scrollerHeight);
    this.scroller.style = `transform: translate3d(0px , ${this.curY}px, 0px); transition: all 0.4s cubic-bezier(0.15,0.68,0,0.88) 0s`;
  },
  isBounds() {
    if (this.curY + this.disY > 0) {
      this.curY = 0;
      this.scrollTo(this.curY);
    } else if (this.curY + this.disY <= (this.options.wrapperHeight - this.options.scrollerHeight)) {
      this.curY = this.options.wrapperHeight - this.options.scrollerHeight;
      this.scrollTo(this.curY);
    } else {
      this.scrollTo(this.curY + this.disY);
    }
  },
  scrollTo(y) {
    this.options.curY = y;
    this.scroller.style = `transform: translate3d(0px , ${y}px, 0px); transition: all 0s`;
  }
}

if (typeof module != 'undefined' && module.exports) {
  module.exports = Scroll;
} else if (typeof define == 'function' && define.amd) {
  define(function () {
    return Scroll;
  })
} else {
  window.Scroll = Scroll;
}
