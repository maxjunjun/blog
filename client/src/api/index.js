/**
 * Created by majun on 2017/3/5.
 */
import Vue from 'vue'

export const fetchBlogList = () => {
  return Vue.http.get('/api/posts')
}
