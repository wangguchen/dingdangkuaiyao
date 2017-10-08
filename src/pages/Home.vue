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
            <swiper :options="swiperOption">
                <swiper-slide v-for="slide in swiperSlides" :key="slide.id" class="hiahang">
                    <a :href="slide.toUrl"><img :src="slide.imageUrl" alt=""></a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>  
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
            <!-- 药品分类 -->
            <div class="drugList">
                <div class="drugType" v-for="item in categoryList" :key="item.categoryId" @click="gotoCategory(item.categoryName)">
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
                        <img :src="pro.adImgUrl" alt="" @click="gotoDetails(pro.id, pro.shopId, pro.skuId)">
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
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')

export default {
    name: "home",
    data () {
        return {
            logo:"/static/img/logo1.png",
            categoryList:[], 
            productList:[],
            swiperOption: {
                autoplay: 1000,
                setWrapperSize :true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                mousewheelControl : true,
                observeParents:true,
                autoplayDisableOnInteraction:false,
            },
            swiperSlides: []
        }
    },
    methods:{
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
                console.log(this.categoryList)
            })  
        },
         getProductList(){
            this.$http.jsonp("http://api.ddky.com/cms/rest.htm?sign=7A4297E3EB88DA7A33C16457A15A0745&city=%E5%8C%97%E4%BA%AC%E5%B8%82&loginToken=bb1fb15d289993d364e5951a89486129&method=ddky.cms.package.get&plat=H5&platform=H5&shopId=100012&t=2017-10-2%2011:6:3&uDate=46592120170926&userId=1009048835&v=1.0&versionName=4.6.0", { credentials: true }).then(res=>{
                // console.log(res)
                this.productList = res.body.result
            })
         },
         getSwiperList(){
            this.$http.jsonp("http://api.ddky.com/cms/rest.htm?sign=A0139C5ED13F40FA021B1A91E33C133D&cityName=%E5%90%95%E6%A2%81%E5%B8%82&loginToken=bb1fb15d289993d364e5951a89486129&method=com.ddky.wisphmall.load&plat=H5&platform=H5&shopId=-1&t=2017-10-2%2015:21:11&uDate=46592120170926&userId=1009048835&v=1.0&versionName=4.6.0",{ credentials: true }).then(res=>{
                this.swiperSlides = res.body.data.mallBannerModule.topUrls
            })
         },
         gotoDetails(id,shopId,skuId){
            this.$router.push({name:"Detail", query:{id:id,shopId:shopId,skuId:skuId}})
         },
         gotoCategory(categoryName){
              console.log(this)
              this.$router.push({name:"Cetegory", query:{categoryName:categoryName}})
         }
    },
    created(){
      this.$nextTick(function () {
        window.addEventListener('scroll', this.color_change)
      }),
      this.getCategoryList()
      this.getProductList()
      this.getSwiperList()
    },
    comments:{
        swiper,
        swiperSlide
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
    
    .swiper-slide{
        width: 100%;
        height:1.42re;
    }
    .swiper-container{
        width: 100%;
        height: 1.42rem;
    }
    .hiahang img{
        width: 100%;
        height:1.42rem;
    }
</style>
