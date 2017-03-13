<template>
  <div class="friend">
    <h2>
      <p>友情链接</p>
    </h2>
    <ul class="friend-link">
      <li><a href="/">XXXX个人博客</a></li>
      <li><a href="/">3DST技术社区</a></li>
    </ul>
  </div>
  </aside>
</template>

<script>
  export default {
    name: 'friendLink'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss">

  /* 右侧推荐信息列表 */
  .friend {
    h2 {
      font-size: 16px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      color: #FFF;

      P {
        height: 40px;
        line-height: 40px;
        width: 100px;
        padding: 0 0 0 30px;
        border-radius: 0 20px 20px 0;
        text-shadow: rgba(0, 0, 0, .65) 1px 1px;
        background: #222;
      }
    }

    &-link {
      margin: 20px 0;

      li {
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-bottom: #333 1px dashed;
        margin: 0 40px;

        a {
          color: #bbbbbb;

          &:hover {
            text-decoration: underline;
            color: #FFF
          }
        }
      }
    }
  }
</style>

