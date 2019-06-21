$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.header-navbar__list').toggleClass('menu-nav_active');
});

$(document).ready(function(){
	var button = $('#section-burger');

	button.on('click', function(){
		modal.addClass('modal_active')
	})

	close.on('click', function(){
		modal.removeClass('modal_active')
	})
});