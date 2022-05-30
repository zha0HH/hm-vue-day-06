// router/index.js就是关于路由的配置文件,
// 这样拆分有利于后期维护方便
import Vue from 'vue'
import Find from '../views/Find.vue'
import My from '../views/My.vue'
import Friend from '../views/Friend.vue'
// vue-router的使用步骤
// 1. 安装 yarn add vue-router 
// 2. 导入vue-router路由
import VueRouter from 'vue-router'
// 3. 注册路由 会得到两个组件 router-link router-view
Vue.use(VueRouter)
// 4. 创建路由对象
const router = new VueRouter({
  // 5.核心步骤1 配置路由规则
  routes: [
    // 前端路由是路径地址和组件的对应关系
    // path是路由地址  component是对应路由地址展示的组件
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component:  Friend}
  ],
  // linkActiveClass 对模糊匹配的类名自定义
  linkActiveClass: 'active',
  // linkExactActiveClass 对精确匹配的类型自定义
  linkExactActiveClass: 'exact-active'
})

export default router