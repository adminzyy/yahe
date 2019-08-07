class Login{
    constructor(){
        // 注册的接口
        this.url = "http://api.icodeilife.cn:81/user";
        // 获取元素
        this.user = $("#user");
        this.pass = $("#pass");
        this.tel = $("#tel");
        this.email = $("#email");
        this.btn = $("#btn");
        this.state = $(".reg p span");
        // 绑定点击事件
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.btn.click(function(){
            // 开启ajax
            that.load()
        })
    }
    load(){
        // 请求注册接口
        $.ajax({
            url:this.url,
            data:{
                type:"register",
                user:this.user.val(),
                pass:this.pass.val(),
                tel:this.tel.val(),
                email:this.email.val()
            },
            success:(res)=>{
                // 请求成功之后，解析数据，根据数据的返回信息，决定不同的状态
                res = JSON.parse(res);
                // console.log(res);
                if(res.code == 0){
                    
					this.state.html("注册失败，请重新注册");
					// console.log(usr,pass,tel,email)
                }else if(res.code == 1){
                    
                    this.state.html("注册成功，5秒后跳转到<a href='login.html'>登录</a>");
                    setTimeout(() => {
                        location.href = "login.html"
                    }, 5000);
                    
                }
            }
        })
    }
}

new Login();

function Reg(){
    var obox = document.querySelector(".box");
		var ouser = document.getElementById("user");
		var opass = document.getElementById("pass");
		var opass2 = document.getElementById("pass2");
		var oyou = document.getElementById("email");
		// var onam = document.getElementById("nam");
		var otel = document.getElementById("tel");
		var otest = document.getElementById("test");
		var orand = document.getElementById("rand");
        var osub = document.getElementById("btn");
        
		// var olow = document.querySelector(".low");
		// var omid = document.querySelector(".mid");
		// var ohig = document.querySelector(".hig");
		var user=pass=pass2=you=nam=tel=test=0;
		
		
		//用户名
		ouser.onblur=function(){
			
			var str=ouser.value;
			var oureg=/^[a-z_]\w{5,17}$/i;
			
			if(oureg.test(str)){
				user=1;
			}else{
				obox.innerHTML="用户名称只能包含数字、字母、下划线，且不能以数字开头，长度在6-18位之间!"
			}
			if(!ouser.value){
				ouser.value=" 请设置用户名";
			}
		}
		ouser.onfocus=function(){
			ouser.value="";
		}
		
		
		//手机号
		otel.onblur=function(){
			var phReg=/^1[3-9]\d{9}$/;
			if(phReg.test(this.value)){
				tel=1;
			}else{
				obox.innerHTML="不是手机号!"
				tel=0;
			}
			if(!otel.value){
				otel.value="用于通知手机号码";
			}
		}
		otel.onfocus=function(){
			otel.value="";
		}
		
		
		//密码
		opass.onblur = function(){
        var x=y=z=0;
        var str = this.value;
        if(str.length >= 6 && str.length <= 18){
            for(var i=0;i<str.length;i++){
                if(str[i] >=0 && str[i] <= 9){
                    x=1;
                }
                if(str[i].charCodeAt() >=97 && str[i].charCodeAt() <= 122 || str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90){
                    y=1;
                }
                if(str[i].charCodeAt() >= 33 && str[i].charCodeAt() <= 47 || str[i].charCodeAt() >= 58 && str[i].charCodeAt() <= 64){
                    z=1;
                }
            }
            pass = 1;
        }else{
            obox.innerHTML = "长度不符，请输入长度在6~18位之间的内容";
            pass = 0;
        }
    }
		opass.onfocus=function(){
			opass.value="";
		}
		opass2.onblur = function(){
			if(opass2.innerHTML === opass.innerHTML ){				
				obox.innerHTML="输入成功!";
				pass2 = 1;
			}else{
				obox.innerHTML="请重新输入!"
				pass2=0;
			}
			if(!opass2.value){
				opass2.value="请输入正确的密码";
			}
		}
		opass2.onfocus=function(){
			opass2.value="";
		}
	
		
		//验证码
		orand.onclick = function(){
			orand.innerHTML="";
			function random(){
			var str = "";
			for(var i=0;i<4;i++){
				var a = parseInt(Math.random()*10);
				str += a;
			}
			return str;
		}
		orand.innerHTML = random();
		}
		otest.onblur=function(){
			if(otest.innerHTML == orand.innerHTML){				
				obox.innerHTML="输入成功!";
				test = 1;
			}else{
				obox.innerHTML="请重新输入!"
				test=0;
			}
			if(!otest.value){
				otest.value="请输入验证码";
			}
		}
	
		otest.onfocus=function(){
			otest.value="";
		}
		
		
		//邮箱
		oyou.onblur=function(){
			var phReg= /^\w+\@[0-9a-z]+\.(com|cn)$/i;
			if(phReg.test(this.value)){
				obox.innerHTML="成功！"
				you=1;
			}else{
				obox.innerHTML="不是邮箱!"
				you=0;
			}
			if(!oyou.value){
				oyou.value="请输入正确邮箱";
			}
		}
		oyou.onfocus=function(){
			oyou.value="";
		}
		
		osub.onclick=function(){
			if(user&&pass&&pass2&&you&&tel){
                alert("提交成功")
                
			}else{
                alert("提交失败")
                console.log(user,pass,pass2,you,tel,test)
			}
		}
}
Reg();