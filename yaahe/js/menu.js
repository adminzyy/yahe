//menu
$(document).on("mouseenter", ".level1 dd", function () {
		$(this).addClass("active").parents(".level1").siblings(".level2").show();
		// $(this).css({ background: "#F5F5F8" })
	}).on("mouseleave", ".catebox", function () {
		$(this).removeClass("active").children(".level2").hide();
		// $(".level1 dd").css({ background:null });
});


//banner
$(".banner1").banner({
	items:$(".banner1").find("img"),        
	left:$(".banner1").find("#left"),       
	right:$(".banner1").find("#right"),     
	list:false,
	autoPlay:true,                          
	delayTime:2000,                         
	moveTime:200,                          
	index:0,                               
})

//floor
$(function(){
   $(".storey li").click(function(){
		$(document).scrollTop($(".floor").eq($(this).index()).offset().top)
	})
	$("html").stop().animate({
		scrollTop:$(document).scrollTop($(".floor").eq($(this).index()).offset().top)
	})
	$(".storey li").mouseenter(function(){
		$(this).css({
			background:"#e1e1e1"
		}).siblings("li").css({
			background:""
		})
	})
})
   





