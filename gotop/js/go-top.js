;(function () {
    console.log(1);
    var $gotop = $(".go-top");
    $gotop.click(function () {
        //设置为绝对定位的元素相对于属性不是position: static;的祖先元素进行定位。如果没有设置，则根据html或body元素进行定位。至于是哪一个有用户代理（浏览器）决定。
        //测试了一下IE8，Firefox，Opera，Safari for windows，都是相对于html定位
        //所以这里要写两个
        $("html,body").animate({scrollTop : 0 },200);
        return false;
    });
    $(window).scroll(function () {
        console.log($(this).scrollTop());
        if($(this).scrollTop()>0) {
            $(".fixed-btn").fadeIn(500);
        } else  {
            $(".fixed-btn").fadeOut(500);
        }
    })
})();