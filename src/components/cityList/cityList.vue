<template>
  <div class="city-page">
    <div class="fixed-city title-box" v-show="isFixed">{{fixedCity}}</div>
    <div class="city-nav">
      <div class="nav-tip">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <div class="loc-div">
        <span class="loc-city">广州</span>
        <span class="fa fa-angle-right"></span>
      </div>
    </div>
    <div class="city-wrap"
         ref="cityWrap"
    >
      <div class="city-body">
        <div v-for="(item, idx) in data" :key="idx" class="city-ul">
          <h4 class="title-box" :data-id="item.id">
            {{item.name}}
          </h4>
          <ul :class="{'city-box': true, 'hot-city': item.isHot}">
            <li v-for="(city, idx1) in item.cityList" class="city-grid" :data-id="city.id" :key="idx1">{{city.value}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Scroll from '../scroll/scroll'
export default {
  name: 'city-list',
  props: {
    data: {
      type: Array
    }
  },
  data () {
    return {
      fixedCity: '热门城市',
      isFixed: false,
      scroll: null
    }
  },
  computed: {},
  mounted () {
    this.initScroll()
  },
  methods: {
    initScroll () {
      this.scroll = new Scroll(this.$refs.cityWrap, {
        bounce: false
      })
    }
  }
}
</script>

<style scoped>
  @import '../../../node_modules/font-awesome/css/font-awesome.css';

  .city-page {
    position: absolute;
    width: 100%;
    top: 1.95rem;
    overflow: hidden;
    height: calc(100% - 1.95rem);
  }

  .fixed-city {
    position: fixed;
    top: 6.15rem;
    left: 0;
    z-index: 1;
    background-color: #fff;

  .city-wrap::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .city-nav {
    padding-top: 0.4rem;
    margin-bottom: 0.4rem;
    overflow: hidden;
    background-color: #fff;
  }

  .nav-tip {
    display: flex;
    justify-content: space-between;
    line-height: 1.45rem;
    padding: 0 0.45rem;
  }

  .nav-tip span:nth-of-type(1) {
    color: #666;
    font-size: 0.55rem;
  }

  .nav-tip span:nth-of-type(2) {
    color: #9f9f9f;
    font-size: 0.475rem;
    font-weight: 900;
  }

  .loc-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1.8rem;
    padding: 0 0.45rem;
    font-size: 0.75rem;
    border-top: 0.05rem solid #e4e4e4;
    border-bottom: 0.1rem solid #e4e4e4;
  }

  .loc-div .loc-city {
    color: #3190e8;
  }

  .city-wrap {
    width: 100%;
    height: calc(100% - 4.2rem);
    overflow: hidden;
  }

  .city-body {
    width: 100%;
  }

  .city-ul {
    width: 100%;
    background-color: #fff;
    margin-bottom: 0.4rem;
  }

  .title-box {
    color: #666;
    width: 100%;
    font-size: 0.55rem;
    font-weight: 400;
    line-height: 1.45rem;
    text-indent: 0.45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    text-align: left;
    margin: 0;
    padding: 0;
  }

  .city-box {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .city-grid {
    float: left;
    width: 25%;
    height: 1.75rem;
    font: 0.6rem/1.75rem "Microsoft YaHei";
    font-weight: 400;
    color: #666;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    border-bottom: 0.025rem solid #e4e4e4;
    border-right: 0.025rem solid #e4e4e4;
    box-sizing: border-box;
  }

  .city-grid:nth-of-type(4n) {
    border-right: none;
  }

  .hot-city .city-grid {
    color: #3190e8;
  }
</style>
