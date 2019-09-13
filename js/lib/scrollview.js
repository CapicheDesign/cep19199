;
(function($) {
	var defaults = {
		sectionContainer: "section", 
		easing: "ease", 
		animationTime: 1000, 
		pagination: true, 
		updateURL: false, 
		supportOld: false, 
		keyboard: true, 
		beforeMove: null, 
		afterMove: null, 
		loop: true, 
		swipeAnim:"default",   
		responsiveFallback: false, 
		direction: 'vertical' 
	}
	$.fn.scrollview = function(options) {
		var settings = $.extend({}, defaults, options),
			element = $(this), 
			sections = $(settings.sectionContainer), 
			lastAnimation = 0, 
			quietPeriod = 500, 
			total = sections.length,
			paginationList = "", 
			movePrevent=false,	 
			touchDown=false,     
			steps=NaN,		
			startPos=NaN,		 
			endPos=NaN,			 
			offset=NaN;		     
		(function() {
			if(settings.direction == "horizontal"){
				for(var i=0;i<total;i++){
					$(sections[i]).css({
						"position":"absolute",
						"top":"0px",
						"left":i*100+"%"
					});
				}
			}
			if (settings.pagination) {
				var array = [];
				if ($('ul.scroll-pagination').length == 0) {
					$("body").prepend("<ul class='scroll-pagination'></ul>");
				} 
				for (var i = 0; i < total; i++) {
					array[i] = "<li><a data-index='" + (i + 1) + "' href='#" + (i + 1) + "'></a></li>";
				}
				paginationList = array.join(""); 
				$('ul.scroll-pagination').html(paginationList);
				if (settings.direction === 'horizontal') {
					var $pagination = $("body").find(".scroll-pagination");
					var posLeft = ($pagination.width() / 2) * -3;
					$pagination.css({
						"marginLeft":posLeft,
						"top":(parseInt(sections.height())-30)+"px",
						"left":"50%"
					});
					$pagination.find("li").css("float","left");
				} else {
					var $pagination = $("body").find(".scroll-pagination");
					var posTop = ($pagination.height() / 2) * -1;
					$pagination.css("marginTop", posTop);
				}
			} 
			if (window.location.hash != "" && window.location.hash != "#1") {


			} else {
				console.log(document.referrer);
				if(document.referrer.indexOf("/our-business") > 0){
					 console.log('came from business');
					$(settings.sectionContainer + "[data-index='3']").addClass("active")
					$("body").addClass("current-page-3")
					if (settings.pagination == true) {
						$(".scroll-pagination li a" + "[data-index='3']").addClass("active");
					}
				  } else {
					$(settings.sectionContainer + "[data-index='1']").addClass("active")
					$("body").addClass("current-page-1")
					if (settings.pagination == true) {
						$(".scroll-pagination li a" + "[data-index='1']").addClass("active");
					}
				}
			} 
		})() 	

		function init_scroll(event, delta) {
			var timeNow = new Date().getTime(); 
			if (timeNow - lastAnimation < quietPeriod + settings.animationTime) {
				return;
			} else {
				if (delta < 0) {
					element.moveDown(); 
				} else {
					element.moveUp(); 
				}
				lastAnimation = timeNow;
			}
		} 
		$.fn.moveDown = function() {
			var index = $(settings.sectionContainer + ".active").data("index"), 
				current = $(settings.sectionContainer + "[data-index='" + index + "']"), 
				next = $(settings.sectionContainer + "[data-index='" + (index + 1) + "']"),
				headingText = '',
				nextIndex = null;
				if (next.length == 0) {
					if (settings.loop) {
						var pos = 0;
						next = $(settings.sectionContainer + "[data-index='1']"); 
					} else {
						return
					}
				} else {
					var pos = (index * 100) * -1;
				}
				/*(if (typeof settings.beforeMove == 'function'){
				settings.beforeMove( next.data("index"));
			} */
				current.removeClass("active")
				next.addClass("active");
			if (settings.pagination) {
				$(".scroll-pagination li a" + "[data-index='" + index + "']").removeClass("active");
				$(".scroll-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active");
			}
			$("body")[0].className = ""; 
			$("body")[0].className = "animsition current-page-" + next.data("index");
			if (settings.updateURL) {
				var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (index + 1);
			} 
			$(this).transformPage(settings, pos, next.data("index"));
			nextIndex = next.data('index');
			if ( nextIndex === 1 ) {
				$('header').addClass('header__transparent');
				$('header').addClass('header__transparent');
				$('.logo img').attr('src','img/logo.svg');
				$('#menuToggle').removeClass('white-bg');
			} else {
				$('header').removeClass('header__transparent');
      			$('.logo img').attr('src','img/logo-black.svg');
				$('#menuToggle').addClass('white-bg');
				switch (nextIndex)
				{
					case 2:
						headingText = 'Highlights';
						break;
			
					case 3:
						headingText = 'Business';
						break;
			
					case 4:
					  headingText = 'Financial Statements';
					  break;
				  }
				 $('#sectionHeading').text(headingText);  
			}
		}
		$.fn.moveUp = function() {
			var index = $(settings.sectionContainer + ".active").data("index"),
				current = $(settings.sectionContainer + "[data-index='" + index + "']"),
				next = $(settings.sectionContainer + "[data-index='" + (index - 1) + "']"),
				headingText = '',
				nextIndex = null;
			if (next.length == 0) {
				if (settings.loop) {
					var pos = ((total - 1) * 100) * -1;
					next = $(settings.sectionContainer + "[data-index='" + total + "']");
				} else {
					return;
				}
			} else {
				var pos = ((next.data("index") - 1) * 100) * -1;
			}
			if (typeof settings.beforeMove == 'function') settings.beforeMove(next.data("index")); 
			current.removeClass("active");
			next.addClass("active");
			if (settings.pagination) {
				$(".scroll-pagination li a" + "[data-index='" + index + "']").removeClass("active");
				$(".scroll-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active");
			}
			$("body")[0].className = ""; 
			$("body")[0].className = "animsition current-page-" + next.data("index");
			if (settings.updateURL) {
				var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (index + 1);
			}
			nextIndex = next.data('index'); 
			$(this).transformPage(settings, pos, nextIndex);
			if ( nextIndex === 1 ) {
				$('header').addClass('header__transparent');
				$('header').addClass('header__transparent');
				$('.logo img').attr('src','img/logo.svg');
				$('#menuToggle').removeClass('white-bg');
			} else {
				$('header').removeClass('header__transparent');
      			$('.logo img').attr('src','img/logo-black.svg');
				  $('#menuToggle').addClass('white-bg');
				  switch (nextIndex)
				{
					case 2:
						headingText = 'Highlights';
						break;
			
					case 3:
						headingText = 'Business';
						break;
			
					case 4:
					  headingText = 'Financial Statements';
					  break;
				  }
				 $('#sectionHeading').text(headingText);  
			}
		};
		$.fn.moveTo = function(page_index) {
			var current = $(settings.sectionContainer + ".active");
			var goPage = $(settings.sectionContainer + "[data-index='" + (page_index) + "']");
			if (goPage.length > 0) {
				
				current.removeClass("active")
				goPage.addClass("active")
				$(".scroll-pagination li a" + ".active").removeClass("active");
				$(".scroll-pagination li a" + "[data-index='" + (page_index) + "']").addClass("active");
				$("body")[0].className = "";
				$("body")[0].className = "animsition current-page-" + goPage.data("index");
				var pos = ((page_index - 1) * 100) * -1;
				$(this).transformPage(settings, pos, page_index);
			}  
		};
		$.fn.transformPage = function(settings, pos, index) {
			if (defaults.supportOld && $('html').hasClass('ie8')) { 
				
			//  } else if ( index == '2' ) {
			// 	$(this).css({
			// 		"-webkit-transform": (settings.direction == 'horizontal') ? "translate3d(-110vh, 0, 0)" : "translate3d(0, -110vh, 0)",
			// 		"-webkit-transition": "all " + settings.animationTime + "ms " + settings.easing,
			// 		"-moz-transform": (settings.direction == 'horizontal') ? "translate3d(-110vh, 0, 0)" : "translate3d(0, -110vh, 0)",
			// 		"-moz-transition": "all " + settings.animationTime + "ms " + settings.easing,
			// 		"-ms-transform": (settings.direction == 'horizontal') ? "translate3d(110vh%, 0, 0)" : "translate3d(0, -110vh, 0)",
			// 		"-ms-transition": "all " + settings.animationTime + "ms " + settings.easing,
			// 		"transform": (settings.direction == 'horizontal') ? "translate3d(-110vh, 0, 0)" : "translate3d(0, -110vh, 0)",
			// 		"transition": "all " + settings.animationTime + "ms " + settings.easing
			// 	});
			
			 } else {
				$(this).css({
					"-webkit-transform": (settings.direction == 'horizontal') ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
					"-webkit-transition": "all " + settings.animationTime + "ms " + settings.easing,
					"-moz-transform": (settings.direction == 'horizontal') ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
					"-moz-transition": "all " + settings.animationTime + "ms " + settings.easing,
					"-ms-transform": (settings.direction == 'horizontal') ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
					"-ms-transition": "all " + settings.animationTime + "ms " + settings.easing,
					"transform": (settings.direction == 'horizontal') ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
					"transition": "all " + settings.animationTime + "ms " + settings.easing
				});
			}
			
		};

		

		function onStart(event){
			if(movePrevent){
				return false;
			}
			touchDown=true;  
			settings.direction === "horizontal" ? startPos=event.pageX:startPos=event.pageY;
			steps=1;
		}
		function onMove(event){
			if(movePrevent === true || touchDown === false){
				return false;
			}
			settings.direction === "horizontal" ? endPos=event.pageX:endPos=event.pageY;
			scrollToMove();
		}
		function onEnd(event){
			console.log(steps);
			if(movePrevent === true && steps !=2){
				return false;
			}else{
				touchDown=false;  
				settings.direction === "horizontal" ? endPos=event.pageX:endPos=event.pageY;
			}
			if(steps === 2){
				var comPos=endPos-startPos,
					index = $(settings.sectionContainer + ".active").data("index");
				if(Math.abs(comPos)<50){
					element.css({
						"-webkit-transform": (settings.direction == 'vertical')?"translate3d(0," + (parseInt(index-1)*-100) + "%,0)":"translate3d(" + (parseInt(index-1)*-100) + "%,,0,0)",
						"-webkit-transition": "all " + 500 + "ms ",
						"transform": (settings.direction == 'vertical')?"translate3d(0," + (parseInt(index-1)*-100) + "%,0)":"translate3d(" + (parseInt(index-1)*-100) + "%,0,0)",
						"transition": "all " + 500 + "ms "
					});
				}else{
					if(comPos<0){
						element.moveDown(); 
					}else{
						element.moveUp(); 
					}
				}
			}
			steps=3;
		}
		function scrollToMove(){
			if(defaults.swipeAnim === "cover"){
				
			}
			else if(defaults.swipeAnim === "default"){
				var	pageHeight  = document.documentElement.clientHeight,
					pageWidth = document.documentElement.clientWidth
					comPos=endPos-startPos,
					index = $(settings.sectionContainer + ".active").data("index"),
					current = $(settings.sectionContainer + "[data-index='" + index + "']"), 
					pre=$(settings.sectionContainer + "[data-index='" + (index - 1) + "']"),
					next = $(settings.sectionContainer + "[data-index='" + (index + 1) + "']");
				if(endPos < startPos){
					if(next.length === 0){
						console.log("已经到达最后一个");
						return false;   
					}
					var current_index=parseInt(index)-1;
					element.css({
						"-webkit-transform": (settings.direction === 'vertical')?"translate3d(0," + (comPos-pageHeight*current_index) + "px,0)":"translate3d(" + (comPos-pageWidth*current_index) + "px,0,0)",
						"-webkit-transition": "all " + 0 + "ms ",
						"transform": (settings.direction == 'vertical')?"translate3d(0," + (comPos-pageHeight*current_index) + "px,0)":"translate3d(" + (comPos-pageWidth*current_index) + "px,0,0)",
						"transition": "all " + 0 + "ms "
					})
				} 
				if(endPos >= startPos){
					if(pre.length === 0){
						return false;
					}
					var current_index=parseInt(index)-1;
					element.css({
						"-webkit-transform": (settings.direction === 'vertical') ?"translate3d(0," + (comPos-pageHeight*current_index) + "px,0)":"translate3d(" + (comPos-pageWidth*current_index) + "px,0,0)",
						"-webkit-transition": "all " + 0 + "ms ",
						"transform": (settings.direction === 'vertical')?"translate3d(0," + (comPos-pageHeight*current_index) + "px,0)":"translate3d(" + (comPos-pageWidth*current_index) + "px,0,0)",
						"transition": "all " + 0 + "ms "
					});
				}
			}
			steps=2;
		}
		$(document).on("wheel mousewheel DOMMouseScroll", function(event) {
			//event.preventDefault();
			var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail * 40;
			init_scroll(event, delta);
		}).on("touchstart",function(event){
			//event.preventDefault();
			onStart(event.originalEvent.changedTouches[0]);   
		}).on("touchmove",function(event){
			//event.preventDefault();
			onMove(event.originalEvent.changedTouches[0]);
		}).on("touchend",function(event){
			//event.preventDefault();
			onEnd(event.originalEvent.changedTouches[0]);
		});

		$("ul.scroll-pagination").on("click", "a", function(event) {
			event.preventDefault();
			var page_index = $(this).data("index");
			element.moveTo(page_index);
		});

		
	};
})(jQuery);
