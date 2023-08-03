$(document).ready(function () {
    $('.sidebar-item').on('click', function (e) {
        console.log(e.target,this)
        $('.sidebar-item').removeClass('open');
        $('.sidebar-item ul').slideUp();
        $(this).children('ul').slideToggle();
        $(this).toggleClass('open');
    });

    $('.sidebar-item ul li').on('click', function (e) {
        e.stopPropagation();

        if ($(this).children('ol').length) {
            $(this).children('ol').slideToggle();
        } else {
            $('.sidebar-item ul li').removeClass('selected');
            $(this).toggleClass('selected');
        }
    });

    $('.sidebar-item ul li ol li').on('click', function (e) {
        e.stopPropagation();

        $('.sidebar-item ul li ol li').removeClass('selected');

        $(this).toggleClass('selected');
    });

    $('.searchbar').on('focus', function() {
        $(this).parent().addClass('active');
    });

    $('.searchbar').on('blur', function() {
        const value = $(this).val().trim();
        if (value === '') {
            $(this).parent().removeClass('active');
        }
    });
});