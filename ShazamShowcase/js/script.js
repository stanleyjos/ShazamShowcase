// event listeners

$(".openplayer").click(generateContainer);

$(window).resize(getThumbnailsize);

$(".logo2").click(function(){
	 $('audio').each(function(){this.player.pause()});
	});

//player functions

function launchMediaelement(){
	$('audio').mediaelementplayer();
};

function  getThumbnailsize (){	
var cw = $('.imagewrap').width();
var dw = $('#controlwrapbackground').width();
$('.imagewrap').css({'height':cw+'px'});
$('#controlwrap').css({'height':cw+'px'});
$('#controlwrapbackground').css({'height':dw+'px'});
};

function pausePlayer(){
 $('audio').each(function(){this.player.pause()});
 console.log("pausePlayer executed");
};


function generateContainer(){
	launchMediaelement();
	// selects all other .openplayer besides the clicked one
	var notClicked =  $(".openplayer").not(this);
	$(notClicked).removeClass("opened");
	$(notClicked).addClass("closed");
	// if the list item (openplayer) you clicked is open it closes it 
	if ($(this).hasClass("opened")){
		if ($(window).width() > 700) {
	 	$("#playerid").css("display" , "none");
   		} else { 
   		// this controls player for minimized version	
   		$(".playercontainer").css("bottom" , "-145px");
		};
		// for when you click on an open player container
		$(this).addClass("closed");
		$(this).removeClass("opened");
		pausePlayer();
	} else if ($(this).hasClass("closed")){ 	
		// for when you click on a closed player container and another player container is open
		// changes styles of li 
		// builds player styles
		// ads audio source
		$("#playerid").css("display" , "block");
		$(this).addClass("opened");
		$(this).removeClass("closed");
		pausePlayer();
		var experienceId = $(this).attr("id");
		document.getElementById("featthumbnail").className = experienceId; 
		var tracksource = "audio/" +experienceId+ ".mp3";
		var background = "url(./images/" +experienceId+ ".png)";
		document.getElementById("featthumbnail").style.backgroundImage = background;
		document.getElementById("controlwrapbackground").style.backgroundImage = background;
		// document.getElementById("controlwrapbackground").className = experienceId;
		getThumbnailsize ();
		setTimeout(function(){
			$(".featthumbnail").css("background" , "newbackground");
			$('audio').attr("src",tracksource);
			document.getElementById("controlwrapbackground").className += " style2";
		}, 10);
	   	if ($(window).width() > 700) {
		 	$("#playerid").insertAfter(this);
	   	} else { 
	   	// this controls player for minimized version	
	    $(".playercontainer").css("bottom" , "0px");
		};		
	}
};



//Carousel event listeners


$(".openplayer").click(function(){
	$(".navs").css("color" , "white");
	$("main").css("background" , "#178bfb")
});

$(".nav1").click(function(){

	$(".nav1").addClass("active");
	$(".nav2").removeClass("active");
	$(".nav3").removeClass("active");
	$(".new").css("left" , "0%");
	$(".feat").css("left" , "100%");
	$(".onair").css("left" , "200%");
});

$(".nav2").click(function(){
	$(".nav2").addClass("active");
	$(".nav1").removeClass("active");
	$(".nav3").removeClass("active");
	$(".new").css("left" , "-100%");
	$(".feat").css("left" , "0%");
	$(".onair").css("left" , "100%");
});

$(".nav3").click(function(){
	$(".nav3").addClass("active");
	$(".nav1").removeClass("active");
	$(".nav2").removeClass("active");
	$(".new").css("left" , "-200%");
	$(".feat").css("left" , "-100%");
	$(".onair").css("left" , "0%");
});	

