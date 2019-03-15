<template>
  <div class="home">
    <Header :signin-up="true">
      <span class="logo-style" slot="logo">ele.me</span>
    </Header>
    <div class="city-page">
      <div class="fixed-city title-box" v-show="isFixed">{{fixedCity}}</div>
      <div class="city-nav">
        <div class="nav-tip">
          <span>当前定位城市：</span>
          <span>定位不准时，请在城市列表中选择</span>
        </div>
        <div class="loc-div" @click="toCityChangePage">
          <span class="loc-city">{{cityName}}</span>
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
              <li v-for="(city, idx1) in item.cityList" class="city-grid" :data-id="city.id" :key="idx1"
                  @click="toCityChangePage">{{city.value}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spin from '@/components/spin/spin.vue'
import Header from '@/components/header/header'
import Scroll from '@/components/scroll/scroll'

export default {
  name: 'home',
  components: {Spin, Header},
  data () {
    return {
      data: [],
      fixedCity: '热门城市',
      isFixed: false,
      scroll: null
    }
  },
  computed: {
    cityName () {
      // return window.localStorage.getItem('curCity') ? window.localStorage.getItem('curCity') : this.$store.state.curCity
      return this.$store.state.curCity
    }
  },
  mounted () {
    this.getCityList()
    this.initScroll()
  },
  methods: {
    getCityList () {
      this.data = [
        {
          id: 1,
          name: '热门城市',
          isHot: true,
          cityList: [
            {
              id: '0001',
              value: '上海'
            },
            {
              id: '0002',
              value: '哈尔滨'
            },
            {
              id: '0003',
              value: '南京'
            },
            {
              id: '0001',
              value: '广州'
            },
            {
              id: '0001',
              value: '厦门'
            },
            {
              id: '0001',
              value: '杭州'
            },
            {
              id: '0001',
              value: '天津'
            },
            {
              id: '0001',
              value: '青岛'
            }
          ]
        },
        {
          id: 2,
          name: 'A',
          cityList: [
            {
              id: '00001',
              value: '安庆'
            },
            {
              id: '00001',
              value: '鞍山'
            },
            {
              id: '00001',
              value: '澳门'
            },
            {
              id: '00001',
              value: '安宁'
            },
            {
              id: '00001',
              value: '安阳'
            },
            {
              id: '00001',
              value: '安康'
            },
            {
              id: '00001',
              value: '安顺'
            },
            {
              id: '00001',
              value: '阿拉尔'
            },
            {
              id: '00001',
              value: '安溪'
            },
            {
              id: '00001',
              value: '安新'
            },
            {
              id: '00001',
              value: '安陆'
            },
            {
              id: '00001',
              value: '安庆'
            },
            {
              id: '00001',
              value: '鞍山'
            },
            {
              id: '00001',
              value: '澳门'
            },
            {
              id: '00001',
              value: '安宁'
            },
            {
              id: '00001',
              value: '安阳'
            },
            {
              id: '00001',
              value: '安康'
            },
            {
              id: '00001',
              value: '安顺'
            },
            {
              id: '00001',
              value: '阿拉尔'
            },
            {
              id: '00001',
              value: '安溪'
            },
            {
              id: '00001',
              value: '安新'
            },
            {
              id: '00001',
              value: '安陆'
            }
          ]
        },
        {
          id: 3,
          name: 'B',
          cityList: [
            {
              id: '00001',
              value: '北京'
            },
            {
              id: '00001',
              value: '包头'
            },
            {
              id: '00001',
              value: '蚌埠'
            },
            {
              id: '00001',
              value: '保定'
            },
            {
              id: '00001',
              value: '安阳'
            },
            {
              id: '00001',
              value: '安康'
            },
            {
              id: '00001',
              value: '安顺'
            },
            {
              id: '00001',
              value: '阿拉尔'
            },
            {
              id: '00001',
              value: '安溪'
            },
            {
              id: '00001',
              value: '安新'
            },
            {
              id: '00001',
              value: '安陆'
            }
          ]
        },
        {
          id: 4,
          name: 'C',
          cityList: [
            {
              id: '00001',
              value: '北京'
            },
            {
              id: '00001',
              value: '包头'
            },
            {
              id: '00001',
              value: '蚌埠'
            },
            {
              id: '00001',
              value: '保定'
            },
            {
              id: '00001',
              value: '安阳'
            },
            {
              id: '00001',
              value: '安康'
            },
            {
              id: '00001',
              value: '安顺'
            },
            {
              id: '00001',
              value: '阿拉尔'
            },
            {
              id: '00001',
              value: '安溪'
            },
            {
              id: '00001',
              value: '安新'
            },
            {
              id: '00001',
              value: '安陆'
            }
          ]
        },
        {
          id: 5,
          name: 'D',
          cityList: [
            {
              id: '00001',
              value: '北京'
            },
            {
              id: '00001',
              value: '包头'
            },
            {
              id: '00001',
              value: '蚌埠'
            },
            {
              id: '00001',
              value: '保定'
            },
            {
              id: '00001',
              value: '安阳'
            },
            {
              id: '00001',
              value: '安阳'
            },
            {
              id: '00001',
              value: '安阳'
            },
            {
              id: '00001',
              value: '安阳'
            },
            {
              id: '00001',
              value: '安康'
            },
            {
              id: '00001',
              value: '安顺'
            },
            {
              id: '00001',
              value: '安顺'
            },
            {
              id: '00001',
              value: '安顺'
            },
            {
              id: '00001',
              value: '安顺'
            },
            {
              id: '00001',
              value: '安顺'
            },
            {
              id: '00001',
              value: '安顺'
            },
            {
              id: '00001',
              value: '阿拉尔'
            },
            {
              id: '00001',
              value: '安溪'
            },
            {
              id: '00001',
              value: '安溪'
            },
            {
              id: '00001',
              value: '安溪'
            },
            {
              id: '00001',
              value: '安溪'
            },
            {
              id: '00001',
              value: '安溪'
            },
            {
              id: '00001',
              value: '安新'
            },
            {
              id: '00001',
              value: '安陆'
            }
          ]
        },
        {
          id: 6,
          name: 'E',
          cityList: [
            {
              id: '00001',
              value: '北京'
            },
            {
              id: '00001',
              value: '包头'
            },
            {
              id: '00001',
              value: '蚌埠'
            },
            {
              id: '00001',
              value: '保定'
            },
            {
              id: '00001',
              value: '安阳'
            },
            {
              id: '00001',
              value: '安康'
            },
            {
              id: '00001',
              value: '安顺'
            },
            {
              id: '00001',
              value: '阿拉尔'
            },
            {
              id: '00001',
              value: '安溪'
            },
            {
              id: '00001',
              value: '安新'
            },
            {
              id: '00001',
              value: '安陆'
            }
          ]
        },
        {
          id: 7,
          name: 'F',
          cityList: [
            {
              id: '00001',
              value: '北京'
            },
            {
              id: '00001',
              value: '包头'
            },
            {
              id: '00001',
              value: '蚌埠'
            },
            {
              id: '00001',
              value: '保定'
            },
            {
              id: '00001',
              value: '安阳'
            },
            {
              id: '00001',
              value: '安康'
            },
            {
              id: '00001',
              value: '安顺'
            },
            {
              id: '00001',
              value: '阿拉尔'
            },
            {
              id: '00001',
              value: '安溪'
            },
            {
              id: '00001',
              value: '安新'
            },
            {
              id: '00001',
              value: '安陆'
            }
          ]
        },
        {
          id: 8,
          name: 'G',
          cityList: [
            {
              id: '00001',
              value: '北京'
            },
            {
              id: '00001',
              value: '包头'
            },
            {
              id: '00001',
              value: '蚌埠'
            },
            {
              id: '00001',
              value: '保定'
            },
            {
              id: '00001',
              value: '安阳'
            },
            {
              id: '00001',
              value: '安康'
            },
            {
              id: '00001',
              value: '安顺'
            },
            {
              id: '00001',
              value: '阿拉尔'
            },
            {
              id: '00001',
              value: '安溪'
            },
            {
              id: '00001',
              value: '安新'
            },
            {
              id: '00001',
              value: '安陆'
            }
          ]
        },
        {
          id: 9,
          name: 'H',
          cityList: [
            {
              id: '00001',
              value: '北京'
            },
            {
              id: '00001',
              value: '北京'
            },
            {
              id: '00001',
              value: '北京'
            },
            {
              id: '00001',
              value: '北京'
            },
            {
              id: '00001',
              value: '包头'
            },
            {
              id: '00001',
              value: '蚌埠'
            },
            {
              id: '00001',
              value: '保定'
            },
            {
              id: '00001',
              value: '安阳'
            },
            {
              id: '00001',
              value: '安康'
            },
            {
              id: '00001',
              value: '安顺'
            },
            {
              id: '00001',
              value: '阿拉尔'
            },
            {
              id: '00001',
              value: '安溪'
            },
            {
              id: '00001',
              value: '安新'
            },
            {
              id: '00001',
              value: '安陆'
            }
          ]
        },
        {
          id: 10,
          name: 'I',
          cityList: [
            {
              id: '00001',
              value: '北京'
            },
            {
              id: '00001',
              value: '包头'
            },
            {
              id: '00001',
              value: '包头'
            },
            {
              id: '00001',
              value: '包头'
            },
            {
              id: '00001',
              value: '包头'
            },
            {
              id: '00001',
              value: '包头'
            },
            {
              id: '00001',
              value: '蚌埠'
            },
            {
              id: '00001',
              value: '保定'
            },
            {
              id: '00001',
              value: '安阳'
            },
            {
              id: '00001',
              value: '安康'
            },
            {
              id: '00001',
              value: '安顺'
            },
            {
              id: '00001',
              value: '阿拉尔'
            },
            {
              id: '00001',
              value: '安溪'
            },
            {
              id: '00001',
              value: '安新'
            },
            {
              id: '00001',
              value: '安陆'
            }
          ]
        }
      ]
    },
    initScroll () {
      this.scroll = new Scroll(this.$refs.cityWrap, {
        bounce: false
      })
    },
    toCityChangePage (e) {
      /*
      if (window.localStorage) {
        window.localStorage.setItem('curCity', e.target.innerText)
      }
      */
      this.$router.push('/addrSearch')
      this.$store.commit('UPDATE_CurCity', e.target.innerText)
    }
  }
}
</script>

<style scoped>
  @import "../style/common.less";
  .home {
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0;
    padding: 0;
  }

  .logo-style {
    position: absolute;
    left: 0.4rem;
    font-size: 0.7rem;
    width: 2.3rem;
    top: 50%;
    transform: translateY(-50%);
  }

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
  }

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
