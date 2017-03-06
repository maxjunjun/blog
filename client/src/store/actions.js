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
  const blogs = fetchBlogList()
  commit(BLOG_LIST, blogs)
}
