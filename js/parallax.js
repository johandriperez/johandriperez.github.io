$(document).ready(function(){

	$(window).scroll(function(){
		var windowWidth = $(window).width();

		if(windowWidth > 800){
			var scroll = $(window).scrollTop();

			$('header .texts').css({
				'transform': 'translate(0px,' + scroll / 2 + '%)'
			});

			$('.about-us article').css({
				'transform': 'translate(0px, -' + scroll / 5 + '%)'
			});
		}
			
	});

	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth < 800) {
			$('.about-us article').css({
				'transform': 'translate(0px, 0px)' 
			})
		}
	});

});