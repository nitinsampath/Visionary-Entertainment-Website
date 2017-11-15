$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 10) {
	    $(".navbar").css("background" , "#c8c8c8");
	  }

	  else{
		  $(".navbar").css("background" , "white");  	
	  }
  })
})