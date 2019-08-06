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


/*
.cont ul{padding: 0;list-style: none;width: 100%;height: 30px;display: flex;line-height: 30px;text-align: center;border-bottom: solid 1px black;margin: 0;}
			.cont ul li{margin: 0;flex: 1;border-left: solid 1px black;border-right: solid 1px black;}
			.cont ul li.active{background: pink;}
			
			.box{height: 369px;}
			.box p{margin: 0;height: 369px;display: none;}
			.box p:nth-child(1){background: #f00;display: block;}
			.box p:nth-child(2){background: #f0f;}
			.box p:nth-child(3){background: #ff0;}
		</style>
	</head>
	<body>
		<div class="cont">
			<ul>
				<li class="active">1</li>
				<li>2</li>
				<li>3</li>
			</ul>
			<div class="box">
				<p>段落1</p>
				<p>段落2</p>
				<p>段落3</p>
			</div>
		</div>
	</body>
	<script type="text/javascript">
		var ali = document.querySelectorAll(".cont li");
		var ap = document.querySelectorAll(".cont p");
		
		for(var i=0;i<ali.length;i++){
			ali[i].index = i;
			ali[i].onclick = function(){
				
//				点击事件中拿不到i
//				更拿不到ali[i]
				
				for(var j=0;j<ali.length;j++){
					ali[j].className = "";
					ap[j].style.display = "none";
				}
				
//				通过this找当前
				this.className = "active";
				
				ap[this.index].style.display = "block";
			}
		}


*/
