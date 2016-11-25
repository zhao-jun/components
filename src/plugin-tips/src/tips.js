;(function ($) {

    var modePos;

    $.fn.tip = function (option) {
        var set = $.extend({

            mode:"bottom",
            speed:200,
            content:'内容缺失'

        },option);

        var _h = 12;

        if(!modePos) {
            /*策略模式*/
            modePos = {
                top : function (t ,tip) {
                    return {
                        left :t.offset().left + (t.width() - tip.width()) / 2 + 'px',
                        top : t.offset().top - tip.height() - _h + 'px'
                    }
                },
                bottom : function (t , tip) {
                    return {
                        left : this.top(t,tip).left,
                        top :t.offset().top + t.height() + _h + 'px'
                    }
                }
            };
        }



        return this.each(function () {

            var _that = $(this);
            var _tip ='.tip-container';

            _that.hover(function () {

                var _mode = _that.attr('data-mode') ||set.mode;
                var _speed = _that.attr('data-speed')||set.speed;
                var _content = _that.attr('data-tip')||set.content;


                var _tipHtml = '<div class="tip-container"><div class="tip-point-'+ _mode +'"></div><div class="tip-content">'+ _content +'</div></div>';
                $('body').append(_tipHtml);

                _that.removeAttr('title alt');

                $(_tip).css(modePos[_mode](_that,$(_tip))).fadeIn(_speed);


            },function () {
                // var _speed = _that.attr('data-speed')||set.speed;

                // $(_tip).fadeOut(_speed,function () {
                    $(_tip).remove();
                // });
            })
        });
    }
})(jQuery);
