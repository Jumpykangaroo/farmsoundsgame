// JavaScript Document
$(document).ready(function(){
	/*$("#chicken-image > img").click(function(){
		$("#chicken").trigger("play");
	});
	$("#dog-image > img").click(function(){
		$("#dog").trigger("play");
	});
	$("#duck-image > img").click(function(){
		$("#duck").trigger("play");
	});*/
	var helpaudio = "#help1";
	$("audio").parent().children("img").click(function(){
		
  		$(this).parent().children("audio").trigger("play");
		$(this).parent().addClass("clicked");
		$(this).parent().one("animationend",function(){
			$(this).removeClass("clicked");
		});
		var selector = $(this).attr("data-show");
		if (selector){
			$(selector).removeClass("hidden");
		}
		selector = $(this).attr("data-helpaudio");
		if (selector){
			helpaudio = selector;
		}
	});
	$("#help").click(function(){
		$(helpaudio).trigger("play");
		$(this).parent().addClass("clicked");
		$(this).parent().one("animationend",function(){
			$(this).removeClass("clicked");
		});
	});
});

function showImage(){
        document.getElementById('hidden').style.visibility=visible;
    }