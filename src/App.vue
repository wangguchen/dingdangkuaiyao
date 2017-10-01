<template>
  <div id="app">
    <router-view></router-view>
    
     <!-- 底部导航栏部分 -->
        <div class="footer">
            <ul>
            <router-link tag="li" to="/home">
                <img src="/static/img/shouye.png" alt="" @click="zhiding">
            </router-link>
            <router-link tag="li" to="/shop">
                <img src="/static/img/koubei.png" alt="">
            </router-link>
            <router-link tag="li" to="/cart">
                <img src="/static/img/shop.png" alt="">
            </router-link>
            <router-link tag="li" to="/mine">
                <img src="/static/img/wode.png" alt="">
            </router-link>
            </ul>
        </div>
    
  </div>
</template>

<script>
  export default {
    name: 'app',
     methods:{
        zhiding:function(){
            document.documentElement.scrollTop = 0;
        },
    }
  }
</script>

<style scoped lang="css">
  /* 底部导航栏 */
.footer{
    width: 100%;
    height: .45rem;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #DADADA;
    background-color: #fff;
}
.footer ul{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
.footer ul li{
    width: 25%;
    height: 100%;
    float: left;
    font-size: 14px;
}
.footer ul li a{
    width: 100%;
    height: 100%;
    display: block;
    text-align: center;
    box-sizing: border-box;
    color:#F67B4B;
    font-size: 12px;
}
.footer ul li img{
    height: 100%;
    display: block;
    margin: 0 auto;
}
</style>
