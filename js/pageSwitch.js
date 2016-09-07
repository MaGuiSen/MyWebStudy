/**
 * Created by 1ping on 2016/8/29.
 */
(function($){
    var PageSwitch = (function(){
        function PageSwitch(element,options){
            this.settins = $.extend(true, $.fn.PageSwitch.default,options || {});// options || {}  标识如果：options是空的，就给一个默认值
            this.element = element;
            this.init();
        }
        PageSwitch.prototype = {
            init:function(){

            }
        }
    });
    //现在开始添加自定义函数， //这个相当于插件 挂载在jQuery下的自定义函数
    $.fn.PageSwitch = function(options){
        //options参数：形参
        return this.each(function(){
            //这样写法为链式调用,.一般用单例子进行链式调用
            var me = $(this),//设置me为当前对象
                instance = me.data("PageSwitch");
            //判断实例是否为空
            if(!instance){
                instance = new PageSwitch(me,options);//创建对象
                me.data("PageSwitch",instance);
            }
        });
    }
    $.fn.PageSwitch.default = {
        //配置默认参数 对象
        selectors:{
            selector:".sections",
            section:".section",
            page:".pages",
            active:".active"
        },
        index:0,
        easing:"ease",//设置各种动画的效果
        duration:500,//动画时间
        loop:false,//是否循环播放
        pagination:true,//是否进行分页处理
        keyboard:true,//是否响应键盘事件
        direction:"vertical",//方向
        callback:""//回调函数
    }
})(jQuery);