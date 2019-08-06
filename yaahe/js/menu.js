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


// 选项卡
	var ali = document.querySelectorAll(".contactlenses li");
	var ah = document.querySelectorAll(".contactlenses h3");

	for(var i=0;i<ali.length;i++){
		ali[i].index = i;
		ali[i].onclick = function(){
			for(var j=0;j<ali.length;j++){
				ali[j].className = "";
				ah[j].style.display = "none";
			}
			this.className = "active";
			ah[this.index].style.display = "block";
		}
	}

	var sli = document.querySelectorAll(".circlelenses li");
	var sh = document.querySelectorAll(".circlelenses h3");

	for(var i=0;i<sli.length;i++){
		sli[i].index = i;
		sli[i].onclick = function(){
			for(var j=0;j<sli.length;j++){
				sli[j].className = "";
				sh[j].style.display = "none";
			}
			this.className = "active";
			sh[this.index].style.display = "block";
			
		}
	}


// index
// 立即读取状态，判断是否登录，做出对应处理
var msg = localStorage.getItem("loginUser");
if(msg){
	$(".p1").hide();
	$(".p2").show();
	$(".p2").find("span").html(JSON.parse(msg).user);
}else{
	$(".p1").show();
	$(".p2").hide();
}

// 点击退出时,修改登录状态
$(".p2").find("a").click(function(){
	localStorage.removeItem("loginUser");
	$(".p1").show();
	$(".p2").hide();
})