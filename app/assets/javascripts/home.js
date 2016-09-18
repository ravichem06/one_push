(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
	$('.Contribute').hide();
	$('.search-result').delay(10000).hide(0,function(){
		$('.Contribute').show();
	});
	
	$('.modal-trigger').leanModal();
});