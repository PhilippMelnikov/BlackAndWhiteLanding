$(document).ready(function () {
	// $('.carousel').carousel({interval: 6000});
	if($(this).scrollTop() >= 100){
		$('.my-navbar').addClass('white-navbar');
	}
	$(this).scroll(function() {

		if($(this).scrollTop() >= 100)
		{
			$('.my-navbar').addClass('white-navbar');
		}
		else{
			$('.my-navbar').removeClass('white-navbar');
		}
	});

	$('.menu-button').click(function(){
		$('.collapsed-menu').fadeIn(300);
	});

	$('.close-button').click(function () {
		$('.collapsed-menu').fadeOut(300);
	});


	 var mySwiper = new Swiper ('.swiper1', {
    direction: 'horizontal',
    loop: true,
    pagination: '.swiper1-pagination',
		paginationClickable: true,
    centeredSlides: true

  });
  mySwiper.setGrabCursor();

  var mySwiper2 = new Swiper ('.swiper2', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    centeredSlides: true
  });
  mySwiper2.setGrabCursor();

var mySwiper3 = new Swiper ('.swiper3', {
    slidesPerView: 'auto',
    spaceBetween: 50,
    loop: true,
    pagination: '.swiper3-pagination',
		paginationClickable: true,
    centeredSlides: true
  });
  mySwiper3.setGrabCursor();

	$('.item-masonry').hover(
		function () {
			$(this).find('.cover-item-gallery').fadeIn(300);
		},
		function () {
			$(this).find('.cover-item-gallery').fadeOut(300);
		}
	);

	// set height of dark cover of masonry item
	function setDarkCoverHeight(){
		$(".item-masonry").each(function(index, element){
			var itemHeight = $(this).find("img").height();

			$(this).find(".cover-item-gallery").css("height", itemHeight);
		});
	}


	$( window ).resize(function(){
		setDarkCoverHeight();
	});

	var sizer = '.sizer';

	var gutter = 10;

	var container = $('.gallery');

	container.imagesLoaded(function () {
		container.masonry({
			itemSelector: '.item-masonry',
			columnWidth: sizer,
			gutter: gutter,
			percentPosition: true
		});
	});

	var instagramSizer = '.instagram-sizer';

	var instagramGutter = 10;

	var instagramContainer = $('.instagram-gallery');

	instagramContainer.imagesLoaded(function () {
		instagramContainer.masonry({
			itemSelector: '.instagram-item',
			columnWidth: instagramSizer,
			gutter: instagramGutter,
			percentPosition: true
		});
		setDarkCoverHeight();
	});

	 // anchors
   $('.anchor').click(function () {
  		var hrefName = $(this).attr('href');
  		var timeToScroll = Math.abs($(window).scrollTop() - $(hrefName).offset().top) / 3;
		$('html, body').animate({
	        scrollTop: $(hrefName).offset().top - 60
	    }, timeToScroll);
	});

   $(".collapsed-anchor").click(function () {
   		$('.collapsed-menu').fadeOut(300);
   })

   $('.menu-button').click(function(){
		$('.collapsed-menu').fadeIn(300);
	});

	$('.close-button').click(function () {
		$('.collapsed-menu').fadeOut(300);
	});

	//fancybox
	  $(".fancybox").fancybox({
	   'infobar':true,
	   'buttons':false
	  });




})
