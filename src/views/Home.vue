<template>
  <div class="home">
    <Header></Header>
    <List :data="cityList"></List>
  </div>
</template>

<script>
import Spin from '@/components/spin/spin.vue'
import Header from '@/components/header/header'
import List from './cityList/cityList'

export default {
  name: 'home',
  components: {Header, Spin, List},
  data () {
    return {
      cityList: []
    }
  },
  mounted () {
    this.getCityList()
  },
  methods: {
    getCityList () {
      this.cityList = [
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0;
    padding: 0;
  }
</style>
