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
      return {
        blogs: [
          {
            id: 1,
            title: '这是一个标题',
            content: '之前服务器放在电信机房， 联通用户访问速度很不稳定，经常出现访问速度慢的问题，换到阿里云解决了之前的问题。很多人都问我的博客选得什么空间，一年的费用得多少钱，今天我列个表出来，供大家参考。',
            typeName: '前端',
            pageView: '100',
            comment: '20',
            createDate: '2016-12-02'
          },
          {
            id: 2,
            title: '这是一个标题',
            content: '之前服务器放在电信机房， 联通用户访问速度很不稳定，经常出现访问速度慢的问题，换到阿里云解决了之前的问题。很多人都问我的博客选得什么空间，一年的费用得多少钱，今天我列个表出来，供大家参考。',
            typeName: '前端',
            pageView: '100',
            comment: '20',
            createDate: '2016-12-02'
          }
        ]
      }
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

