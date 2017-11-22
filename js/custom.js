// JavaScript Document

// header scroll fixed
$(window).scroll(function(){
var sticky = $('.sticky'),
scroll = $(window).scrollTop();
if (scroll >= 1) sticky.addClass('fixed');
else sticky.removeClass('fixed');
});

// flexslider
$(window).load(function(){
$('.flexslider').flexslider({
animation: "slide",
start: function(slider){
$('body').removeClass('loading');
}
});
});

// Owl Slider 1
$("#team").owlCarousel({
items : 4,
lazyLoad : true,
navigation : true,
auto : true,
center: true,
loop:true,
autoPlay: 7000,
itemsDesktop : [1199, 4],
itemsDesktopSmall : [992, 4],
itemsTablet : [768, 3],
itemsTablet : [767, 3],
itemsTabletSmall : [670, 2],
itemsMobile : [470, 1],
});