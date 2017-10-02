<template>
    <div class="home">
        <!-- 顶部导航 -->
        <div class="header">
            <div class="headBox">
            <img class="scan" src="/static/img/logo11.png" alt="">
            <div class="nav">
                <img src="/static/img/sousuo.png" alt="" class="sousuo">
                <input type="text" placeholder="搜索药品、症状、品牌"></input>
                <img src="/static/img/saoyisao.png" alt="" class="select">
            </div>
            <img class="search" src="/static/img/xiaoxi.png" alt="">
            </div>
        </div>
        <!-- 轮播图部分 -->
        <div class="banner">
            <ul class="bar">
            <li><a href="###"><img src="/static/img/bar1.jpg" alt=""></a></li>
            <li><a href="###"><img src="/static/img/bar2.jpg" alt=""></a></li>
            <li><a href="###"><img src="/static/img/bar3.jpg" alt=""></a></li>
            <li><a href="###"><img src="/static/img/bar4.jpg" alt=""></a></li>
            <li><a href="###"><img src="/static/img/bar5.jpg" alt=""></a></li>
            <li><a href="###"><img src="/static/img/bar6.jpg" alt=""></a></li>
            </ul>
            <div class="bar_span">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>       
        <!-- 内容部分 -->
        <div class="content">
            <!-- 咨询广告 -->
            <div class="consult">
                <div class="contop">
                    <a href="###"><img src="/static/img/toutiao.jpg" alt=""></a>
                    <a href="###"><img src="/static/img/yaoshi.jpg" alt=""></a>
                    <a href="###"><img src="/static/img/zhongyi.jpg" alt=""></a>
                    <a href="###"><img src="/static/img/hushi.jpg" alt=""></a>
                    <a href="###"><img src="/static/img/jingxuan.jpg" alt=""></a>
                </div>
                <div class="conbtm">
                    <a href="###"><img src="/static/img/adver.jpg" alt=""></a>
                </div>
            </div>
            <!-- 叮当快报 -->
            <div class="bulletin">
                <img src="/static/img/kuaibao.jpg" alt="">
                <span>附近药店24小时快速配送服务。</span>
            </div>
            <!-- 配送地址 -->
            <div class="addr">
                <div class="addr-info">
                    <img src="/static/img/addr.png" alt="" class="addr-img">
                    <p class="addr-p">送至:<span class="addr-text">黄平路</span>
                    </p>
                    <img src="/static/img/jiantou.png" alt="" class="addr-jiantou">
                </div>
                <p class="addr-info-p">
                <img src="/static/img/ddky.jpg" alt="">
                <span>急送,满28免运费,可预约</span>
                </p>
            </div>
            <!-- 销售广告 -->
            <div class="sale">
                <a href="###"><img src="/static/img/cobtm.png" alt=""></a>
                <a href="###"><img src="/static/img/conbtm2.png" alt=""></a>
            </div>
            <!-- 医护类别 -->
            <div class="drugList">
                <div class="drugType" v-for="item in categoryList" :key="item.categoryId">
                <img :src="item.categoryIcon" alt=""> <p>{{ item.categoryName }}</p>
                </div>
            </div>
            <!-- 附近药店 -->
            <div class="fjyd">
                <img src="/static/img/fujin.jpg" alt="">
                <span>核心区域28分钟免费送到,可预约下单</span>
            </div>
            <!-- 商品列表 -->
            <div class="goodsList">
                <div class="choose">
                    <div class="chooseBox">
                    <p><a href="#xianshi">限时特惠</a></p>
                    <p><a href="#man">男性健康</a></p>
                    <p><a href="#wuman">女性健康</a></p>
                    <p><a href="#meiyan">美颜塑身</a></p>
                    <p><a href="#ertong">儿童健康</a></p>
                    <p><a href="#biyun">避孕验孕</a></p>
                    <p><a href="#drug">慢病用药</a></p>
                    <p><a href="#pifu">皮肤用药</a></p>
                    <p><a href="#home">家庭常备</a></p>
                    <p><a href="#wuguan">五官用药</a></p>
                    <p><a href="#yingyang">营养保健</a></p>  
                    </div>    
                </div>
                <!-- 限时特惠 -->
                <div id="xianshi" class="infoVosName" v-for="item in productList" :key="item.name">
                    <div class="special_choose" ><img src="https://img.ddky.com/c/wap/images/ddky2/choose.jpg" alt=""> <p>{{item.name}}</p></div>
                    <div class="spedrug" v-for="pro in item.infoVos" :key="pro.goodsId">
                        <img :src="pro.adImgUrl" alt="">
                        <div class="top">
                            <p class="one">{{ pro.adText }}</p> <p class="two">{{ pro.name }}</p> 
                            <p class="specification">{{ pro.packageSpecifications }}</p> 
                            <p class="three">{{ pro.discontPrice}}</p> 
                            <div class="down">
                            <span class="spec">{{ pro.totalPrice }}</span> <span class="spec1 addLine">{{ pro.orgPrice }}</span> 
                            <p class="spec1">{{ pro.saleVolumeText}}</p>
                            </div> 
                            <img id="showcart" src="https://img.ddky.com/c/wap/images/ddky2/car.png" alt="" @click.stop="add_goods()">
                        </div>
                    </div>
                    <!-- <div class="spedrug">
                        <img v-lazy='"/static/img/xianshi1.png"' alt="">
                        <div class="top">
                            <p class="one">口腔问题的克星！</p> <p class="two">华素愈创牙膏(优效+修复 3+)+华素愈创漱口水(优效修复专用 海洋薄荷香型)赠华素愈创儿童成长牙膏</p> 
                            <p class="specification">120g(牙膏)+260ml(漱口水)+45g(儿童牙膏)</p> 
                            <p class="three"> 立省66.00元</p> 
                            <div class="down">
                            <span class="spec">¥78.00</span> <span class="spec1 addLine">¥144.00</span> 
                            <p class="spec1">已卖出132件</p>
                            </div> 
                            <img id="showcart" src="https://img.ddky.com/c/wap/images/ddky2/car.png" alt="">
                        </div>
                    </div>
                </div>
                <!-- 男士健康 -->
                <!-- <div id="man">
                <div class="spedrug">
                    <img v-lazy='"http://img.ddsy.com/c/product/520062/ad/1483697619472-170106061339476.jpg?t=1000"' alt="">
                    <div class="top">
                        <p class="one">温阳补肾，调治阳痿、早泄、入睡大汗、多梦等问题。</p> <p class="two">肾阴亏组包</p> 
                        <p class="specification">360粒x6盒+0.7gx9片x14板</p> 
                        <p class="three">立省<span>111.00</span>元</p> 
                        <div class="down">
                        <span class="spec">¥<span>322.00</span></span> <span class="spec1 addLine">¥433.00</span> 
                        <p class="spec1">已卖出<span>1250</span>件</p>
                        </div> 
                        <img id="showcart" src="https://img.ddky.com/c/wap/images/ddky2/car.png" alt="">
                    </div>
                </div>
                <div class="spedrug">
                    <img v-lazy='"http://img.ddsy.com/c/product/520062/ad/1483697619472-170106061339476.jpg?t=1000"' alt="">
                    <div class="top">
                        <p class="one">温阳补肾，调治阳痿、早泄、入睡大汗、多梦等问题。</p> <p class="two">肾阴亏组包</p> 
                        <p class="specification">360粒x6盒+0.7gx9片x14板</p> 
                        <p class="three">立省<span>111.00</span>元</p> 
                        <div class="down">
                        <span class="spec">¥<span>322.00</span></span> <span class="spec1 addLine">¥433.00</span> 
                        <p class="spec1">已卖出<span>1250</span>件</p>
                        </div> 
                        <img id="showcart" src="https://img.ddky.com/c/wap/images/ddky2/car.png" alt="">
                    </div>
                </div>-->
                </div> 
            </div>
        </div>
        <div class="light_box">
            <div class="confirm_box">
                <p>添加成功 ！</p>
                <div @click.stop="shut_light_box">确认</div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: "home",
    data () {
        return {
            logo:"/static/img/logo1.png",
            categoryList:[], 
            productList:[]
        }
    },
    methods:{
        color_change (){
            if (document.body.scrollTop > 142){
                // console.log(document.querySelector('.header'))
                document.querySelector('.header').style.cssText= "background:rgb(208,43,50)"
            }else{
                 document.querySelector('.header').style.cssText= "background:rgba(0,0,0,0)"
            }
        },
        add_goods(){
           
           document.querySelector(".confirm_box").style.display = 'block'
            
            document.querySelector(".light_box").style.display="block"
        },
        shut_light_box(){
            document.querySelector(".confirm_box").style.display = 'none'
            
            document.querySelector(".light_box").style.display = "none"
        },
        getCategoryList(){
            this.$http.jsonp("http://api.ddky.com/cms/rest.htm?sign=34554A7B78D6F5D338567A80E1EEDCA6&city=%E5%8C%97%E4%BA%AC%E5%B8%82&loginToken=bb1fb15d289993d364e5951a89486129&method=ddky.cms.h5.o2o.homepage.get&plat=H5&platform=H5&shopId=100012&t=2017-10-2%2010:49:4&uDate=46592120170926&userId=1009048835&v=1.0&versionName=4.6.0",{ credentials: true }).then(res=>{
                this.categoryList = res.data.data.categoryList
            })  
        },
         getProductList(){
            this.$http.jsonp("http://api.ddky.com/cms/rest.htm?sign=7A4297E3EB88DA7A33C16457A15A0745&city=%E5%8C%97%E4%BA%AC%E5%B8%82&loginToken=bb1fb15d289993d364e5951a89486129&method=ddky.cms.package.get&plat=H5&platform=H5&shopId=100012&t=2017-10-2%2011:6:3&uDate=46592120170926&userId=1009048835&v=1.0&versionName=4.6.0", { credentials: true }).then(res=>{
                console.log(res.body.result)
                this.productList = res.body.result
            })
         }
    },
    created(){
      this.$nextTick(function () {
        window.addEventListener('scroll', this.color_change)
      }),
      this.getCategoryList()
      this.getProductList()
    }
}
</script>


<style scoped lang="css">
     @import "/static/css/shouye.css";
     img[lazy=loading]{
         opacity: 0.5;
     }
     img[lazy=loaded]{
         opacity: 1;
     }
</style>
