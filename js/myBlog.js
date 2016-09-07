/**
 * 自动加载
 * ；防止之前代码的影响
 */
;$(function () {
        /*使用严格模式*/
        'use-strict';
        var sideBar = $('#sideBar');
        var mask = $('.overLay');
        var sideBar_trigger = $('.sideBar_trigger');

        var backTop = $('.back-to-top');

        function showSideBar() {
            mask.fadeIn();
            sideBar.css('right', 0);  //要加动画效果：就在css样式中：添加    transition:right 0.6s;
            //或者
            //sideBar.animate({'right':0});//注意传对象
        }

        function hideSideBar() {
            mask.fadeOut();
            sideBar.css('right', -sideBar.width());
        }

        mask.on('click', hideSideBar);
        sideBar_trigger.on('click', showSideBar);
        backTop.on('click', function () {
            $('html,body').animate({
                scrollTop:0
            },800);
        });

        $(window).on('scroll', function () {//绑定滚动事件
            if($(window).scrollTop() > $(window).height()){
                backTop.fadeIn();
            }else{
                backTop.fadeOut();
            }
        });
    $(window).trigger('scroll');//处理返回顶部按钮 在出现之后，界面刷新，后依然显示的问题，因为界面没有去检测
    }
);