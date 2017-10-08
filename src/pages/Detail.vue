<template>
  <div>
    <div class="detahead">
        <div class="headBox">
          <p class="scan">
            <img  src="/static/img/fanhui.png" alt="">
            <span>返回</span>
          </p>
          
          <div class="nav">
            <div class="nav_a">
                <a href="###" class="select">商品</a>
                <a href="###">详情</a>
                <a href="###">评价</a>
            </div>
          </div>
          <img class="search" src="/static/img/sousuo.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
        id:0
      }
    },
    methods: {
      getSkuId(){
        this.id = this.$route.query.skuId

      }
    },
    created(){
      console.log(this.$route.query.skuId)
      console.log(this.$route.query.id)
      console.log(this.$route.query.shopId)
      // this.getSkuId()
    }
}
</script>
<style scoped lang="css">
    @import "/static/css/details.css";
</style>

