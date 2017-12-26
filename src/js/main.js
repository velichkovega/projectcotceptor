/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js

//= ../../node_modules/slick-carousel/slick/slick.js

//= ../../node_modules/owl.carousel/dist/owl.carousel.min.js

//= ../../node_modules/owl.carousel/dist/owl.carousel.min.js

(function($){
    $(window).on("load",function(){
        $(".tabs__content-top").mCustomScrollbar({
            mouseWheel:{ enable: true }
        });
    });
})(jQuery);

$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

});

$('ul.tabs__caption-top').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tabs-top').find('div.tabs__content-top').removeClass('active').eq($(this).index()).addClass('active');

});

$('.tabs__content-top--slider').click(() => {
	setTimeout(() => {
		$('.main-content__tab-slider').addClass('active');

		$('.main-content__tab-slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			centerMode: true,
			slidesToScroll: 1,
			draggable: true,
			prevArrow: '<img src="../img/chevron-left.png">',
  			nextArrow: '<img src="../img/chevron-right.png">',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});
	},0)

});

var initer = document.querySelector('.initOpenItems');
var topIniter = document.querySelector('.animation-open-block');


// initer.addEventListener('click', function () {

    // setTimeout(function () {
    //     init();
    // }, 1000)
// });

// console.log(animationCustomModule);






$('.initOpenItems').on('click', function () {
    setTimeout(function () {
        animationCustomModule.init('#theGrid.secondAnimationBlock');
    }, 500);
});

$('.first-tab, .animation-open-block').on('click', function () {
	setTimeout(function () {
        animationCustomModule.init('#theGrid.firstAnimationBlock');
    }, 500);
});
//
// $('.animation-open-block').on('click', function () {
//     setTimeout(function () {
//         animationCustomModule.init('#theGrid.thirdAnimationBlock');
//     }, 500);
// });
//
// $('.animation-open-block').on('click', function () {
//     setTimeout(function () {
//         animationCustomModule.init('#theGrid.fourthAnimationBlock');
//     }, 500);
// });
//
// $('.animation-open-block').on('click', function () {
//     setTimeout(function () {
//         animationCustomModule.init('#theGrid.fifthAnimationBlock');
//     }, 500);
// });

$('.grid__item').on('click',function () {
    setTimeout(function () {
        $('.tabs__content-top').mCustomScrollbar("disable",true);
    },2000)
});

$('.close-button').on('click',function () {
    $('.tabs__content-top').mCustomScrollbar("update");
});



$('.about-1__slik').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    draggable: true,
    prevArrow: '<img src="../img/chevron-left.png">',
    nextArrow: '<img src="../img/chevron-right.png">',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$(function(){

    // Initialize the gallery
    $('.touchtouchs-lider').touchTouch();
});


$('.slick-slider-main').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    draggable: true,
    prevArrow: '<img src="../img/shape-1.png">',
    nextArrow: '<img src="../img/shape-1.png">',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});