/* this is very similar to the js for invitee-step1 - but will keep separate for now */

$(function() {

	$("fieldset.requires-setup ul.radio-replace li").each(function (i) {
		var $i = $(this).find('input')
		var i_val = $i.val()
		//$i.hide();
		var i_label = $(this).text();
		
		$(this).wrapInner("<a href='#"+i_val+"' title='" + i_label+ "' ></a>");
		$(this).addClass("i-"+i_val);
		
    });
      
    $("fieldset ul.radio-replace li a").click(function(){ 
		
		if($(this).hasClass("active")){
			$(this).parent().parent().find("li a").removeClass("active");
			$(this).find('input').removeAttr("checked"); // uncheck the checkbox or radio
		}else{
			$(this).parent().parent().find("li a").removeClass("active");
			$(this).addClass("active");  
			$(this).find('input').attr("checked", "checked"); // make checkbox or radio checked
		}
		return false;
	});
	
	
	 $("fieldset.requires-setup").removeClass("requires-setup");
	 
	 
});
