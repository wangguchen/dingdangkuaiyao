import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'


const Home = () => import('@/pages/Home')
const Shop = () => import('@/pages/Shop')
const Cart = () => import('@/pages/Cart')
const Mine = () => import('@/pages/Mine')
const Detail = () => import('@/pages/Detail')



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
