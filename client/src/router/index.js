import Vue from 'vue'
import Router from 'vue-router'

const list = r => require.ensure([], () => r(require('../page/list/list')), 'list')

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    }
  ],
  strict: process.env.NODE_ENV !== 'production'
})
