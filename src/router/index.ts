import { createRouter, createWebHashHistory } from 'vue-router'
const layout = () => import('@/layout/index.vue')
// 在 Vue-router新版本中，需要使用createRouter来创建路由


/**
 * 同步路由
 */
const constantRoutes = [
  {
    path: '/',
    redirect: '/index',
    component: layout,
    meta: {
      title: '首页',
      icon: 'icon-home'
    },
    children: [
      {
        path: 'index',
        component: () => import('./../views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'icon-home'
        }
      }
    ]
  },
  {
    path: '/table',
    redirect: '/table/index',
    component: layout,
    meta: {
      title: '表格',
      icon: 'icon-home',
    },
    children: [
      {
        path: 'index',
        component: () => import('./../views/table/index.vue'),
        meta: {
          title: '表格',
          icon: 'icon-home'
        }
      }
    ]
  }
]

export {
  constantRoutes
}

export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // history: createWebHistory(),
  // 路由地址
  routes: constantRoutes
})