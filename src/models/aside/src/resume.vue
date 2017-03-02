<template>
  <div class="resume">
    <div class="resume-avatar"><a href="about.html"><span>关于马军</span></a></div>
    <div class="resume-top">
      <h1>志在人为</h1>
      <p>我就是我，不一样的花火..</p>
    </div>
    <div class="resume-info">
      <p>网名：Max军军</p>
      <p>职业：java工程师 </p>
      <p>籍贯：辽宁省</p>
      <p>电话：13624082022</p>
      <p>邮箱：707135799@qq.com</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'resume'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss">

  .resume {
    &-avatar {
      width: 160px;
      height: 160px;
      margin: 10px auto;
      border-radius: 100%;
      overflow: hidden;

      a {
        display: block;
        width: 160px;
        padding-top: 100px;
        background-size: 160px 160px;
        background: url(../../../assets/images/photos.jpg) no-repeat;

        span {
          display: block;
          width: 160px;
          height: 55px;
          margin-top: 63px;
          padding-top: 8px;
          line-height: 20px;
          text-align: center;
          color: #fff;
          background: rgba(0, 0, 0, .5);
          -webkit-transition: margin-top .2s ease-in-out;
          -moz-transition: margin-top .2s ease-in-out;
          -o-transition: margin-top .2s ease-in-out;
          transition: margin-top .2s ease-in-out;
        }

        &:hover span {
          display: block;
          margin-top: 0;
        }
      }
    }

    &-top {
      padding: 40px 20px;
      background: #e41635;
      color: #fff;
      text-shadow: 1px 1px rgba(0, 0, 0, .3);

      h1 {
        font:{
          size: 16px;
          weight: bold;
        }
        line-height: 40px;
      }
    }

    &-info {
      margin: 10px 0;
      line-height: 26px;
      color: #fff;

      p {
        display: block;
        padding-left: 40px;
        background: url(../../../assets/images/about_c.png) no-repeat;

        &:hover {
          background: #222
        }

        &:first-child {
          background-position: 15px 6px;
        }

        &:nth-child(2) {
          background-position: 15px -20px
        }

        &:nth-child(3) {
          background-position: 15px -48px
        }

        &:nth-child(4) {
          background-position: 15px -70px
        }

        &:last-child {
          background-position: 15px -97px
        }
      }
    }
  }

</style>

