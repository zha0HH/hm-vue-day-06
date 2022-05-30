// router/index.js就是关于路由的配置文件,
// 这样拆分有利于后期维护方便
import Vue from 'vue'
import Find from '../views/Find.vue'
import My from '../views/My.vue'
import Friend from '../views/Friend.vue'
import NotFound from '../views/NotFound.vue'
// 导入二级路由组件对象
import Recommend from '../views/Second/Recommend.vue'
import Rank from '../views/Second/Rank.vue'
import List from '../views/Second/List.vue'
// vue-router的使用步骤
// 1. 安装 yarn add vue-router 
// 2. 导入vue-router路由
import VueRouter from 'vue-router'
// 3. 注册路由 会得到两个组件 router-link router-view
Vue.use(VueRouter)
// 4. 创建路由对象
const router = new VueRouter({
  // mode可以修改路由模式, 设置了历史模式, 前端页面可以正常运行, webpack环境支持了历史模式,
  // 项目上线后,需要服务端支持历史模式(如果服务端不处理,页面会变白)
  // mode: 'history', // 历史模式
  // 5.核心步骤1 配置路由规则
  routes: [
    // 如果访问的是/根路径, 强制跳转到 /friend路径 redirect 值是路径地址, 不是组件对象
    { path: '/', redirect: '/friend' },
    { 
      path: '/find', 
      component: Find,
      // children节点是添加(嵌套路由)子路由规则的节点
      // 在子路由规则中 和 router-link to的的值一定要一致, 才能正确的跳转
      // 如果子路由规则不加/ 自动 拼接父路由规则的path
      children: [
        { path: 'recommend', component: Recommend },
        { path: '/find/rank', component: Rank },
        { path: '/find/list', component: List }
      ]
    },
    { path: '/my', component: My },
    { path: '/friend', component:  Friend, name: 'partner'},
    // 在最后面匹配404页面 如果前面的规则都没有匹配到,会命中最后一条规则
    { path: '*', component: NotFound }
  ],
  // linkActiveClass 对模糊匹配的类名自定义
  linkActiveClass: 'active',
  // linkExactActiveClass 对精确匹配的类型自定义
  linkExactActiveClass: 'exact-active'
})

export default router