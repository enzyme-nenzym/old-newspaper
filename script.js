

$(document).ready(function(){
	
	// bubble menu!
	$("#bubble-menu").click(function(){
		if ($("#bubble-menu").hasClass('clicked')){
			$("#bubble-menu").removeClass("clicked")
		} else {
			$("#bubble-menu").addClass("clicked")
		}
		$("#bubble-tray").slideToggle("slow"); 
	});
	
	//header info bar!
  	$('.infobar-menu .infobar-button').click(function(){
		
		var tab_id = $(this).attr('id');
		var lastChar = tab_id.substr(tab_id.length - 1); 
		$('.infobar-info').addClass('display-none');
		$('.infobar-info').removeClass('display-grid');
		$('.infobar-info').removeClass('initial-menu-display');
		$("#infobar-content-"+lastChar).addClass('display-grid').removeClass('display-none');
		
	})
	
	$('.online-toggle').click(function(){
		if($('#online-now').hasClass("current-online-setting")){
			$('#online-now').removeClass("current-online-setting");
			$('#online-today').addClass("current-online-setting");
			$('.online-list').text("Online today the whole time is also just u")
			//add the today
		}
		else{ 
			//add the current
			$('#online-now').addClass("current-online-setting");
			$('#online-today').removeClass("current-online-setting")
			$('#online-now').addClass("current-online-setting");
			
			$('.online-list').text("Online currently is just u")
		}
	})
	
	
	$(".go-up").click(function(){
		$('html, body').animate({
		    scrollTop: $("#wrapper").offset().top
		}, 1500);  
	});
	
    
 
});
	
// 1. staff/events infobar
// 2. 1 more picture for the third bar maybe! 
// 4. 




