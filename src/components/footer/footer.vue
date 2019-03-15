<template>
  <div class="foot-container">
    <Header></Header>
    <footer class="foot-box">
    </footer>
  </div>
</template>

<script>

import Header from '../../components/header/header'

export default {
  name: 'iFooter',
  components: { Header }
}
</script>

<style lang="less" scoped>
  .foot-container {
    width: 100%;
    padding: 2.35rem 0 0;
  }

  .foot-box {
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    width: 100%;
    height: 1.95rem;
    z-index: 10;
  }
</style>
