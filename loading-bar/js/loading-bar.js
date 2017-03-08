;(function (doc, win, undefined) {
    function Loading(opt) {
        this.opt = {
            'barId':'loadingBar',
            'barClass':'loading-bar',
            'spinnerId':'loadingSpinner',
            'spinnerClass':'loading-spinner',
            'time':5000
        };

        //传参
        if(opt) {
            for(var i in opt) {
                this.opt[i] = opt[i];
            }
        }

        var self = this;
        this.loadingBar = doc.querySelector(this.opt.barId);
        this.loadingSpinner = doc.querySelector(this.opt.spinnerId);
        //不存在就创建
        if(!this.loadingBar){
            var barNode = doc.createElement('div');
            barNode.id = this.opt.barId;
            barNode.className = this.opt.barClass;
            doc.body.appendChild(barNode);
            this.loadingBar = barNode;
        }
        if(!this.loadingSpinner){
            var barNode = doc.createElement('div');
            barNode.id = this.opt.spinnerId;
            barNode.className = this.opt.spinnerClass;
            doc.body.appendChild(barNode);
            this.loadingSpinner = barNode;
        }

        this.start();
        setTimeout(function(){
            self.complete();
        },opt.time);
    }

    Loading.prototype.progress = function (rate) {
        this.loadingBar.style.width = rate;
    };

    Loading.prototype.start = function () {
        //初始化
        var rate=0 , self = this;
        //渐变显示
        setTimeout(function () {
            self.loadingBar.classList.add('in');
            self.loadingSpinner.classList.add('in');
        },250);

        self.timer = setInterval(function () {
            self.progress(rate + '%');
            rate+=1;
            if(rate>99) clearInterval(self.timer);
        },250);
    };

    Loading.prototype.complete = function () {
        var self = this;

        clearInterval(self.timer);
        //直接到底
        self.progress('100%');

        setTimeout(function () {
            self.loadingBar.classList.remove('in');
            self.loadingSpinner.classList.remove('in');
            self.loadingBar.classList.add('hide');
            self.loadingSpinner.classList.add('hide');
            self.progress('0%');
        },250);
    };
    // win.loading = new Loading();
    win.Loading = Loading;

})(document,window);
