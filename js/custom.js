$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 6000,
    })
    const main_info_slide = new Swiper('.main_info_slide', {
        loop: true,
        parallax: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 6000,

        navigation: {
            nextEl: '.main_info .next',
            prevEl: '.main_info .prev',
        },
        //effect: 'fade',
        pagination: {
            el: '.main_info .page',
            clickable: true,
        },
    });

});

$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('header').addClass('on')
        } else {
            $('header').removeClass('on')
        }
    })
});

$(function () {
    $('.main_model .tab_menu button').on('click', function () {
        let idx = $(this).index(); // 클릭한 것의 번호를 가져와서 저장함 
        console.log(idx);

        $('.main_model  .tab_menu button').removeClass('on');
        $(this).addClass('on');

        $('.main_model  .tab_content .con').removeClass('on');
        $('.main_model  .tab_content .con').eq(idx).addClass('on');
    });

});

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });
});


