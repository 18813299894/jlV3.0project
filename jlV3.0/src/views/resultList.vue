<style scoped lang="less">
.resultList{
}
.records{
  width: 100%;
  padding: 15px 15px 10px 15px;
  text-align: left;
}
.records .recordMsg{
  border-bottom:1px solid #F3F3F3;
  h3{
    font-size: 17px;
    color: #000;
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
  <div class="resultList container">
    <div class="records bs bg_fff mt20">
      <div class="recordMsg">
        <h3>危险源：海龙四期上料车间</h3>
        <p class="mt4">巡检时间：2018-05-12 17:23:35</p>
        <p class="mb8">巡检人：张三</p>
      </div>
      <p style="font-size: 14px;color: #9B9B9B;line-height: 24px;margin-top: 10px;">所属分类：原料上料车间</p>
    </div>
    <div class="records bs bg_fff mt20">
      <div class="recordMsg">
        <h3>危险源：海龙四期上料车间</h3>
        <p class="mt4">巡检时间：2018-05-12 17:23:35</p>
        <p class="mb8">巡检人：张三</p>
      </div>
      <p style="font-size: 14px;color: #9B9B9B;line-height: 24px;margin-top: 10px;">所属分类：原料上料车间</p>
    </div>
    <div class="records bs bg_fff mt20">
      <div class="recordMsg">
        <h3>危险源：海龙四期上料车间</h3>
        <p class="mt4">巡检时间：2018-05-12 17:23:35</p>
        <p class="mb8">巡检人：张三</p>
      </div>
      <p style="font-size: 14px;color: #9B9B9B;line-height: 24px;margin-top: 10px;">所属分类：原料上料车间</p>
    </div>
  </div>
</template>
<script>
export default{
  date () {
    return {
    }
  },
  created () {
    this.$http.post('/index.php?model=jlsafe&m=alarm&a=index&cmd=100&test=9135461', {
      'data': {'search': 3, 'page': 1, 'page_size': 10}
    }).then(function (res) {
      console.log(res)
    }).catch(function (err) {
      console.log(err)
    })
  },
  methods: {
  }

}
</script>
