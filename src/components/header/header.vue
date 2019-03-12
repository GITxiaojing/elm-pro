<template>
  <div class="header-wrap">
    <div class="page-head" v-if="headState">
      <span class="head-logo">ele.me</span>
      <a class="head-text">
        <span>登录|注册</span>
      </a>
    </div>
    <div v-else class="page-head">
      <span v-if="!state.back" class="fa fa-angle-left head-logo goBack-logo" @click="goBackFunc"></span>
      <span class="title-head">{{locName}}</span>
      <a class="right-title" @click="changeCity">{{rightTitle}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ihead',
  data () {
    return {
      state: {
        home: true,
        back: false
      }
    }
  },
  computed: {
    headState () {
      return this.$store.state.headerStatus === 'home'
    },
    locName () {
      return this.$store.state.curCity
    },
    rightTitle () {
      return '切换城市'
    }
  },
  watch: {
    headState (curVal) {
      if (curVal === 'home') {
        this.state.home = true
        this.state.back = false
      } else if (curVal === 'addrSearch') {
        this.state.home = false
        this.state.back = true
      }
    }
  },
  methods: {
    goBackFunc () {
      this.$router.go(-1)
    },
    changeCity () {
      if (this.$router.history.current.fullPath === '/addrSearch') {
        this.$router.push('/home')
        this.$store.commit('UPDATE_HeaderStatus', 'home')
      }
    }
  }
}
</script>

<style scoped>
  @import "../../style/common.less";

  .header-wrap {
    width: 100%;
    height: 1.95rem;
    background: #3190e8;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .page-head {
    width: 100%;
    background-color: transparent;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    color: #fff;
  }

  .head-text, .head-logo {
    font-size: 0.7rem;
    font-weight: 400;
    position: absolute;
  }

  .head-logo {
    left: 0.4rem;
  }

  .head-text {
    font-size: 0.65rem;
    right: 0.55rem;
  }

  .goBack-logo {
    font-size: 36px;
  }

  .title-head {
    font-size: .8rem;
    font-weight: 700;
    margin: 0 auto;
    width: 50%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .right-title {
    right: 0.4rem;
    font-size: .6rem;
    position: absolute;
  }
</style>
