var navTab = (function () {

    /*
    * opt
    * id
    * time/是否自动播放
    */
    function tab(opt) {
        if(!opt.hasOwnProperty('id') || opt.id.length<1) return;
        this.box = document.querySelector(opt.id);
        this.navTabs = this.box.querySelectorAll('.nav-tabs')[0];
        this.tabLi = this.navTabs.querySelectorAll('li');
        this.tabA = this.navTabs.querySelectorAll('a');
        this.tabContent = this.box.querySelectorAll('.tab-content')[0];
        this.tabPanel = this.tabContent.querySelectorAll('.tab-pane');
        this.tabALen = this.tabA.length;
        this.activeIndex = 0;

        //点击事件的添加
        Array.prototype.map.call(this.tabA,function (ele, i) {
            ele.addEventListener('click',this.changeTab.bind(this));
        }.bind(this));

        //移动端手势
        this.box.addEventListener('touchstart',this.tabTouchStart.bind(this));
        this.box.addEventListener('touchend',this.tabTouchEnd.bind(this));
        //移动端兼容
        // this.hasTouch='ontouchstart' in window && !(/hp-tablet/gi).test(navigator.appVersion);
        this.setX = 0;

        //自动播放
        this.changeAuto(opt.time,opt.isAuto);
    }

    tab.prototype.changeTab = function (e) {

        e.preventDefault();
        //清空
        this.delStatus(this.activeIndex);
        //改变全局顺序
        this.activeIndex = e.target.getAttribute('data-slide-to');
        //添加
        this.addStatus(this.activeIndex);
    };

    tab.prototype.tabTouchStart = function (e) {
        // e.preventDefault();
        // var point = this.hasTouch ? e.touches[0] : e;

        this.setX = e.touches[0].pageX;
    };
    tab.prototype.tabTouchEnd = function (e) {
        // e.preventDefault();
        // var point = this.hasTouch ? e.touches[0] : e,
        var offsetX = e.changedTouches[0].pageX - this.setX,
            oldV = this.activeIndex;

        //避免移动过短
        if( offsetX>=50 ) {
            this.activeIndex--;
            if(this.activeIndex<0) this.activeIndex = this.tabALen-1;
            this.touchChangeTab(oldV,this.activeIndex);
            return;
        }
        if( offsetX<=-50 ) {
            ++this.activeIndex;
            if(this.activeIndex>=this.tabALen) this.activeIndex = 0;
            this.touchChangeTab(oldV,this.activeIndex);
            return;
        }
    };
    tab.prototype.changeAuto=function (time,isAuto){
        var self = this,oldV;
        self.record = self.activeIndex;
        if(isAuto){
            setInterval(function () {
                //点击或者滑动后重新开始计时
                if(self.record != parseInt(self.activeIndex)){
                    self.record = parseInt(self.activeIndex);
                    return;
                }
                oldV =parseInt(self.activeIndex);
                self.activeIndex = oldV + 1;
                self.activeIndex == 3 ? self.activeIndex = 0 : self.activeIndex;
                self.touchChangeTab(oldV,self.activeIndex);
                self.record = self.activeIndex;
            },time)
        }
        return;
    }


    tab.prototype.touchChangeTab = function (oldV, newV) {
        //清空
        this.delStatus(oldV);
        //添加
        this.addStatus(newV);
    };


    tab.prototype.delStatus= function (index) {
        this.tabLi[index].classList.remove('active');
        this.tabPanel[index].classList.remove('active');
    };
    tab.prototype.addStatus = function (index) {
        this.tabLi[index].classList.add('active');
        this.tabPanel[index].classList.add('active');
    };

    return tab;
})();
