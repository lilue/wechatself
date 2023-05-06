<template>
  <div class="container">
    <div class="img_div">
      <img src="../assets/404.png" alt="404">
    </div>
    <div class="content">
      <div class="title">您查看的页面不存在</div>
      <x-button :gradients="['#FF5E3A', '#FF9500']" link="/">返回首页</x-button>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { XButton } from 'vux'
export default {
  name: 'notfound',
  components: {
    XButton
  },
  // 定义属性
  data () {
    return {
      time: '10',
      time_end: null
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    GoIndex () {
      let _t = 9
      this.time_end = setInterval(() => {
        if (_t !== 0) {
          this.time = _t--
        } else {
          this.$router.replace('/')
          clearTimeout(this.time_end)
          this.time_end = null
        }
      }, 1000)
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // this.GoIndex()
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () {
    clearTimeout(this.time_end)
    this.time_end = null
  }, // 生命周期 - 销毁完成
  activated () { } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style scoped lang='less'>
.container {
  text-align: center; /*让div内部文字居中*/
  background-color: #fff;
  border-radius: 20px;
  width: 300px;
  height: 350px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.img_div {
  margin: 20px;
  text-align: center;
}

.img_div img {
  width: 8rem !important;
  height: 8rem !important;
}

.content {
  text-align: center;
  display: inline-block;
}

.title {
  font-size: 16px;
  margin-bottom: 40px;
}

</style>
