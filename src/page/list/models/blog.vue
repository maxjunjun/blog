<template>
  <div class="blog">
    <h3 class="blog-title"><a href="/">{{ data.title }}</a></h3>
    <figure class="blog-img"><img src="../../../assets/images/01.jpg"></figure>
    <ul class="blog-content">
      <p>{{ data.content }}</p>
      <a href="/" target="_blank" class="blog-more">阅读全文&gt;&gt;</a>
    </ul>
    <p class="blog-info">
      <span>作者：杨青</span>
      <span>分类：【<a href="/">{{ data.typeName }}</a>】</span>
      <span>浏览（<a href="/">{{ data.pageView }}</a>）</span>
      <span>评论（<a href="/">{{ data.comment }}</a>）</span>
    </p>
    <div class="blog-date">{{ data.createDate }}</div>
  </div>
</template>

<script>
  export default {
    name: 'blog',
    props: [ 'data' ],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .blog {
    position: relative;
    margin: 0 20px 20px 20px;

    &::before {
      width: 10px;
      height: 10px;
      left: -27px;
      position: absolute;
      border: 2px solid #fff;
      border-radius: 50%;
      content: "";
      background: #cac1c1;
      -webkit-transition: all 1s;
      -moz-transition: all 1s;
      -o-transition: all 1s;
      transition: all 1s;
    }

    &::after {
      width: 121px;
      height: 29px;
      left: -148px;
      top: -9px;
      position: absolute;
      z-index: 0;
      content: "";
      background: url(../../../assets/images/ti.png) no-repeat;
      opacity: 0;
      -webkit-transition: all 1s;
      -moz-transition: all 1s;
      -o-transition: all 1s;
      transition: all 1s;
    }

    &:hover {
      &::before {
        background: #474645
      }

      &::after {
        opacity: 1
      }
    }

    &-title {
      margin-bottom: 15px;
      font: {
        size: 14px;
        weight: bold;
      }
      transition: all .5s;

      a {
        color: #474645;
      }

      &:hover {
        text-decoration: underline
      }
    }

    &-img {
      width: 25%;
      float: left;
      overflow: hidden;

      img {
        width: 100%;
        margin: auto;
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;

        &:hover {
          & {
            -moz-transform: scale(1.1);
            -webkit-transform: scale(1.1);
            -o-transform: scale(1.1);
            -ms-transform: scale(1.1);
          }
        }
      }
    }

    &-content {
      width: 72%;
      float: right;
      line-height: 20px;
      color: #474645;

      &:hover {
        cursor: pointer;
      }
    }

    &-info {
      display: inline-block;
      height: 26px;
      width: 100%;
      overflow: hidden;
      clear: both;
      margin: 10px 0 0 0;
      line-height: 26px;
      color: #838383;
      background: #f6f6f6;

      span {
        margin: 0 10px;

        a {
          color: #759b08;
        }
      }

      &:hover {
        &::before {
          background: #474645
        }
      }
    }

    &-more {
      float: right;
      padding: 5px 10px;
      margin: 20px 0 0 0;
      background: #e41635;
      color: #fff;
    }

    &-date {
      left: -130px;
      top: -1px;
      position: absolute;
      z-index: 1;
      color: #F5F5F5;
    }

  }


</style>

