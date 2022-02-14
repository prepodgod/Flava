import slick from 'slick-carousel';
import $ from 'jquery';

const slickOptions = {
    arrows: true,
    nextArrow: '<a class="control control--next" ><img src="../static/img/arrow_slider.svg"/> </a>',
    prevArrow: '<a class="control control--prev" ><img class="control__img" src="../static/img/arrow_slider.svg"/> </a>',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    mobileFirst: true,
    appendArrows: $('.lineups__arrows'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,

            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
    ],
};

const slickOptionsSponsors = {
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
    speed: 300,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,

            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6
            }
        },
    ],
};





$('.js--slider-lineup').slick(slickOptions);
$('.js--slider-sponsors').slick(slickOptionsSponsors);