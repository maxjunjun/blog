<template>
  <div>
    <div class="resume-avatar"><a href="about.html"><span>关于杨青</span></a></div>
    <div class="resume-top">
      <h1>执子之手，与子偕老</h1>
      <p>于千万人之中，我遇见了我所遇见的人..</p>
    </div>
    <div class="resume-info">
      <p>网名：DanceSmile | 即步非烟</p>
      <p>职业：Web前端设计师、网页设计 </p>
      <p>籍贯：四川省—成都市</p>
      <p>电话：13662012345</p>
      <p>邮箱：dancesmiling@qq.com</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'aside',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /* 右侧栏个人档案 */
  .resume-avatar {
    margin: 10px auto;
    width: 160px;
    height: 160px;
    border-radius: 100%;
    overflow: hidden;
  }

  .resume-avatar a {
    display: block;
    padding-top: 100px;
    width: 160px;
    background: url(../../../assets/images/photos.jpg) no-repeat;
    background-size: 160px 160px;
  }

  .resume-avatar a span {
    display: block;
    margin-top: 63px;
    padding-top: 8px;
    width: 160px;
    height: 55px;
    text-align: center;
    line-height: 20px;
    color: #fff;
    background: rgba(0, 0, 0, .5);
    -webkit-transition: margin-top .2s ease-in-out;
    -moz-transition: margin-top .2s ease-in-out;
    -o-transition: margin-top .2s ease-in-out;
    transition: margin-top .2s ease-in-out;
  }

  .resume-avatar a:hover span {
    display: block;
    margin-top: 0;
  }

  .resume-top {
    background: #e41635;
    padding: 40px 20px;
    color: #fff;
    text-shadow: 1px 1px rgba(0, 0, 0, .3);
  }

  .resume-top h1 {
    font-size: 16px;
    line-height: 40px;
    font-weight: bold;
  }

  .resume-info {
    margin: 10px 0;
    color: #fff;
    line-height: 26px;
  }

  .resume-info p:first-child, .about_c p:nth-child(2), .about_c p:nth-child(3), .about_c p:nth-child(4), .about_c p:last-child {
    background: url(../../../assets/images/about_c.png) no-repeat;
  }

  .resume-info p:first-child {
    background-position: 15px 6px;
  }

  .resume-info p:nth-child(2) {
    background-position: 15px -20px
  }

  .resume-info p:nth-child(3) {
    background-position: 15px -48px
  }

  .resume-info p:nth-child(4) {
    background-position: 15px -70px
  }

  .resume-info p:last-child {
    background-position: 15px -97px
  }

  .resume-info p {
    display: block;
    padding-left: 40px;
  }

  .resume-info p:hover {
    background: #222
  }
</style>

