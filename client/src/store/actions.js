/**
 * Created by majun on 2017/3/5.
 */
import {
  BLOG_LIST
} from './mutation-types.js'

import {
  fetchBlogList
} from '../api'

export const getBlogList = ({ commit }) => {
  fetchBlogList().then(function (res) {
    console.log(res)
    commit(BLOG_LIST, res.data)
  }).catch(function (err) {
    console.log(err)
  })
}
