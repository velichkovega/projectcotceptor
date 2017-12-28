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

$('.slick-slider-main').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    draggable: true,
    prevArrow: '<img src="../img/chevron-left.png">',
    nextArrow: '<img src="../img/chevron-right.png">',
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


$('.js-datepicker').daterangepicker({
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
			slidesToShow: 3,
			centerMode: true,
			slidesToScroll: 1,
			draggable: true,
			prevArrow: '<img src="/img/chevron-left.png">',
  			nextArrow: '<img src="/img/chevron-right.png">',
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
            $('.body').animate({ 
                left: '0px' 
            }, 200);
        });

        $('.btn-open').click(function() {
            $('.menu__hiden').animate({
                left: '0px'
            }, 200);
            $('.modal-overlay').addClass('active-hiden-menu');
            $('.body').animate({ 
                left: '185px' 
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
            height: '46px'
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