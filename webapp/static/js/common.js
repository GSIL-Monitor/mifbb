$(function(){

  	new WOW({scrollContainer:".scrollView"}).init();
  		
  	$(window).on('scroll', function(){
	  	document.body.scrollTop > 100 ? $(".back_btn").show():$(".back_btn").hide();
	})
  			
  	$("#back_btn").tap(function(){
  		goTop();
  	})
  	
  })