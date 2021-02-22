/**
 * 路由分为两大类：
 * 1.同步路由：所有人员都有权限
 * 2.异步路由：需要根据服务端返回的路由数据展示对应的菜单
 */

import { constantRoutes } from './../../router/index'

const state = {
  routes: constantRoutes, // 路由列表
  addRoutes: [], // 添加的动态路由
}

const mutations = {
  TEST: () => {
    console.log(constantRoutes)
  }
}

const actions = {
  test() {
    console.log(constantRoutes)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}