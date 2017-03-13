<template>
  <div class="articles">
    <h2 class="articles-header">
      <p>最新文章</p>
    </h2>
    <ul class="articles-link">
      <li><a href="/">vue搭建工程</a></li>
      <li><a href="/">前端工程化</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'articles',
    props: [ 'data' ]
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  $headerColor: #0f9c7c;

  .articles {
    &-header {
      font: {
        size: 16px;
        family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        background: $headerColor;
      }
      color: #FFF;

      p {
        height: 40px;
        width: 100px;
        line-height: 40px;
        padding: 0 0 0 30px;
        border-radius: 0 20px 20px 0;
        text-shadow: rgba(0, 0, 0, .65) 1px 1px;
        background: $headerColor
      }
    }

    &-link {
      margin: 20px 0 20px 20px;

      li {
        height: 25px;
        line-height: 25px;
        padding-left: 15px;
        overflow: hidden;
        clear: both;
        background: url(../../../assets/images/li.jpg) no-repeat left center;

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

