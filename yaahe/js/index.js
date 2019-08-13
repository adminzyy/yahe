class List{
    constructor(){
        this.cont = document.querySelector(".cont");
        this.url = "http://localhost/yaahe/data/goods2.json";

        this.load();
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.cont.addEventListener("click",function(eve){
            // if(eve.target.className == "btn"){
                that.id = eve.target.parentNode.getAttribute("qwe");
                that.setCookie();
            // }
        })
    }
    setCookie(){
        this.goods = getCookie("goods2") ? JSON.parse(getCookie("goods2")) : [];
        if(this.goods.length == 0){
            this.goods.push({
                id:this.id,
                num:1
            })
        }else{
            var i = 0;
            var onoff = this.goods.some((val,index)=>{
                i = index;
                return val.id == this.id;
            })
            if(onoff){
                this.goods[i].num++
            }else{
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }
        setCookie("goods",JSON.stringify(this.goods));
    }
    load(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            that.display();
            console.log(1)
        })
    }
    display(){
        var str = "";
        this.res.forEach((val)=>{
            str+=`<a href ="goods.html"> <div class="box" qwe="${val.goodsId}">
					<span>${val.name}</span>
					<em>${val.tip}</em>
					<p>￥${val.price}</p>
					<img src="${val.url}" alt=""/>
					<i>七夕大促</i>
				</div></a>`
        })
        this.cont.innerHTML = str;
    }
}

new List;

