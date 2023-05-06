<template>
  <div class="flex-col page">
    <div class="flex-col flex-auto group_3 space-y-46">
      <div class="flex-col group_4">
        <div class="flex-row justify-between items-center section_4">
          <div class="flex-col items-start space-y-16">
            <span class="font_2 text_4">付款给</span>
            <span class="font_3 text_5">**********医院</span>
          </div>
          <img class="image_6" src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63eb5b3c5a7e3f03103a9614/63eb5b8f42b69d0011f673ad/16764574891434535754.png" alt="icon"/>
        </div>
        <div class="flex-col relative group_5 space-y-102">
          <div class="flex-col section_5">
            <div class="flex-row justify-between items-center group_6">
              <span class="font_4 text_6">费用总额</span>
              <span class="font_4 text_7">368.50元</span>
            </div>
            <div class="divider"></div>
            <div class="flex-col group_7">
              <div class="flex-row justify-between items-baseline">
                <span class="font_2">医保基金支付</span>
                <span class="font_5 text_8">0.00元</span>
              </div>
              <div class="flex-row justify-between group_8">
                <span class="font_2">个人账户支付</span>
                <span class="font_5 text_9">200.00元</span>
              </div>
              <div class="flex-row justify-between items-baseline group_9">
                <span class="font_2">其他抵扣金额</span>
                <span class="font_5 text_10">100.00元</span>
              </div>
              <div class="flex-row justify-between items-baseline group_10">
                <span class="font_6 text_11">现金支付</span>
                <span class="font_6 text_12">68.50元</span>
              </div>
            </div>
            <div class="flex-col group_11 space-y-40">
              <div class="divider"></div>
              <x-button @click.native="show = true">查看明细</x-button>
<!--              <span class="self-center font_2 text_13">查看明细</span>-->
            </div>
          </div>
          <div class="flex-col space-y-28">
            <div class="flex-row justify-between items-center section_6">
              <div class="flex-row items-center space-x-26">
                <img
                  class="shrink-0 image_7"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63eb5b3c5a7e3f03103a9614/63eb5b8f42b69d0011f673ad/16764574891465934091.png"
                />
                <span class="font_7">添加银行卡</span>
              </div>
              <img
                class="image_5 image_8"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63eb5b3c5a7e3f03103a9614/63eb5b8f42b69d0011f673ad/16764574891486501418.png"
               alt="add"/>
            </div>
            <div class="flex-col list">
              <template v-for="(item, i) in list_pylQwltv">
                <div class="flex-row justify-between group_12">
                  <div class="flex-row items-center space-x-26">
                    <img
                      class="shrink-0 image_7"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63eb5b3c5a7e3f03103a9614/63eb5b8f42b69d0011f673ad/16764574891532852994.png"
                     alt="wx"/>
                    <span class="font_7">微信支付</span>
                  </div>
                  <img
                    class="image_7"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63eb5b3c5a7e3f03103a9614/63eb5b8f42b69d0011f673ad/16764574891529880925.png"
                   alt="zfb"/>
                </div>
                <div class="self-end list-divider" v-if="i !== 1"></div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-row justify-between items-center group_14">
        <div class="flex-row items-center space-x-2">
          <span class="font_2 text_16">您还需支付：</span>
          <span class="text_15">¥68.00元</span>
        </div>
        <div class="flex-col justify-start items-center text-wrapper_2"><span
          class="font_3 text_17">去支付</span></div>
      </div>
    </div>
    <div class="v-transfer-dom">
      <popup v-model="show" height="100%">

        <x-button @click.native="show = false">Cancel</x-button>
      </popup>
    </div>
  </div>
</template>

<script>
import { Popup, XButton } from 'vux'
export default {
  components: {
    Popup,
    XButton
  },
  data () {
    return {
      list_pylQwltv: [null, null],
      show: false
    }
  },
  methods: {}
}
</script>

<style scoped lang="css">
html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
  'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
}

body * {
  box-sizing: border-box;
  flex-shrink: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  justify-content: flex-start;
}

.justify-between {
  justify-content: space-between;
}

.items-start {
  align-items: flex-start;
}

.items-center {
  align-items: center;
}

.items-baseline {
  align-items: baseline;
}

.self-end {
  align-self: flex-end;
}

.self-center {
  align-self: center;
}

.flex-auto {
  flex: 1 1 auto;
}

.shrink-0 {
  flex-shrink: 0;
}

.relative {
  position: relative;
}

.page {
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}

.space-x-8 > *:not(:first-child) {
  margin-left: 0.25rem;
}

.image_5 {
  width: 0.44rem;
  height: 0.88rem;
}

.group_3 {
  overflow-y: auto;
}

.space-y-46 > *:not(:first-child) {
  margin-top: 1.44rem;
}

.group_4 {
  height: 42.34rem;
}

.section_4 {
  padding: 3.25rem 1.88rem 4rem;
  background-color: #3b71e8;
  border-radius: 0px 0px 1.44rem 1.44rem;
}

.space-y-16 > *:not(:first-child) {
  margin-top: 0.5rem;
}

.font_2 {
  font-size: 0.88rem;
  font-family: SourceHanSansCN;
  letter-spacing: -0.021rem;
  line-height: 0.81rem;
  color: #909399;
}

.text_4 {
  color: #a6c1ff;
}

.font_3 {
  font-size: 1.13rem;
  font-family: SourceHanSansCN;
  line-height: 1.05rem;
  color: #ffffff;
}

.text_5 {
  margin-left: 0.31rem;
  letter-spacing: -0.027rem;
}

.image_6 {
  width: 2.5rem;
  height: 2.5rem;
}

.group_5 {
  margin-top: -2.44rem;
  padding: 0 1.25rem;
}

.space-y-102 > *:not(:first-child) {
  margin-top: 3.19rem;
}

.section_5 {
  padding: 0 0.94rem 1.19rem 1.19rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0px 0.063rem 0.5rem #00000080;
  border: solid 0.063rem #e6e6e6;
}

.group_6 {
  padding: 1.19rem 0 1.44rem;
}

.font_4 {
  font-size: 1.13rem;
  font-family: SourceHanSansCN;
  letter-spacing: -0.027rem;
  color: #606266;
}

.text_6 {
  line-height: 1.05rem;
}

.text_7 {
  margin-right: 0.19rem;
  line-height: 0.94rem;
}

.divider {
  margin-right: 0.25rem;
  background-image: repeating-linear-gradient(90deg, #eff0f4, #eff0f4 0.85%, transparent 0.85%, transparent 1.697%);
  background-position: -0.078rem 0px;
  height: 0.094rem;
}

.group_7 {
  padding: 1.56rem 0;
}

.font_5 {
  font-size: 0.88rem;
  font-family: SourceHanSansCN;
  letter-spacing: -0.021rem;
  line-height: 0.73rem;
  color: #909399;
}

.text_8 {
  margin-right: 0.19rem;
}

.group_8 {
  margin-top: 0.94rem;
}

.text_9 {
  margin-right: 0.19rem;
  margin-top: 0.063rem;
}

.group_9 {
  margin-top: 0.88rem;
}

.text_10 {
  margin-right: 0.13rem;
}

.group_10 {
  margin-top: 1.81rem;
}

.font_6 {
  font-size: 1rem;
  font-family: SourceHanSansCN;
  letter-spacing: -0.024rem;
  color: #3b71e8;
}

.text_11 {
  line-height: 0.94rem;
}

.text_12 {
  margin-right: 0.19rem;
  line-height: 0.84rem;
}

.group_11 {
  margin-top: 1.44rem;
}

.space-y-40 > *:not(:first-child) {
  margin-top: 1.25rem;
}

.text_13 {
  color: #606266;
}

.space-y-28 > *:not(:first-child) {
  margin-top: 0.88rem;
}

.section_6 {
  padding: 1.19rem 0.88rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: solid 0.063rem #e6e6e6;
}

.space-x-26 > *:not(:first-child) {
  margin-left: 0.81rem;
}

.image_7 {
  width: 1.56rem;
  height: 1.56rem;
}

.font_7 {
  font-size: 0.94rem;
  font-family: SourceHanSansCN;
  line-height: 0.86rem;
  color: #303133;
}

.image_8 {
  margin-right: 0.094rem;
}

.list {
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: solid 0.063rem #e6e6e6;
}

.group_12 {
  padding: 1.25rem 0.66rem 1.16rem 0.94rem;
}

.list-divider {
  background-color: #eff0f4;
  width: 18.44rem;
  height: 0.13rem;
}

.group_14 {
  padding: 0.81rem 1.25rem 1rem;
  border-top: solid 0.094rem #f5f5f5;
}

.space-x-2 > *:not(:first-child) {
  margin-left: 0.063rem;
}

.text_16 {
  color: #666666;
  letter-spacing: unset;
}

.text_15 {
  color: #3b71e8;
  font-size: 1.38rem;
  font-family: SourceHanSansCN;
  line-height: 1.16rem;
}

.text-wrapper_2 {
  padding: 1.06rem 0 0.94rem;
  background-color: #3b71e8;
  border-radius: 1.56rem;
  width: 7.5rem;
  height: 3.13rem;
  border: solid 0.031rem #979797;
}

.text_17 {
  line-height: 1.03rem;
}
</style>
