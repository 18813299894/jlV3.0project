<style>
.noRecord{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: fixed;
  padding-top: 64px;
}
.noRecord .searchBar{
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #D9D9D9;
  position:relative;
}
.noRecord .searchBar .searchArea{
  width: 95%;
  height: 26px;
  background: #FFF;
  margin-top: 8px;
  border: 1px solid #D7DADE;
  border-radius: 2px;
}
/* placeholder居中显示 */
input::-ms-input-placeholder
{
  color: #9F9F9F;
  text-align: center;
}
input::-webkit-input-placeholder
{
  color: #9F9F9F;
  text-align: center;
}
/* --------------- */
.cancelIcon_1{
  display: block;
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 8px;
  background-image: url(./../assets/cancel3.png);
  background-size: 16px 16px;
  position: absolute;
  top:14px;
  right: 5%;
}
</style>
<template>
  <div class="noRecord">
    <div class="searchBar">
      <input class="searchArea iconfont" @input="change()" type="text" :placeholder="icon" v-model="value">
      <i  v-show="iconShow" class="cancelIcon_1" @click="clearText()"></i>
    </div>
    <div>
      <img src="./../assets/noRecord.png" style="width:80px;height:80px;margin-top: 104px;" />
      <p style="font-size: 17px;color: #9B9B9B;line-height: 24px;margin-top: 30px">无巡检记录</p>
    </div>
  </div>
</template>
<script>
export default{
  name: 'alarmRecord',
  data () {
    return {
      icon: '\ue600 搜索',
      iconShow: false,
      value: ''
    }
  },
  methods: {
    change () {
      if (this.value === '') {
        this.iconShow = false
      } else {
        this.iconShow = true
      }
    },
    clearText () {
      this.value = ''
      this.iconShow = false
    }
  }
}
</script>
