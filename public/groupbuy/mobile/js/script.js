$(function() {
	jQuery.support.cors = true;
	// all items that may appear in loaded includes are packaged into a separate on Ready function so that this can be re-run on freshly loaded content
	setUpAjaxable();
	
	//you could technically have a collapsible element within an ajax loaded div but it would be ugly so safe to assume we won't do this
	if(jQuery().mobify){
		$(".mobify").mobify({
			//accordionMode:true			
		});
	}
	
	//we aren't doing any nested ajax loads so there should not be an ajaxlink in any loaded content
	$('.ajaxlink').click(function(e){
		//set up loading anim if not done already
		if(!$("#loadingAnim").exists()){
			var loading_anim = $("<div id='loadingAnim'>Loading...</div>");
			$("#wrap").append(loading_anim);
			loading_anim.hide();
			loading_anim.bind({
				ajaxStart: onAjaxStart,
				ajaxStop: onAjaxStop
			});
		}
		/* 
		.ajaxlink can have an .ajaxGroup ancestor
		this allows groups of links that load/hide the same 
		content toggle be treated as a group. 
		*/
		var groupElt = $(this).parents('.ajaxGroup');
		groupElt = groupElt.exists() ? groupElt : $(this);
		
		if(groupElt.hasClass('activated')){
			//remove the ajax loaded content/cancel the request
			removeAjaxContent(groupElt);
			
		}else{
			groupElt.addClass('activated');
			$.ajax({
				type: "GET",
				url: $(this).attr('href'),
				beforeSend: onAjaxBeforeSend,
				complete: onAjaxComplete,
				success: onAjaxLinkSuccess,
				error: onAjaxLinkError,
				context: groupElt,
				dataType : 'text'
			});
		}
		e.preventDefault();
		//return false;
	});
});

function setUpAjaxable(elt_scope){
	if(elt_scope == null){
		elt_scope = $('body');
	}
	//check if browser has placeholder support 
	if(!supports_input_placeholder()){
		elt_scope.find('input.txt').defaultText();
	}
	
	if(!supports_input_date()){
		elt_scope.find(".datepicker input[type='text']").each(function(i){
			if(jQuery().datetimepicker){
				
				// store the type and the pair elt_scope
				var dParent = $(this).parents('.datepicker');
				var dType = dParent.hasClass('startDate') ? 'startDate' : 'endDate' ;
				var dPair = dParent.siblings('.datepicker').children("input[type='text']");
				$(this).data('datepicker_type',dType);
				$(this).data('datepicker_pair',dPair);
				
				var defaultHour = dType == "startDate" ? 18 : 20;
				$(this).datetimepicker({
					minDate: 0,
					constrainInput: false,
					showOn: "button",
					buttonImage: "styles/calendar-icon.png",
					buttonImageOnly: true,
					buttonText: "Calendar with time picker",
					ampm: true,
					dateFormat: 'dd/mm/yy',
					timeFormat: 'h:mm TT',
					stepHour: 1,
					stepMinute: 10,
					hour: defaultHour,
					addSliderAccess: true,
					sliderAccessArgs: { touchonly: false },
					onSelect: onDateTimePickerSelect,
					onClose: onDateTimePickerClose
				});
			}
			if(jQuery().datefeedback){
				elt_scope.find(this).datefeedback();
			}
		});
	}
	elt_scope.find(".hideable").find("li:gt(5),tr:gt(5)").hide(); 
	elt_scope.find(".hideable").has("li:nth-child(7),tr:nth-child(7)").after("<a class=\"showhide\" href=\"#\">Show all</a>"); 
	elt_scope.find(".hideable").addClass('hideable-setup').removeClass('hideable');
	elt_scope.find("a.showhide").click(function(){
		$(this).siblings(".hideable-setup").find("li:gt(5),tr:gt(5)").toggle(0);
		if($(this).text() == "Show all"){
			$(this).text('Show less');
		}else{
			$(this).text('Show all');
		}
		//stop the navigate to anchor (so the browser window doesn't jump).
		return false;
	}); 
	
	if(jQuery().tabs){
		elt_scope.find( ".tabBox" ).tabs();
	}
	
	elt_scope.find(".remoteClick").click(function(){
		$($(this).attr('href')).click();
		return false;
	}); 
}
function removeAjaxContent(groupElt){
	var contentElt = groupElt.data('ajaxgroup_content');
	contentElt.slideUp(300,function(){
		$(this).remove();
	});
	groupElt.removeClass('activated');
}

/* scoped to #loadingAnim */
function onAjaxStart(){
	var thisvar = this;
	console.info("onAjaxStart thisvar:"+thisvar);
	$(this).show();
}
function onAjaxStop(){
	var thisvar = this;
	console.info("onAjaxStop thisvar:"+thisvar);
	$(this).fadeOut("100");
}

/* scoped to the ajaxGroup element for the element clicked */
function onAjaxBeforeSend(){
	
	var pos = $(this).offset();
	pos.left += Math.round( ( $(this).width() - $("#loadingAnim").width() ) /2 );
	$("#loadingAnim").offset(pos);
}
function onAjaxLinkError(xhr,statusCode,statusObj){

	console.info('onAjaxLinkError: '+statusCode+ ' statusObj:' +statusObj);
}

function onAjaxComplete(){
	console.info('onAjaxComplete');
}
function onAjaxLinkSuccess(data){
	
	var dataSelection = $(data).find('div.include');
	var content = $(dataSelection);
	$(this).data('ajaxgroup_content',content);
	content.data('ajaxgroup',$(this));
	
	//close link
	var closeLink = $("<a class='ajaxLinkClose' href='#'><span>Hide</span></a>");
	content.append(closeLink);
	closeLink.bind('click',{groupElt:$(this)},function(e){
		removeAjaxContent(e.data.groupElt);
		return false;
	});
	
	$(this).append(content);
	content.hide().slideDown("fast",function(){
		var wH = $(window).height();
		var dH = $('#wrap').height();
		var groupElt = $(this).data('ajaxgroup');
		var offset = groupElt.offset(); // the group element needs to be visible as this is the context
		var maxScroll = Math.max(0,dH - wH); // max the window can scroll to
		var scrollToVal = Math.min( offset.top , maxScroll);
		$('body').animate({scrollTop:scrollToVal},200);
		
	});
	setUpAjaxable(content);
}


function onDateTimePickerCreate(event, ui){
	//console.info("onDateTimePickerCreate event:"+event+", ui:"+ui);
}
function onDateTimePickerSelect(dateText, inst){
	$(this).removeClass();
}
function onDateTimePickerClose(dateText, inst){
	checkStartEndDate($(this));
}

function checkStartEndDate(supplied_elt){
	var start_elt,end_elt;
	
	if(supplied_elt.data('datepicker_type') == "startDate"){
		start_elt = supplied_elt;
		end_elt = supplied_elt.data('datepicker_pair');
	}else{
		end_elt = supplied_elt;
		start_elt = supplied_elt.data('datepicker_pair');
	}

	var startDate = Date.parse(start_elt.val());
	var endDate = Date.parse(end_elt.val());
	
	if(startDate != null){
		if(endDate == null || isNaN(endDate)){
			end_elt.val(startDate.toString("dd/MM/yyyy h:mm tt"));
		}else if(endDate.isBefore(startDate)){
			end_elt.val(startDate.toString("dd/MM/yyyy h:mm tt"));
		}
	}
}
	
	
function supports_input_placeholder() {
	//or use modernizr?
	var i = document.createElement('input');
	return 'placeholder' in i;
}

function supports_input_date() {
	//or use modernizr?
	/*
	Ugghh! this doesn't work because Safari does 'support' the date attribute, but incredibly badly!
	
	So far only Opera and Chrome have a built in datepicker so best to not try the html5 path yet!
	
	var i = document.createElement('input');
	i.setAttribute("type","date");
	return i.type !== "text";
	*/
	return false;
}
