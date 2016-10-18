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

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);