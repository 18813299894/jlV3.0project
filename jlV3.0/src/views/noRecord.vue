<style lang="less">
.noRecord{
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
</style>
<template>
  <div class="noRecord container">
    <wv-search-bar :autofocus="false" v-model="value" :result="filterResult"></wv-search-bar>
    <div>
      <img src="./../../static/image/noRecord.png" style="width:80px;height:80px;margin-top: 104px;" />
      <p style="font-size: 17px;color: #9B9B9B;line-height: 24px;margin-top: 30px">无巡检记录</p>
    </div>
  </div>
</template>
<script>
export default{
  name: 'alarmRecord',
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
