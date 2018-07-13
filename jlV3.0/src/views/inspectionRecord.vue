<style lang="less">
.inspectionRecord{
}
.weui-search-bar{
  background: #f5f5f5;
  height: 44px;
}
.weui-search-bar .weui-search-bar__form span{
  line-height: 22px;
  margin-top: -3px;
  margin-left: -5px;
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
  h3{
    font-size: 17px;
    color:#000;
    line-height: 24px;
    font-weight: normal;
  }
  p{
    font-size: 14px;
    color: #9B9B9B;
    line-height: 22px;
  }
}
</style>
<template>
  <div class="inspectionRecord container">
    <wv-search-bar :autofocus="false" v-model="value" :result="filterResult"></wv-search-bar>
    <div class="records">
      <div class="recordMsg">
        <h3>危险源：海龙四期上料车间</h3>
        <p class="mt4">巡检时间：2018-05-12 17:23:35</p>
        <p class="mb8">巡检人：张三</p>
      </div>
      <p class="fz14 c_9B9B9B lh24 mt10">所属分类：原料上料车间</p>
    </div>
    <div class="records mt20">
      <div class="recordMsg">
        <h3>危险源：海龙四期上料车间</h3>
        <p class="mt4">巡检时间：2018-05-12 17:23:35</p>
        <p class="mb8">巡检人：张三</p>
      </div>
      <p class="fz14 c_9B9B9B lh24 mt10">所属分类：原料上料车间</p>
    </div>
  </div>
</template>
<script>
export default{
  name: 'inspectionRecord',
  data () {
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    }
  },
  methods: {
  },
  computed: {
    filterResult () {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value))
    }
  }
}
</script>
