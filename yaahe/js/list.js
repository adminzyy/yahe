class List{
    constructor(){
        this.cont = document.querySelector(".cont");
        this.url = "http://localhost/yaahe/data/goods.json";

        this.load();
        // 1.绑定事件
        this.addEvent();
    }
    addEvent(){
        var that = this;
        // 利用事件委托找到按钮
        this.cont.addEventListener("click",function(eve){
            if(eve.target.className == "btn"){
                // 存cookie，存什么？2.唯一的信息，商品的货号
                that.id = eve.target.parentNode.getAttribute("qwe");
                // 3.存cookie了
                that.setCookie();
            }
        })
    }
    setCookie(){
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
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
                // 老商品:
                // 修改对应对象的num属性
                this.goods[i].num++
            }else{
                // 新商品:
                // 增加对象
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }
        // 再设置
        setCookie("goods",JSON.stringify(this.goods));
    }
    load(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            that.display();
        })
    }
    display(){
        var str = "";
        this.res.forEach((val)=>{
            str += `<div class="box" qwe="${val.goodsId}">
                        <img src="${val.url}" alt="">
                        <span>${val.name}</span>
                        <p>${val.price}</p>
                        <em>${val.tip}</em>
                        <i class="btn">加入购物车</i>
                    </div>`
        })
        this.cont.innerHTML = str;
    }
}

new List;

