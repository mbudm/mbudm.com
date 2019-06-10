jQuery(document).ready(function ($) {
	
	$('#menu-toggle').click(function(e) { 
    	$(this).parent().toggleClass('menu-active');
    	e.preventDefault();
  	});
  	
  	$("figure").each(function(i){
  		var bCRect = $(this)[ 0 ].getBoundingClientRect();
  		$posClass= (bCRect.left + $(this).width() ) < (window.innerWidth/2) ? $(this).addClass('west') : $(this).addClass('east') ;
  	});
  	
  	$("figure a").each(function(i){
		//remove title & alt attrs
		$(this).attr('oldtitle',$(this).attr('title'))
		$(this).removeAttr('title');
		
		$(this).find('img').each( function(i){
			$(this).attr('oldtitle',$(this).attr('title'))
			$(this).removeAttr('alt title');
		});
	});
  	
});
