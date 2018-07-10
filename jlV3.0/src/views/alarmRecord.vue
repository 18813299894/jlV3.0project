<style csoped>
.alarmRecord{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: fixed;
  background: #f5f5f5;
  padding-top: 64px;
}
.alarmRecord .searchBar{
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #D9D9D9;
  position: relative;
}
.alarmRecord .searchBar .searchArea{
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
/* ------删除按钮--------- */
.cancelIcon_1{
  display: block;
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 8px;
  background-image: url(./../assets/cancel3.png);
  background-size: 16px 16px;
  position: absolute;
  top: 14px;
  right: 5%;
}
/* -------------------- */
.records{
  box-sizing: border-box;
  width: 100%;
  height: 139px;
  background: #fff;
  padding: 15px 15px 10px 15px;
  text-align: left;
}
.records .recordMsg{
  border-bottom:1px solid #F3F3F3;
}
.records .recordMsg h3{
  font-size: 17px;
  color: #000000;
  line-height: 24px;
  font-weight: normal;
}
.records .recordMsg p{
  font-size: 14px;
  color: #9B9B9B;
  line-height: 22px;
}
</style>
<template>
  <div class="alarmRecord">
    <div class="searchBar">
      <input class="searchArea iconfont" @input="change()" type="text" :placeholder="icon" v-model="value">
      <i  v-show="iconShow" class="cancelIcon_1" @click="clearText()"></i>
    </div>
    <div class="records">
      <div class="recordMsg">
        <h3>危险源：海龙四期上料车间</h3>
        <p style="margin-top: 4px;">报警时间：2018-05-12 17:23:35</p>
        <p style="margin-bottom: 8px;">未查次数：2</p>
      </div>
      <p style="font-size: 14px;color: #9B9B9B;line-height: 24px;margin-top: 10px;">所属分类：原料上料车间</p>
    </div>
    <div class="records" style="margin-top: 20px">
      <div class="recordMsg">
        <h3>危险源：海龙四期上料车间</h3>
        <p style="margin-top: 4px;">报警时间：2018-05-12 17:23:35</p>
        <p style="margin-bottom: 8px;">未查次数：2</p>
      </div>
      <p style="font-size: 14px;color: #9B9B9B;line-height: 24px;margin-top: 10px;">所属分类：原料上料车间</p>
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
