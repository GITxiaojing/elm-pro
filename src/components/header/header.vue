<template>
  <div class="header-wrap">
    <!--<div class="page-head" v-if="headState === 'home'">
      <span class="head-logo">ele.me</span>
      <a class="head-text" @click="toLogin">
        <span>登录|注册</span>
      </a>
    </div>
    <div v-else class="page-head">
      <span v-if="state.back" class="fa fa-angle-left head-logo goBack-logo" @click="goBackFunc"></span>
      <span class="title-head">{{state.rightText ? locName : otherText}}</span>
      <a class="right-title" @click="changeCity" v-if="state.rightText">{{rightTitle}}</a>
    </div>-->
    <slot name="logo"></slot>
    <slot name="search"></slot>
    <span class="fa fa-angle-left head-back" v-if="isBack" @click="goBackFunc"></span>
    <router-link :to="userInfo ? '/profile' : '/login'" v-if="signinUp" class="head-login">
      <svg class="user_avatar" v-if="userInfo">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
      </svg>
      <span v-else class="login-span">登录|注册</span>
    </router-link>
    <section class="head-title" v-if="headTitle">
      <span class="title-text">{{headTitle}}</span>
    </section>
    <slot name="edit"></slot>
    <slot name="msite-title"></slot>
    <slot name="changeCity"></slot>
    <slot name="changeLogin"></slot>
  </div>
</template>

<script>
export default {
  name: 'ihead',
  props: {
    isBack: false,
    headTitle: '',
    signinUp: false
  },
  data () {
    return {
    }
  },
  computed: {
    userInfo () {
      return false
    }
  },
  watch: {
  },
  methods: {
    goBackFunc () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../style/common.less";

  .header-wrap {
    width: 100%;
    height: 1.95rem;
    background: #3190e8;
    position: fixed;
    color: #fff;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .head-back{
    position: absolute;
    left: 0.4rem;
    font-size: 1.80rem;
    height: 1.95rem;
    line-height: 1.95rem;
  }

  .head-title {
    width: 50%;
    text-align: center;
    margin: 0 auto;
    height: 1.95rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .title-text {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 0.8rem;
      font-weight: bold;
    }
  }

  .head-login {
    position: absolute;
    right: 0.55rem;
    font-size: 0.65rem;
    top: 50%;
    transform: translateY(-50%);
    .login-span {
      color: #fff;
    }
    .user_avatar{
      fill: #fff;
      width: 0.8rem;
      height: 0.8rem;
    }
  }
</style>
