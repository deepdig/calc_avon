/*------- Кнопка мобильной навигации -------------*/
$(document).ready(function () {
    $('#option_collapse').click(function () {
        $('.mobile-nav-button').toggleClass('open');
    });
});

$(document).ready(function () {
    $('.mobile-nav-button').click(function (e) {
        $('.mob-menu').toggleClass('visible');

        e.stopPropagation();
    });

    $('.mob-menu').click(function (e) {
        e.stopPropagation();
    });
});

/* Masonry */
$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    //isAnimated: true,
    //isResizable: true,
});

/* Owl.corousel */
$(document).ready(function(){

    var owl = $('.owl-carousel_masonry');
    owl.owlCarousel({
        margin:10,
        nav:true,
        dots:false,
        startPosition: 'URLHash',
        loop: true,
        items: 1
    });
    // Listen to owl events:
//    owl.on('changed.owl.carousel', function(event) {
//        console.log(event);
//        location.hash = 'slide' + event.item.index;
//    })
});

$(document).ready(function(){
    $('.owl-carousel_cases').owlCarousel({
        loop:true,
        margin:10, //отступ справа
        nav:true,
        dots:true,
        items: 1,
        mouseDrag: false,
        touchDrag: false
    });
});

$(document).ready(function(){
    $('.owl-carousel_case').owlCarousel({
        loop:true,
        margin:10, //отступ справа
        nav:true,
        dots:true,
        mouseDrag: false,
        touchDrag: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

//Плавная прокрутка до якоря
$(document).ready(function(){

    $('.targeta').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});

});

//TrackpadScrollEmulator
$(document).ready(function() {
  // Initialize scroller.
  $('.trackpad-scroll').TrackpadScrollEmulator();
});


//------------------upbutton----------------------------
window.onload = function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            if ($('#upbutton').is(':hidden')) {
                $('#upbutton').fadeIn('slow').css({
                    'opacity': '1',
                    'right': '5rem',
                    'transition': 'all 0.7s ease',
                    '-webkit-transition': 'all 0.7s ease'
                });
            }
        } else {
            $('#upbutton').stop(true, false).fadeOut('fast').css({
                    'opacity': '0',
                    'right': '0',
                    'transition': 'all 0.7s ease',
                    '-webkit-transition': 'all 0.7s ease'
                });
        }
    });
    $('#upbutton').click(function () {
        $('html, body').stop().animate({
            scrollTop: 1
        }, 300);
    });
};
