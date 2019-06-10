$(function() {

	
	$("fieldset ul").addClass("radio-replace");
	//alert("ul:last: "+ $("fieldset ul:last").html() );
	//alert("hello");
	/**/
	$("fieldset ul.radio-replace li").each(function (i) {
		var $i = $(this).find('input')
		var rsvp_val = $i.val()
		//$i.hide();
		var rsvp_label = $(this).text();
		
		$(this).wrapInner("<a href='#"+rsvp_val+"' title='" + rsvp_label+ "' ></a>");
		$(this).find("a").addClass("rsvp-"+rsvp_val);
		
    });
      
    $("fieldset ul.radio-replace li a").click(function(){ 
		
		if($(this).hasClass("active")){
			$("fieldset ul.radio-replace li a").removeClass("active");
			$(this).find('input').removeAttr("checked"); // uncheck the checkbox or radio
		}else{
			$("fieldset ul.radio-replace li a").removeClass("active");
			$(this).addClass("active");  
			$(this).find('input').attr("checked", "checked"); // make checkbox or radio checked
		}
		updateSubmitLabel();
		return false;
		
	});
	updateSubmitLabel();
	 $("fieldset").removeClass("requires-setup");
	
});


function updateSubmitLabel(){
	var yesmsg  = "Next: Vote on locations";
    var nomsg = "Decline the invitation";
    //alert("radio val: "+$('input:radio:checked').val());
    if($('input:radio:checked').val() == "no"){
    	$('input:submit').val(nomsg);
    }else{
    	$('input:submit').val(yesmsg);
    }
}