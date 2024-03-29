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

    $('.item__btn').on('click', function() {
        if ($('.item__table').hasClass('item__table--active')) {
          if ($(this).next('.item__table').hasClass('item__table--active')) {
            $(this).next('.item__table').toggleClass('item__table--active');
          } else {
            $('.item__table').removeClass('item__table--active');
            $(this).next('.item__table').toggleClass('item__table--active');
          }
        } else {
          $(this).next('.item__table').toggleClass('item__table--active');
        }
      });

      $('.content__list').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 770,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1
            }
          }
        ]
      });

      $('.content__slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      });

      $('.totals__license').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      });

      $('.reviews__list').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.arrows__arrow--left'),
        nextArrow: $('.arrows__arrow--right'),
        responsive: [
          {
            breakpoint: 770,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1
            }
          }
        ]
      });
});