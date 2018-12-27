<template>
  <div v-if="visible" class="header-wrap">
    <span class="head-text">ele.me</span>
    <a class="head-text">
      <span>登录|注册</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ihead',
  data () {
    return {
      visible: true
    }
  }
}
</script>

<style scoped>
  .header-wrap {
    width: 100%;
    height: 1.95rem;
    background: #3190e8;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    z-index: 10;
  }
  .head-text {
    color: #fff;
    font-size: 0.7rem;
    font-weight: 400;
    position: absolute;
  }
  span.head-text {
    left: 0.4rem;
  }
  a.head-text {
    font-size: 0.65rem;
    right: 0.55rem;
  }
</style>
