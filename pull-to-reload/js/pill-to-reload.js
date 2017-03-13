var PullToReload = function (optsUser) {
    var self = this;

    this.opts = {
        'refresh-element':'ptr',
        'content-element':'content',
        'border-height':1,
        height:80,
        'font-size':'30px',
        'threshold':20,
        'pre-content':'...',
        'loading-content':'Loading...',
        'callback-loading':function () {
            setTimeout(function () {
                self.loadingEnd();
            },1000)
        }
    };

    //参数赋值
    for(var prop in self.opts) {
        if(optsUser[prop] != undefined) {
            self.opts[prop] = optsUser[prop];
        }
    }

    this.ptr = document.querySelector('#' + self.opts['refresh-element']);
    this.content = document.querySelector('#' + self.opts['content-element']);

    //style,也可写在css中
    this.ptr.style.padding = '0px';
    this.ptr.style.margin = '0px';
    this.ptr.style.display = 'block';
    this.ptr.style.height = self.opts.height + 'px';
    this.ptr.style.border = self.opts['border-height'] + 'px solid #000';
    this.ptr.style.borderTop = '0px';
    this.ptr.style.borderLeft = '0px';
    this.ptr.style.borderRight = '0px';


    this.ptr.style.textAlign = 'center';
    this.ptr.style.lineHeight = self.opts.height + 'px';
    this.ptr.style.fontSize = self.opts['font-size'];

    //隐藏
    this.ptr.style.marginTop = '-' + (self.opts['border-height'] + self.opts.height) + 'px';

    this.loadingStart = function () {
        this.ptr.innerHTML = self.opts['loading-content'];
        self.opts['callback-loading']();
    };

    this.loadingEnd = function () {
        this.ptr.innerHTML = self.opts['pre-content'];
        this.ptr.style.marginTop = '-' + (self.opts['border-height'] + self.opts.height + 'px');
    };

    //common function
    this.getPageY = function (e) {
        if(e.pageY === undefined && e.touches !== undefined ) {
            if(e.touches.length <= 0) {
                return false;
            }
            e.pageY = e.touches[e.touches.length - 1].pageY ;
        }
        return e.pageY;
    };

    this.isDragging = false;
    this.isThresholdReached = false;
    this.posStart = 0;


    self.content.addEventListener('touchstart',function (e) {
        self.mouseStart(e);
    });

    self.content.addEventListener('mousedown',function (e) {
        self.mouseStart(e);
    });

    this.mouseStart = function (e) {

        //如果滚动到下面防止触发
        if(document.body.scrollTop >= self.content.getBoundingClientRect().top) {
            return;
        }

        self.isDragging = true;
        self.isThresholdReached = false;
        self.posStart = self.getPageY(e);
    };

    document.addEventListener('touchmove', function (e) {
        self.mouseMove(e);
    });

    document.addEventListener('mousemove', function (e) {
        self.mouseMove(e);
    });

    this.mouseMove = function (e) {
        //如果滚动到下面防止触发
        if(document.body.scrollTop >= self.content.getBoundingClientRect().top) {
            return;
        }
        if(!self.isDragging) {
            return;
        }

        //兼容处理
        e.pageY = self.getPageY(e);
        if(e.pageY === false) {
            return;
        }

        var dragDistance = (e.pageY - self.posStart);

        if (dragDistance <= 0) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();

        var newMargin = (self.opts['border-height'] + (self.opts.height - dragDistance));
/*        if (newMargin <= 0) {
            return;
        }*/
        //判断拖动是否足够大
        if (newMargin <= self.opts.threshold) {
            self.isThresholdReached = true;
        }

        self.ptr.style.marginTop = '-' + (newMargin + 'px');
    };

    document.addEventListener('touchend', function (e) {
        self.mouseEnd(e);
    });
    document.addEventListener('mouseup', function (e) {
        self.mouseEnd(e);
    });

    this.mouseEnd = function (e) {
        if (document.body.scrollTop >= self.content.getBoundingClientRect().top) {
            return;
        }
        if (!self.isDragging) {
            return;
        }
        e.preventDefault();
        e.stopImmediatePropagation();

        if (self.isThresholdReached) {
            self.ptr.style.marginTop = '0px';

            self.isDragging = false;
            self.isThresholdReached = false;

            self.loadingStart();
            return;
        }

        self.ptr.style.marginTop = '-' + (self.opts['border-height'] + self.opts.height + 'px');

        self.isDragging = false;
        self.isThresholdReached = false;

    }
};
