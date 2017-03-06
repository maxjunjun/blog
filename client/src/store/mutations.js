/**
 * Created by majun on 2017/3/5.
 */

import {
  BLOG_LIST
} from './mutation-types.js'

const mutations = {
  // 查询博客列表
  [BLOG_LIST] (state, blogs) {
    state.blogs = blogs
  }
}
export default mutations
