$(function() {
	smoothScroll(300);
	navRespons ();
	sobreHidden ();
	portWork ();
	workLoad ();
});

//smoothScroll - scroll ate a com id, ao inves de recarregar pag
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top-50
	        }, duration);
	    }
	});
}

//navRespons
var toggleMenu = function () {
	$('.menu').toggleClass('show-mobile');
	$('nav').toggleClass('show-nav');
}
$(document).click(function(event) {
	if(!$(event.target).closest('.nav-container').length) {
	  if ($('.menu').hasClass('show-mobile')) {
			toggleMenu ();
	  }
	}
});
function navRespons () {
	$('.nav-container').click(function () {
		if ($('.mobile').is(':visible')) {
			toggleMenu ();
		}
	});
}

//Paralax-Header
$(window).scroll(function(){

	var $this = $(this)
			wScroll = $this.scrollTop();
			hParal = function () {
				$('.hero-lettering').css({
					'transform' : 'translate(0px, '+ wScroll /5 +'%)'
				});
			}
	if ($this.width() <= 1300) {
		if ($this.scrollTop() < 150){
			hParal ();
		}
	}
});

//sobreHidden
function sobreHidden (){
	$('.knowmore').click(function () {
		$('.sobre-text').show();
		$('.lermais').hide();
	});

	$('.lermenos').click(function () {
			$('.sobre-text').hide();
			$('.knowmore').show();
	});
}
