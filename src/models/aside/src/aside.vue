<template>
  <aside>
    <div class="avatar"><a href="about.html"><span>关于杨青</span></a></div>
    <div class="topspaceinfo">
      <h1>执子之手，与子偕老</h1>
      <p>于千万人之中，我遇见了我所遇见的人..</p>
    </div>
    <div class="about_c">
      <p>网名：DanceSmile | 即步非烟</p>
      <p>职业：Web前端设计师、网页设计 </p>
      <p>籍贯：四川省—成都市</p>
      <p>电话：13662012345</p>
      <p>邮箱：dancesmiling@qq.com</p>
    </div>
    <div class="bdsharebuttonbox">
      <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
      <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
      <a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
      <a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
      <a href="#" class="bds_weixin"data-cmd="weixin"title="分享到微信"></a>
      <a href="#" class="bds_more" data-cmd="more"></a>
    </div>
    <div class="tj_news">
      <h2>
        <p class="tj_t1">最新文章</p>
      </h2>
      <ul>
        <li><a href="/">犯错了怎么办？</a></li>
        <li><a href="/">两只蜗牛艰难又浪漫的一吻</a></li>
        <li><a href="/">春暖花开-走走停停-发现美</a></li>
        <li><a href="/">琰智国际-Nativ for Life官方网站</a></li>
        <li><a href="/">个人博客模板（2014草根寻梦）</a></li>
        <li><a href="/">简单手工纸玫瑰</a></li>
        <li><a href="/">响应式个人博客模板（蓝色清新）</a></li>
        <li><a href="/">蓝色政府（卫生计划生育局）网站</a></li>
      </ul>
      <h2>
        <p class="tj_t2">推荐文章</p>
      </h2>
      <ul>
        <li><a href="/">犯错了怎么办？</a></li>
        <li><a href="/">两只蜗牛艰难又浪漫的一吻</a></li>
        <li><a href="/">春暖花开-走走停停-发现美</a></li>
        <li><a href="/">琰智国际-Nativ for Life官方网站</a></li>
        <li><a href="/">个人博客模板（2014草根寻梦）</a></li>
        <li><a href="/">简单手工纸玫瑰</a></li>
        <li><a href="/">响应式个人博客模板（蓝色清新）</a></li>
        <li><a href="/">蓝色政府（卫生计划生育局）网站</a></li>
      </ul>
    </div>
    <div class="links">
      <h2>
        <p>友情链接</p>
      </h2>
      <ul>
        <li><a href="/">杨青个人博客</a></li>
        <li><a href="/">3DST技术社区</a></li>
      </ul>
    </div>
    <div class="copyright">
      <ul>
        <p> Design by <a href="/">DanceSmile</a></p>
        <p>蜀ICP备11002373号-1</p>
        </p>
      </ul>
    </div>
  </aside>
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
  .avatar {
    margin: 10px auto;
    width: 160px;
    height: 160px;
    border-radius: 100%;
    overflow: hidden;
  }

  .avatar a {
    display: block;
    padding-top: 100px;
    width: 160px;
    background: url(../../../assets/images/photos.jpg) no-repeat;
    background-size: 160px 160px;
  }

  .avatar a span {
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

  .avatar a:hover span {
    display: block;
    margin-top: 0;
  }

  .topspaceinfo {
    background: #e41635;
    padding: 40px 20px;
    color: #fff;
    text-shadow: 1px 1px rgba(0, 0, 0, .3);
  }

  .topspaceinfo h1 {
    font-size: 16px;
    line-height: 40px;
    font-weight: bold;
  }

  .about_c {
    margin: 10px 0;
    color: #fff;
    line-height: 26px;
  }

  .about_c p:first-child, .about_c p:nth-child(2), .about_c p:nth-child(3), .about_c p:nth-child(4), .about_c p:last-child {
    background: url(../../../assets/images/about_c.png) no-repeat;
  }

  .about_c p:first-child {
    background-position: 15px 6px;
  }

  .about_c p:nth-child(2) {
    background-position: 15px -20px
  }

  .about_c p:nth-child(3) {
    background-position: 15px -48px
  }

  .about_c p:nth-child(4) {
    background-position: 15px -70px
  }

  .about_c p:last-child {
    background-position: 15px -97px
  }

  .about_c p {
    display: block;
    padding-left: 40px;
  }

  .about_c p:hover {
    background: #222
  }

  .bdsharebuttonbox {
    margin: 20px;
    clear: both;
  }

  /* 百度分享 */
  /* 右侧推荐信息列表 */
  .tj_news h2, .links h2 {
    font-size: 16px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    color: #FFF;
  }

  .tj_news h2 p, .links h2 p {
    height: 40px;
    line-height: 40px;
    width: 100px;
    padding: 0 0 0 30px;
    border-radius: 0 20px 20px 0;
    text-shadow: rgba(0, 0, 0, .65) 1px 1px;
  }

  .tj_t1 {
    background: #0f9c7c
  }

  .tj_t2 {
    background: #b0e516
  }

  .tj_news ul {
    margin: 20px 0 20px 20px
  }

  .tj_news ul li a:hover, .links ul li a:hover {
    text-decoration: underline;
    color: #FFF
  }

  .tj_news ul li {
    height: 25px;
    line-height: 25px;
    clear: both;
    padding-left: 5px;
    overflow: hidden;
    padding-left: 15px;
    background: url(../../../assets/images/li.jpg) no-repeat left center;
  }

  .tj_news ul li a, .links ul li a {
    color: #bbbbbb;
  }

  /* 友情链接 */
  .links h2 p {
    background: #222
  }

  .links ul {
    margin: 20px 0
  }

  .links ul li {
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-bottom: #333 1px dashed;
    margin: 0 40px;
  }

  /* 版权信息 */
  .copyright { background: #0d0d0d; border-radius: 50%; text-align: center; color: #d8d8d8; padding: 20px; margin: 60px 20px 0 20px; border: #1b1a1a 1px solid; }
  .copyright p { line-height: 26px; text-shadow: #000 1px 1px 1px }
  .copyright p a { color: #d8d8d8; }
</style>

