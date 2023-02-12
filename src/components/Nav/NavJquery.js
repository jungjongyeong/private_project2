import $ from "jquery";
$(function () {
    $('#header .open').on('click', function () {
        $(this).toggleClass('active')
        $('#header .cd').toggleClass('active')
        $('#section').toggleClass('active')
        $('.homeLogo.logo1').toggleClass('active')
        $('.navUl').toggleClass('active')
    })

    $('#header .navUl').on('mouseover', function () {
        $('.depth2').addClass('active')
        $('#nav .navUl .menu').addClass('active')

    })
    $('#header .navUl').on('mouseout', function () {
        $('.depth2').removeClass('active')
        $('#nav .navUl .menu').removeClass('active')

    })
    $('#header .open').on('click', function () {
        $(this).toggleClass('on')
    })

    $(window).scroll(function () {
        let sct = $(this).scrollTop()
        if (sct > 100) {
            $('#header .headerFixed').addClass('scroll')
            $('#nav .navUl').addClass('scroll')
            $('.depth1').addClass('scroll')
            $('#header h1').addClass('scroll')
            $('.cd-nav-trigger').addClass('scroll')
        } else {
            $('#header .headerFixed').removeClass('scroll')
            $('#nav .navUl').removeClass('scroll')
            $('.depth1').removeClass('scroll')
            $('#header h1').removeClass('scroll')
            $('.cd-nav-trigger').removeClass('scroll')
        }
    })
})

