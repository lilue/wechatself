<template>
  <div class="container">
    <div class="card_list">
      <div class="card-face-container">
        <img class="card-bg" src="../../assets/images/cardboard.png" alt="bg">
        <div class="card-top-info">
          <div class="card-top-org">广东省卫生健康委员会</div>
          <div class="card-top-title">
            <img src="../../assets/images/icon.png" alt="icon">
            <span>电子健康卡</span>
          </div>
        </div>
        <div class="card-detail-info">
          <div class="card-user-info">
            <span class="card-user-name">姓名</span>
            <span class="card-user-id">440825199202170031</span>
          </div>
          <div class="card-qrcode">
            <img src="../../assets/images/logo_.png" alt="logo" class="card-qrcode-logo">
            <div class="qrcode"></div>
          </div>
        </div>
        <div class="card-footer">中华人民共和国国家卫生健康委员会监制</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Box } from 'vux'
export default {
  name: 'CardList',
  components: {
    Box
  }
}
</script>

<style scoped>
html,body{
  overflow-x: hidden;
  max-width: 414px;
  font-size: 2.8rem !important;
  margin: 0 auto;
}

#app {
  font-size: 3.2rem !important;
}

.container {
  background: #f4f4f4;
  width: 100%;
  min-height: 99%;
}
.card_list {
  /*width: 7.5rem;*/
  padding: .7rem 0;
  background: #fff;
}
.card-face-container {
  display: block;
  height: 3.5rem;
  width: 6.2rem;
  position: relative;
  color: #000000;
  margin: 0 auto 20px;
}

.card-face-container .card-bg {
  height: 100%;
  width: 100%;
  position: absolute;
}

.card-face-container .card-top-info {
  position: absolute;
  top: .23rem;
  width: calc(100% - .27rem - .34rem);
  padding: 0 .27rem 0 .34rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-face-container .card-top-info .card-top-org {
  font-size: .18rem;
  line-height: .25rem;
}

.card-face-container .card-top-info .card-top-title {
  display: flex;
  align-items: center;
  font-size: .3rem;
  line-height: .42rem;
  color: #2B2B2B;
}

.card-face-container .card-top-info .card-top-title img {
  height: .55rem;
  width: .55rem;
  margin-right: .08rem;
}

.card-face-container .card-detail-info {
  position: absolute;
  top: 1.24rem;
  width: calc(100% - .34rem - .15rem);
  padding: 0 .15rem 0 .34rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.card-face-container .card-detail-info .card-user-info {
  font-size: .36rem;
  color: #2B2B2B;
}

.card-face-container .card-detail-info .card-user-info .card-user-name {
  height: .5rem;
  display: flex;
  align-items: center;
}

.card-face-container .card-detail-info .card-user-info .card-need-real-name {
  background: #D0021B;
  border-radius: .165rem;
  width: 1.02rem;
  height: .33rem;
  color: #fff;
  font-size: .24rem;
  text-align: center;
  margin-left: .08rem;
}

.card-face-container .card-detail-info .card-user-info .card-user-id {
  font-size: .3rem;
  line-height: .3rem;
  display: block;
  padding-top: .12rem;
}

.card-face-container .card-detail-info .card-qrcode {
  background: #FFFFFF;
  padding: .02rem;
  position: relative;
}

.card-face-container .card-detail-info .card-qrcode .card-qrcode-logo {
  height: .44rem;
  width: .44rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card-face-container .card-detail-info .card-qrcode .qrcode {
  height: 1.54rem;
  width: 1.54rem;
}

.card-qrcode .qrcode canvas {
  width: 100% !important;
  height: 100% !important;
}


.card-face-container .card-detail-info .card-qrcode img {
  height: 1.54rem;
  width: 1.54rem;
}

.card-face-container .card-footer {
  position: absolute;
  font-size: .18rem;
  bottom: .16rem;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  letter-spacing: 0;
  line-height: .25rem;
}

</style>
