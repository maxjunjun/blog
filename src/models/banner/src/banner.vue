<template>
  <div class="banner">
    <ul class="banner-texts">
      <slot>
        <p>只有在没有要分发的内容时才会显示。</p>
      </slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'FlyBanner'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .banner {
    height: 290px;
    width: 100%;
    margin: 10px auto;
    font-size: 16px;
    background: url(../../../assets/images/banner.jpg) no-repeat center;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }

  .banner-texts {
    line-height: 36px;
    padding: 90px 0 0 40px;
    text-shadow: 1px 1px rgba(255, 255, 255, 0.3);
  }

  .banner-texts p {
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
    -webkit-transform: translate(60px);
    -moz-transform: translate(60px);
    -o-transform: translate(60px);
    -ms-transform: translate(60px);
    transform: translate(60px);
  }

  .banner-texts p:hover {
    padding-left: 20px
  }

  .banner-texts p:nth-child(1) {
    -webkit-animation: animations 3s ease-out 1s backwards;
    -moz-animation: animations 3s ease-out 1s backwards;
    -o-animation: animations 3s ease-out 1s backwards;
    -ms-animation: animations 3s ease-out 1s backwards;
    animation: animations 3s ease-out 1s backwards;
  }

  .banner-texts p:nth-child(2) {
    -webkit-animation: animations 3s ease-out 4s backwards;
    -moz-animation: animations 3s ease-out 4s backwards;
    -o-animation: animations 3s ease-out 4s backwards;
    -ms-animation: animations 3s ease-out 4s backwards;
    animation: animations 3s ease-out 4s backwards;
  }

  @-webkit-keyframes animations {
    0% {
      -webkit-transform: translate(0);
      opacity: 0;
    }
    50% {
      -webkit-transform: translate(30px);
      opacity: .5;
    }
    100% {
      -webkit-transform: translate(60px);
      opacity: 1;
    }
  }

  @-moz-keyframes animations {
    0% {
      -moz-transform: translate(0);
      opacity: 0;
    }
    50% {
      -moz-transform: translate(30px);
      opacity: .5;
    }
    100% {
      -moz-transform: translate(60px);
      opacity: 1;
    }
  }

  @-o-keyframes animations {
    0% {
      -o-transform: translate(0);
      opacity: 0;
    }
    50% {
      -o-transform: translate(30px);
      opacity: .5;
    }
    100% {
      -o-transform: translate(60px);
      opacity: 1;
    }
  }

  @-ms-keyframes animations {
    0% {
      -ms-transform: translate(0);
      opacity: 0;
    }
    50% {
      -ms-transform: translate(30px);
      opacity: .5;
    }
    100% {
      -ms-transform: translate(60px);
      opacity: 1;
    }
  }

  @keyframes animations {
    0% {
      transform: translate(0);
      opacity: 0;
    }
    50% {
      transform: translate(30px);
      opacity: .5;
    }
    100% {
      transform: translate(60px);
      opacity: 1;
    }
  }
</style>
