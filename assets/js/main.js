$(document).ready(function () {
    $('.sidebar-item').on('click', function () {
        $(this).children('ul').slideToggle();
        $(this).toggleClass('open');
    });

    $('.sidebar-item ul li').on('click', function (e) {
        e.stopPropagation();

        console.log($(this).children('ol').length)
        if ($(this).children('ol').length) {
            $(this).children('ol').slideToggle();
        } else {
            function disableCurrentChild() {
                $('.sidebar-item ul li').removeClass('selected');
            }

            disableCurrentChild()
            $(this).toggleClass('selected');
        }
    });

    $('.sidebar-item ul li ol li').on('click', function (e) {
        e.stopPropagation();

        function disableCurrentChild() {
            $(".sidebar-item ul li ol").children("li").classList.remove("selected")
        }

        disableCurrentChild();

        $(this).toggleClass('selected');
    });
});