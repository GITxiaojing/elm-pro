<template>
  <div class="addr-box">
    <Header :head-title="cityName" :is-back="true">
      <span slot="changeCity" class="change-style" @click="toChangeCity">切换城市</span>
    </Header>
    <form class="input-form">
      <input class="addr-input" required="required" v-model="addr" type="search" placeholder="输入学校、商务楼、地址"/>
      <input type="submit" class="primary-btn large-btn" value="提交"/>
    </form>
    <header class="head-title" v-if="!hasResult">搜索历史</header>
    <!--搜索结果或者历史记录-->
    <ul class="pois-ul">
      <li class="poi-li" v-for="(item, index) in resultList" :key="index" @click="toAddrDetail">
        <p class="poi-name">{{item.name}}</p>
        <p class="poi-address">{{item.address}}</p>
      </li>
    </ul>
    <footer class="clear-history" v-if="!hasResult && resultList.length > 0" @click="clearHistory">清空所有</footer>
  </div>
</template>

<script>
import Header from '@/components/header/header'

export default {
  name: 'addr-search',
  components: {Header},
  data () {
    return {
      addr: '',
      resultList: [
        {
          name: '广州站',
          address: '广东省广州市越秀区环市西路159号'
        }
      ],
      hasResult: false
    }
  },
  computed: {
    cityName () {
      // return window.localStorage.getItem('curCity') ? window.localStorage.getItem('curCity') : this.$store.state.curCity
      return this.$store.state.curCity
    }
  },
  beforeRouteLeave (to, from, next) {
    if (to.name === 'home') {
      this.$store.commit('UPDATE_HeaderStatus', 'home')
    }
    next()
  },
  methods: {
    toChangeCity () {
      this.$router.push('/home')
    },
    toAddrDetail (e) {
      this.$router.push('/shopHome')
    },
    clearHistory () {
      this.resultList = []
    }
  }
}
</script>

<style scoped>

  .addr-box {
    width: 100%;
    padding: 2.35rem 0 0;
    -moz-box-sizing: border-box;
  }

  .change-style {
    position: absolute;
    right: 0.4rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.6rem;
  }

  .input-form {
    width: 100%;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding: 0.4rem 0;
  }

  .addr-input, .primary-btn {
    width: 90%;
    height: 1.4rem;
    margin: 0 auto;
    display: block;
    border-radius: .1rem;
    box-sizing: border-box;
    outline: none;
  }

  .addr-input {
    color: #333;
    padding: 0 .3rem;
    font-size: .65rem;
    border: 1px solid #e4e4e4;
    margin-bottom: .4rem;
  }

  .primary-btn {
    background: #3190e8;
    color: #fff;
    border: none;
  }

  .head-title {
    text-align: left;
    width: 100%;
    padding: 0 0 0 .5rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: .475rem/.8rem "Microsoft Yahei";
    box-sizing: border-box;
  }

  .pois-ul {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow: hidden;
  }

  .poi-li {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #e4e4e4;
    padding: .6rem 0 .55rem;
  }

  .poi-li p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    width: 90%;
    margin: 0 auto;
  }

  .poi-name {
    color: #333;
    font-size: .65rem;
    padding: 0 0 .35rem;
  }

  .poi-address {
    color: #999;
    font-size: .45rem;
  }

  .clear-history {
    background: #fff;
    color: #666;
    line-height: 2rem;
    font-size: .7rem;
    text-align: center;
  }
</style>
