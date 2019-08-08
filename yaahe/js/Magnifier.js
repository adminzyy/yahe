function Magnifier(){
        this.sBox = document.querySelector(".s_box");
        this.sImg = this.sBox.children[0];
        this.bBox = document.querySelector(".b_box");
        this.bImg = this.bBox.children[0];
        
        this.addEvent()
    }
    Magnifier.prototype.addEvent = function(){
        var that = this;
        this.sBox.onmouseenter = function(){
            that.show()
        }
        this.sBox.onmouseleave = function(){
            that.hide()	
        }
        this.sBox.onmousemove = function(eve){
            var e = eve || window.event
            that.move(e);
        }
    }
    Magnifier.prototype.show = function(){
        this.bBox.style.display = "block";
        
        if(!this.span){
            this.span = document.createElement("span");
            var w = this.bBox.offsetWidth / this.bImg.offsetWidth * this.sBox.offsetWidth;
            var h = this.bBox.offsetHeight / this.bImg.offsetHeight * this.sBox.offsetHeight;
            
            this.span.style.cssText = `width:${w}px;height:${h}px;background-size:400px 300px;position:absolute;left:0;top:0;`;
            this.sBox.appendChild(this.span);
        }
        
        this.span.style.display = "block";
        
        this.sImg.style.opacity = "0.6"
    }
    Magnifier.prototype.hide = function(){
        this.span.style.display = "none";
        this.bBox.style.display = "none";
        
        this.sImg.style.opacity = "1"
    }
    Magnifier.prototype.move = function(e){
        var l = e.clientX - this.sBox.offsetLeft - this.span.offsetWidth/2;
        var t = e.clientY - this.sBox.offsetTop - this.span.offsetHeight/2;
        
        if(l < 0) l=0;
        if(t < 0) t=0;
        if(l > this.sBox.offsetWidth - this.span.offsetWidth){
            l = this.sBox.offsetWidth - this.span.offsetWidth
        }
        if(t > this.sBox.offsetHeight - this.span.offsetHeight){
            t = this.sBox.offsetHeight - this.span.offsetHeight
        }
        this.span.style.left = l + "px";
        this.span.style.top = t + "px";
        
        var x = l / (this.sBox.offsetWidth - this.span.offsetWidth);
        var y = t / (this.sBox.offsetHeight - this.span.offsetHeight);
        
        this.bImg.style.left = -x * (this.bImg.offsetWidth - this.bBox.offsetWidth) + "px";
        this.bImg.style.top = -y * (this.bImg.offsetHeight - this.bBox.offsetHeight) + "px";
        
        
        this.span.style.backgroundPosition = -l + "px " + -t +"px";
    }
    
    new Magnifier;


//放大镜点击切换图片
var oimg = document.getElementById("tpx");
var aimg = document.getElementById("tpy");
var mimg = document.getElementById("tpz");
oimg.onclick = function(){
	document.getElementById("tpb1").src = "img/big11.jpg ";
	document.getElementById("tpb2").src = "img/big11.jpg ";
}
aimg.onclick = function(){
	document.getElementById("tpb1").src = "img/big12.jpg ";
	document.getElementById("tpb2").src = "img/big12.jpg ";
}
mimg.onclick = function(){
	document.getElementById("tpb1").src = "img/big13.jpg ";
	document.getElementById("tpb2").src = "img/big13.jpg ";
}