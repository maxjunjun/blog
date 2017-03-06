<template>
  <article>

    <Banner>
      <p>The best life is use of willing attitude, a happy-go-lucky life. </p>
      <p>最好的生活是用心甘情愿的态度，过随遇而安的生活。</p>
    </Banner>

    <div class="blog-list">
      <h2>
        <p><span>推荐</span>文章</p>
      </h2>
      <Blog v-for="(item, index) in blogs" :data="item" key="item.id"/>
    </div>

  </article>
</template>

<script>
  import Banner from '@M/banner'
  import Blog from './models/blog.vue'

  export default {
    name: 'list',
    components: {
      Banner,
      Blog
    },

    data () {
      return {}
    },
    computed: {
      blogs () {
        return this.$store.state.blogs
      }
    },

    created () {
      this.$store.dispatch('getBlogList')
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  /* 左侧栏文章列表 */
  .blog-list {
    h2 {
      height: 26px;
      overflow: hidden;
      margin: 0 8px 20px 8px;
      line-height: 28px;
      border-bottom: #474645 2px solid;
      font-size: 16px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      letter-spacing: 2px;

      p {
        width: 180px;
        background: #474645;
        color: #fff;
        box-shadow: #999 4px 5px 1px;
        text-align: center;

        span {
          color: #38b3d4;
        }
      }
    }
  }


</style>

