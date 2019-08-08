//menu
$(document).on("mouseenter", ".level1 dd", function () {
		$(this).addClass("active").parents(".level1").siblings(".level2").show().stop().animate({},500);
		$(this).addClass("active").css({background: "#F5F5F8"}).siblings("dd").css({background:""})
	}).on("mouseleave", ".catebox", function () {
		$(this).removeClass("active").children(".level2").hide().stop().animate({},500);
		$("dd").css({background:""});
});

// $().ready(function () {
//     $(".level1 dd").mouseover(function () {
//         var _index = $(this).index();
//         $(".level2>div").eq(_index).show().siblings().hide();
//         $(this).addClass("active").siblings().removeClass("active");
//     });
//     $(".catebox").on("mouseleave", function () {
//         $(".level2 div").css({
//             "display":"none",
//         })
//     })
// });


//banner
$(".banner1").banner({
	items:$(".banner1").find("img"),        
	left:$(".banner1").find("#left"),       
	right:$(".banner1").find("#right"),     
	list:false,
	autoPlay:true,                          
	delayTime:2000,                         
	moveTime:200,                          
	index:1,                               
});

//floor
;$(function(){
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
});


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
	//
	$(".car").show();
	$(".p2").find("span").html(JSON.parse(msg).user);
}else{
	$(".p1").show();
	$(".p2").hide();
	//
	$(".car").hide();
}

// 点击退出时,修改登录状态
$(".p2").find("a").click(function(){
	localStorage.removeItem("loginUser");
	$(".p1").show();
	$(".p2").hide();
	//
	$(".car").hide();
})

// 吸顶
window.addEventListener("scroll", this.handleScroll);
    
function handleScroll() {
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var ceilOffsettop=document.querySelector(".ceilingbox").offsetTop
	if(scrollTop >=690) {
		$(".ceilingbox").css("display","block").addClass("fixed")
		console.log(ceilOffsettop)
	} else {
		$(".ceilingbox").removeClass("fixed").css("display","none")
	}
}