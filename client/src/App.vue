<template>
  <div class="ibody">
    <BHeader/>
    <router-view></router-view>
    <BAside/>
    <div class="clear"></div>
  </div>
</template>

<script>
  import Header from '@M/header'
  import Aside from '@M/aside'
  export default {
    name: 'app',
    components: {
      BHeader: Header,
      BAside: Aside
    }
  }
</script>

<style>
  /* 共用css */
  * {
    margin: 0;
    padding: 0
  }

  body {
    font: 12px "宋体", Arial, Helvetica, sans-serif;
    background: #f5f5f5
  }

  img {
    border: 0;
    display: block
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: normal;
  }

  a {
    outline: none;
  }

  a:link, a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  .clear {
    clear: both;
  }

  .blank {
    height: 5px;
    overflow: hidden;
    width: 100%;
    margin: auto;
    clear: both
  }

  .ibody {
    background: url(./assets/images/bg.png) repeat-y;
    width: 1000px;
    margin: auto;
    box-shadow: -2px -1px 5px #666;
  }

  article {
    width: 73%;
    float: left;
    background: url(./assets/images/ibodybg.png) 560px -147px no-repeat;
  }

  /* 左侧栏 */
  aside {
    width: 27%;
    background: url(./assets/images/ibodybg.png) -170px -147px no-repeat #000;
    float: right;
  }

  /* 右侧栏 */

  @media screen and (max-width: 823px) {
    .ibody  {
      background: url(./assets/images/ms8.png) top right no-repeat #FFF;
      width: 90%;
      margin: auto;
      box-shadow: 0px 2px 5px #666;
    }

    article {
      float: none;
      width: 100%
    }

    article {
      background: #fff
    }

    header {
      background: url(./assets/images/ms8.png) top right no-repeat #FFF;
    }

    aside, .dateview {
      display: none
    }

    nav {
      padding-left: 0;
      text-align: center
    }

    nav a {
      padding: 0 5px;
    }

    .banner {
      background-size: auto;
      height: 130px;
      font-size: 12px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    }

    .texts {
      line-height: 36px;
      padding: 20px 0 0 10px;
      text-shadow: 1px 1px rgba(255, 255, 255, 0.3);
    }

    .blogs::after {
      background: none
    }

    .autor span {
      margin: 0 5px;
    }

    .blogs figure {
      width: 35%;
    }

    .blogs ul {
      width: 62%;
    }
  }

  @media screen and (max-width: 598px) {
    .ibody {
      background: url(./assets/images/ms8.png) top right no-repeat #FFF;
      width: 90%;
      margin: auto;
      box-shadow: 0px 2px 5px #666;
    }

    article {
      float: none;
      width: 100%
    }

    article {
      background: #fff
    }

    header {
      background: url(./assets/images/ms8.png) top right no-repeat #FFF;
    }

    aside, header h1, header h2, .dateview {
      display: none
    }

    nav {
      height: auto;
      line-height: 40px;
      text-align: center;
      background: #FFF;
      padding-left: 0px
    }

    nav a {
      display: block;
      background: #323232;
      clear: both;
      margin-bottom: 2px
    }

    .logo {
      position: static;
      margin: 0 auto 10px
    }

    .banner {
      background-size: auto;
      height: 130px;
      font-size: 12px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    }

    .texts {
      line-height: 36px;
      padding: 20px 0 0 10px;
      text-shadow: 1px 1px rgba(255, 255, 255, 0.3);
    }

    .blogs::after {
      background: none
    }

    .autor span {
      margin: 0 5px;
    }

    .blogs figure {
      width: 35%;
    }

    .blogs ul {
      width: 62%;
    }
  }

  @media screen and (max-width: 480px) {
    .ibody {
      width: 90%;
      margin: auto;
      box-shadow: 0px 2px 5px #666;
    }

    article {
      float: none;
      width: 100%
    }

    article {
      background: #fff
    }

    header {
      background: url(./assets/images/ms8.png) top right no-repeat #FFF;
    }

    aside, header h1, header h2, .dateview, .banner, .bloglist h2, .blogs figure img, .newblog figure img, .newblog .autor {
      display: none
    }

    nav {
      height: auto;
      line-height: 40px;
      text-align: center;
      background: #FFF;
      padding-left: 0px
    }

    nav a {
      display: block;
      background: #323232;
      clear: both;
      margin-bottom: 2px
    }

    .logo {
      position: static;
      margin: 0 auto 10px
    }

    .texts {
      line-height: 36px;
      padding: 20px 0 0 10px;
      text-shadow: 1px 1px rgba(255, 255, 255, 0.3);
    }

    .blogs::after, .newblog::after {
      background: none
    }

    .autor span {
      margin: 0;
    }

    .blogs figure {
      width: 100%;
      float: none;
    }

    .blogs ul, .newblog ul {
      width: 100%;
      float: none;
    }

    .blogs {
      margin: 0 10px 10px 10px;
    }
  }

</style>
