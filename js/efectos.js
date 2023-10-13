$(document).ready(function(){

// EFECTO MENU
	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		}, 2000 + (index * 500));
	});

// EFECTO HEADER
	if( $(window).width() > 800 ){
		$('header .texts').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .texts').animate({
			opacity: 1,
			marginTop: '-52px'
		}, 1500);
	}

	if( $(window).width() < 800 ){
		$('header .texts').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .texts').animate({
			opacity: 1,
			marginTop: '52px'
		}, 1500);
	}

// SCROLL ELEMENTOS MENU
	var aboutUs = $('#about-us').offset().top,
		menu = $('#plates').offset().top,
		gallery = $('#gallery').offset().top,
		location = $('#location').offset().top;

	$('#btn-about-us').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 300
		}, 500);
	});

	$('#btn-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu
		}, 500);
	});

	$('#btn-gallery').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: gallery
		}, 500);
	});

	$('#btn-location').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: location
		}, 500);
	});

});
