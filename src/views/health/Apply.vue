<template>
  <div>
    <group title="就诊卡信息填写">
      <popup-picker title="关系" :data="linkList" v-model="link" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择"></popup-picker>
      <popup-picker title="类型" :data="typeList" v-model="type" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择"></popup-picker>
      <x-input title="姓名" v-model="name" text-align="right" placeholder="请输入就诊人姓名"></x-input>
      <x-input title="证件" v-model="card" text-align="right" type="number" placeholder="请输入就诊人身份证号码"></x-input>
      <x-input title="手机号" v-model="phone" text-align="right" type="tel" is-type="china-mobile" placeholder="请输入手机号码"></x-input>
      <x-input title="地址" v-model="address" text-align="right" placeholder="请输入联系地址"></x-input>
    </group>
    <span class="weui-cells__tips row"><x-icon type="ios-information" size="18" />为了您方便就诊，请填写个人真实信息</span>
    <div class="btn_div">
      <x-button :gradients="['#1D62F0', '#19D5FD']">立即绑定</x-button>
    </div>
  </div>
</template>

<script>
import { Group, XInput, PopupPicker, XButton } from 'vux'
export default {
  name: 'apply',
  components: {
    Group,
    XInput,
    PopupPicker,
    XButton
  },
  data () {
    return {
      linkList: [['本人', '他人']],
      typeList: [['成人']],
      name: '',
      card: '',
      phone: '',
      address: '',
      link: ['本人'],
      type: ['成人']
    }
  },
  methods: {
    onChange (value) {
      console.log('on change', value)
    },
    onShow () {
      console.log('on show')
    },
    onHide (type) {
      console.log('on hide', type)
    }
  }
}
</script>

<style scoped>
.row {
  /*  设置span在同一行*/
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
}
.vux-x-icon {
  fill: #F70968;
}

.btn_div {
  margin: 20px 10px 0 10px;
  /*margin-top: 20px;*/
  /*margin-left: 10px;*/
  /*margin-right: 10px;*/
}
</style>
