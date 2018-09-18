$(document).ready(function () {
    $('.header__menu').on('click', function() {
        $('.menu').addClass('menu--active');
        $('.wrapper').addClass('wrapper--active');
        $('.wrapper__bg').addClass('wrapper__bg--active');
    });

    $('.menu__exit, .wrapper__bg').on('click', function() {
        $('.menu').removeClass('menu--active');
        $('.wrapper').removeClass('wrapper--active');
        $('.wrapper__bg').removeClass('wrapper__bg--active');
    });
});

