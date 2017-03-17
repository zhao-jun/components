;(function () {
    // 这是一个私有属性，不需要被实例访问
    var transform = getTransform();

    function Drag(opts) {
        this.opts = {
            id:'target',
            width:'100px',
            height:'100px',
            backgroundColor:'#000'
        };
        if(opts){
            for(var i in opts) {
                this.opts[i] = opts[i];
            }
        }

        this.elem = document.getElementById(this.opts.id);
        this.elem.style.width = this.opts.width;
        this.elem.style.height = this.opts.height;
        this.elem.style.backgroundColor = this.opts.backgroundColor;
        this.elem.style.cursor = 'move';
        this.startX = 0;
        this.startY = 0;
        this.sourceX = 0;
        this.sourceY = 0;

        //初始化
        this.init();
    }

    Drag.prototype = {
        init:function () {
            this.setDrag();
        },

        //获取属性
        getStyle:function (property) {
            //document.defaultView等价于window
            return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(this.elem, false)[property] : this.elem.currentStyle[property];
        },

        getPosition:function () {
            var pos = { x:0, y:0 };
            if(transform) {
                var transformValue = this.getStyle(transform);
                if(transformValue == 'none') {
                    this.elem.style[transform] = 'translate(0,0)';
                } else {
                    //transformValue:matrix(1, 0, 0, 1, X, Y)
                    var temp =  transformValue.match(/-?\d+/g);
                    pos = {
                        x:parseInt(temp[4]),
                        y:parseInt(temp[5])
                    }
                }
            } else {
                pos = {
                    x: parseInt(this.getStyle('left') ? this.getStyle('left') : 0),
                    y: parseInt(this.getStyle('top') ? this.getStyle('top') : 0)
                }
            }
            return pos;
        },

        //设置位置
        setPosition:function (pos) {
            if(transform) {
                this.elem.style[transform] = 'translate('+ pos.x +'px, '+ pos.y +'px)';
            } else {
                this.elem.style.left = pos.x + 'px';
                this.elem.style.top = pos.y + 'px';
            }
        },

        //绑定事件
        setDrag:function () {
            var self = this;
            this.elem.addEventListener('mousedown', start, false);
            function start(e) {
                self.startX = e.pageX;
                self.startY = e.pageY;

                var pos = self.getPosition();

                self.sourceX = pos.x;
                self.sourceY = pos.y;

                document.addEventListener('mousemove', move, false);
                document.addEventListener('mouseup', end, false);
            }

            function move(e) {
                var currentX = e.pageX;
                var currentY = e.pageY;

                var distanceX = currentX - self.startX;
                var distanceY = currentY - self.startY;

                self.setPosition({
                    //toFixed()把数字转换为字符串，结果的小数点后有指定位数的数字
                    x: (self.sourceX + distanceX).toFixed(),
                    y: (self.sourceY + distanceY).toFixed()
                })
            }

            function end(e) {
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', end);
            }
        }
    };

    //私有方法，仅仅用来获取transform的兼容写法
    function getTransform() {
        var transform = '',
            divStyle = document.createElement('div').style,
            transformArr = ['transform', 'webkitTransform', 'MozTransform', 'msTransform', 'OTransform'],

            i=0,
            len = transformArr.length;

        for (;i<len;i++){
            if(transformArr[i] in divStyle) {
                return transform = transformArr[i];
            }
        }
        return transform;
    }

    window.Drag = Drag;

})();
