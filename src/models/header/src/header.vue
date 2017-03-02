<template>
  <header class="header">
    <h1>如影随形</h1>
    <h2>影子是一个会撒谎的精灵，它在虚空中流浪和等待被发现之间;在存在与不存在之间..</h2>
    <div class="header-logo"><a href="/"></a></div>
    <nav class="header-nav">
      <a href="index.html" class="header-nav-current">首页</a>
      <a href="about.html">关于我</a><a href="newlist.html">慢生活</a><a href="share.html">模板分享</a>
      <a href="new.html">模板主题</a>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss">
  /* 头部信息 */
  .header {
    position: relative;
    background: url(../../../assets/images/ibodybg.png) top right no-repeat;

    h1 {
      padding: 15px 0 0 80px;
      font-size: 22px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    }

    h2 {
      margin: 20px 80px;
      color: #8e8d8d
    }

    /* logo */
    &-logo {
      width: 145px;
      height: 145px;
      position: absolute;
      left: -72px;
      top: 40px;
      border-radius: 50%;
      box-shadow: 0px 2px 2px #414141;
      background: url(../../../assets/images/logo.png) no-repeat #000 center;

      &:hover {
        background: url(../../../assets/images/home.png) no-repeat #000 center;
      }

      a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    /* 导航 */
    &-nav {
      height: 48px;
      line-height: 48px;
      padding-left: 80px;
      background: rgba(0, 0, 0, 0.8);
      /*filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr=#3333333, endColorstr=#3333333);*/

      a {
        display: inline-block;
        font: {
          size: 18px;
          family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        };
        padding: 0 20px;
        color: #FFF;
        -webkit-transition: all 1s;
        -moz-transition: all 1s;
        -o-transition: all 1s;
        transition: all 1s;

        &:hover {
          background: #e41635;
        }
      }

      &-current {
        background: #e41635
      }
    }
  }

  /* 高亮选中颜色 */
</style>

