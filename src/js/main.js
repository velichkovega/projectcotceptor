/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js

//= ../../bower_components/select2/dist/js/select2.js

//= ../../bower_components/lightbox2/dist/js/lightbox.js

//= ../../node_modules/slick-carousel/slick/slick.js

//= datepicker/moment.min.js

//= datepicker/daterangepicker.js

//= partials/script.js


$(".js-toggle-person-info").on("click", function(){
    $(document).click(function (e) {
        var clickedItem = $(e.target);
        var personInfo = $('.person-info');
        if (clickedItem.is('.person-info') ||
            clickedItem.parents().is('.person-info') ||
            clickedItem.is('.js-toggle-person-info') ||
            clickedItem.parents().is('.js-toggle-person-info')
        ) {
            personInfo.addClass('active');
        } else {
            personInfo.removeClass('active');
        }
    


    });
});


(function($){
    $(window).on("load",function(){
        $(".tabs__content-top:not(.no-sckroll__active)").mCustomScrollbar({
            mouseWheel:{ enable: true },
            alwaysShowScrollbar: 1
        });
        // $(".slider-git__preload").removeClass(slider-git__preload);
    });
})(jQuery);

$('.slider-main').slick({
    lazyLoad: 'progressive',
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    draggable: true,
    prevArrow: '<img src="img/left-mediator.png">',
    nextArrow: '<img src="img/medator-right.png">'
    });

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
			prevArrow: '<img src="img/chevron-left.png">',
              nextArrow: '<img src="img/chevron-right.png">',
              dots: false,
              autoplay: true,
              autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: false
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
	},500)

});

var initer = document.querySelector('.initOpenItems');
var topIniter = document.querySelector('.animation-open-block');


// initer.addEventListener('click', function () {

    // setTimeout(function () {
    //     init();
    // }, 1000)
// });

// console.log(animationCustomModule);


$('.slider-stat').click(() => {
	setTimeout(() => {
		$('.main-content__tab-slider-stat').addClass('active');

		$('.main-content__tab-slider-stat').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			centerMode: true,
			slidesToScroll: 1,
			draggable: true,
			prevArrow: '<img src="img/chevron-left.png">',
              nextArrow: '<img src="img/chevron-right.png">',
              dots: false,
              adaptiveHeight: true,
              autoplay: true,
              autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: false
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
	},500)

});



$('.initOpenItems').on('click', function () {
    setTimeout(function () {
        animationCustomModule.init('#theGrid.secondAnimationBlock');
    }, 500);
});

$('.animationCareerBlog').on('click', function () {
    setTimeout(function () {
        animationCustomModule.init('#theGrid.blogCareer-blog');
    }, 500);
});

$('.first-tab, .animation-open-block').on('click', function () {
	setTimeout(function () {
        animationCustomModule.init('#theGrid.firstAnimationBlock');
    }, 500);
});

$('.project-tab-animation').on('click', function () {
	setTimeout(function () {
        animationCustomModule.init('#theGrid.threeAnimationProject');
    }, 500);
});

$('.atlasAnimationInit').on('click', function () {
	setTimeout(function () {
        animationCustomModule.init('#theGrid.AtlasAnimation');
    }, 500);
});

// $('.first-tab, .animation-open-block').on('click', function () {
// 	setTimeout(function () {
//         animationCustomModule.init('#theGrid.secondAnimationBlock');
//     }, 500);
// });


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
    prevArrow: '<img src="img/chevron-left.png">',
    nextArrow: '<img src="img/chevron-right.png">',
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

$('.slick-slider-main').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    centerMode: true,
    slidesToScroll: 1,
    draggable: true,
    prevArrow: '<img src="img/left-mediator.png">',
    nextArrow: '<img src="img/medator-right.png">',
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

$('.js-filter').select2({
    width: 'resolve',
    minimumResultsForSearch: Infinity
});


$(document).find('.js-datepickers').daterangepicker({
    "singleDatePicker": true,
    "autoUpdateInput": false
}, function(start, end, label) {
    console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
});

$('.news-slider-init, .atlas-init').click(() => {
	setTimeout(() => {
		$('.slick-slider-socntiner__news').addClass('active');

		$('.slick-slider-socntiner__news').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			centerMode: true,
			slidesToScroll: 1,
			draggable: true,
			prevArrow: '<img src="img/chevron-left.png">',
  			nextArrow: '<img src="img/chevron-right.png">',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
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
	},4000)

});

$(function(){

        $(document).on('click','#hidden_close',function() {
            $('.menu__hiden').animate({
                left: '-385px'
            }, 200);
            $('.modal-overlay').removeClass('active-hiden-menu');
            $('.body, .body-main').animate({ 
                left: '0px' 
            }, 200);
        });

        $('.btn-open').click(function() {
            $('.menu__hiden').animate({
                left: '0px'
            }, 200);
            $('.modal-overlay').addClass('active-hiden-menu');
            $('.body, .body-main').animate({ 
                left: '285px' 
            }, 200);

        });
        
        $(document).on('click','.modal-overlay', function() {
             $('.body').animate({
                left: '-385px'
            }, 200);
            $('.modal-overlay').removeClass('active-hiden-menu');
        });

})


$(function(){
    $(document).on('click',"#mediator-slik-main",function(){
        $('.fix').animate({
            height: '250px'
        },200);
        $('#mediator-slik-main').addClass('close__munu-slick');
        $('#mediator-menu__wrap').removeClass('close__mediator-menu')
    });

    $(document).on('click','.close__munu-slick',function(){
        $('.fix').animate({
            height: '1px'
        },200);
        $('#mediator-slik-main').removeClass('close__munu-slick');
        $('#mediator-menu__wrap').addClass('close__mediator-menu');
    })
})




// $(function(){
//     $(document).on('click','#project__filtr', function(){
//         $('#filtr__init-prohect').addClass('block__project-filtr');
//     })
// })

  $('.main-calendar--slik-cal').slick({
    lazyLoad: 'ondemand',
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  var widthAgreed = $('.grid__item').width() + 30;
  var hui = $(".tabs__caption").children("li").height() + 15;
  var widdowWidth = $(window).width();

$( document ).ready(function() {
    $('.grid__item').css("height", widthAgreed);
    if (gui > 200) {
        $(".tabs__caption").children("li").css("width", hui - 90);
    } else {
        $(".tabs__caption").children("li").css("width", hui);
    }
    // $(".content-part__item").css("height", partSlide);

    


    $(document).on('click','.js-toggle-person-info', function(e) {
        var personInfo = $('.person-info');
        if (!personInfo.hasClass('active')) {
            personInfo.addClass('active');
        } else {
            personInfo.removeClass('active');
        }
    });

});


$('.part__coub').click(() => {
	setTimeout(() => {
        var partSlide = $(".content-part__item").width();
        $(".part-item__container--opasity-part").css("height", partSlide);
	},1)

});

$('.galery__coub').click(() => {
	setTimeout(() => {
        var gallerySlide = $(".touchtouch__img").width() + 17;
        $(".touchtouch__img").css("height", gallerySlide);
	},1)

});

$('.secondOpenModal').click(() => {
	setTimeout(() => {
        var partSecCoub = $(".part-sec__coub").width();
        $(".part-sec__coub").css("height", partSecCoub);
	},1)

});

$('.coubInitStat').click(() => {
	setTimeout(() => {
        var statCoubSec = $(".stat-sec__coub").width();
        $(".stat-sec__coub").css("height", statCoubSec);
	},1)

});

$('.gallery-coub__sec').click(() => {
	setTimeout(() => {
        var statCoubGallary = $(".touchtouch__img__sec").width() + 17;
        $(".touchtouch__img__sec").css("height", statCoubGallary);
	},1)

});

$('.main__news-init').click(() => {
	setTimeout(() => {
        var mainNews = $(".news-slider-init").width();
        $(".news-slider-init").css("height", mainNews);
	},3)

});

$('.threeOpenModal').click(() => {
	setTimeout(() => {
        var mainAbout = $(".about-three__tabs").width();
        $(".about-three__tabs").css("height", mainAbout);
	},3)

});

$('.proj-height').click(() => {
	setTimeout(() => {
        var mainProj = $(".proj-height__item").width();
        $(".proj-height__item").css("height", mainProj);
	},3)

});