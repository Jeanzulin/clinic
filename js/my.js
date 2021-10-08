$(document).ready(function () {

    //AOS
    $(function () {
        AOS.init();
    })



    //notice
    $('.notice-content').hide();
    $('#notice .title').click(function () {
        $('#notice .title img').toggleClass("rotate");
        $(this).next('.notice-content').slideToggle(500);
    })



    $('.goTop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.goTop').fadeIn();
        } else {
            $('.goTop').stop().fadeOut();
        }

    });

    //錨點捲動
    $('a[href*="#"]').on('click', function () {
        if ($(window).width() > 767) {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500, 'linear');
        } else {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 60
            }, 500, 'linear');
        }
    })
    $('a[href*="#employee"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500, 'linear');
    })

    //efingo footer
    //選單滾動
    if ($(window).width() > 768) {
        var nav_height = $('header').outerHeight();
        var new_top = [0, 0];
        $(window).scroll(function () {
            new_top[1] = $(window).scrollTop();
            if (new_top[0] - new_top[1] < 0) {
                new_top[0] = new_top[1];
                // $('#wrap').css('padding-top',nav_height);
                $('header').removeClass('mystyle').addClass('mystyle'); /* 幫選單加上固定效果 */
            } else {
                new_top[0] = new_top[1];
                $('header').removeClass('mystyle'); /* 移除選單固定效果 */
                $('header').css({

                    'position': 'fixed'
                });
            }
        })
    }
    //數位服務選單
    $('.function_ham').click(function () {
        $('.function_nav').toggleClass('function_nav_close')
    });
    if ($(window).width() > 800) {
        var function_nav = $('.function_nav');
        var nav_wrap = $('.nav_wrap');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                function_nav.addClass('function_nav_close')
                nav_wrap.addClass('nav_wrap_close')
            } else {
                function_nav.removeClass('function_nav_close')
                nav_wrap.removeClass('nav_wrap_close')
                $('header').css({

                    'position': 'static'
                });
            }
        });
    }

    //m版漢堡選單
    $('#toggle').click(function (e) {
        $('.main-nav, nav.main-nav, #toggle, #header').toggleClass('on');
        e.preventDefault();
    });
    $('.main-nav ul.anchor li a').click(function () {
        $('#header,#toggle, .main-nav').removeClass('on')
    })

})