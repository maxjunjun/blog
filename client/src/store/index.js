import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    blogs: [
      {
        id: 1,
        title: '这是一个标题',
        content: '之前服务器放在电信机房， 联通用户访问速度很不稳定，经常出现访问速度慢的问题，换到阿里云解决了之前的问题。很多人都问我的博客选得什么空间，一年的费用得多少钱，今天我列个表出来，供大家参考。',
        typeName: '前端',
        pageView: '100',
        comment: '20',
        createDate: '2016-12-02'
      }
    ]
  },

  mutations,

  actions
})

export default store
