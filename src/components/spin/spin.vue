<template>
  <div v-if="visible" class="spin-wrap">
    <div class="spin-box">
      <div :class="[spin, size]"></div>
      <!--<div class="spin-text">-->
        <!--<p>正在加载。。。</p>-->
        <!--<slot></slot>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'spin',
  props: {
    size: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      visible: true,
      spin: 'spin'
    }
  }
}
</script>

<style scoped>
  .spin-wrap {
    position: absolute;
    background: rgba(255, 255, 255, .9);
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
  }
  .spin-box {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 2;
    color: #2d8cf0;
  }
  .spin {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #2d8cf0;
    animation: appear 1.0s infinite ease-in-out;
    opacity: 1;
  }

  @keyframes appear {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    25%, 75% {
      transform: scale(0.5);
      opacity: 0.5;
    }
    50% {
      transform: scale(0);
      opacity: 0;
    }
  }
  .small {
    width: 12px;
    height: 12px;
  }
  .default {
    width: 20px;
    height: 20px;
  }
  .large {
    width: 32px;
    height: 32px;
  }
  .spin-text {
    font-size: 14px;
    position: relative;
    margin: 0 auto;
    text-align: center;
  }
</style>
