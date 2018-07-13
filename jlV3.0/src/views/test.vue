<!--
<style lang="less">
.weui-search-bar{
  background: #f5f5f5;
  height: 44px;
}
.weui-search-bar .weui-search-bar__form span{
  line-height: 22px;
  margin-top: -3px;
  margin-left: -5px;
}
.records{
  width: 100%;
  height: 139px;
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
.scroll{
  height:calc(100vh - 44px)
}
</style>
<template>
  <div class="container">
    <wv-search-bar :autofocus="false" v-model="value" :result="filterResult"></wv-search-bar>
    <div class="scroll os" v-infinite-scroll="loadMore" infinite-scroll-disabled="catIScroll" infinite-scroll-distance="10">
      <div class="records bs bg_fff mb20" v-for="item in list" :key="item">
        <div class="recordMsg">
          <h3>危险源：{{item.danger_name}}</h3>
          <p class="mt4">报警时间：{{item.send_time}}</p>
          <p class="mb8">未查次数：{{item.alarm_send_id}}</p>
        </div>
        <p class="fz14 c_9B9B9B lh24 mt10">所属分类：{{item.danger_type_name}}</p>
      </div>
      <p v-if="loading">加载中...</p>
      <p v-if="list.length == 0 && !loading && loadend">没有找到内容</p>
    </div>
  </div>
</template>
<script>
import qs from 'querystring'
export default{
  data () {
    return {
      value: '',
      loading: true,
      loadend: false,
      page: 1,
      page_size: 10,
      list: [],
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
  created () {
    this.getList()
    /*
    this.$http.post('/index.php?model=jlsafe&m=alarm&a=index&cmd=100&test=9135461', qs.stringify({data: JSON.stringify({search: '3', page: '1', page_size: '10'})
    })).then(res => {
      this.reqData = res.data.info.data[0]
    }).catch(function (err) {
      console.log(err)
    })
    */
  },
  methods: {
    getList () {
      this.loading = true
      this.$http.post('/index.php?model=jlsafe&m=alarm&a=index&cmd=100&test=9135461', qs.stringify({data: JSON.stringify({search: '3', page: this.page, page_size: this.page_size})})).then(res => {
        this.loading = false
        /*if (!res.data.info.data.length) {
          this.loadend = true
        } else if (this.list.length >= res.data.info.data.length) {
          this.loadend = true
        } else {*/
          var last = this.list.length
          var data = res.data.info.data
          /*
           for (var i = 0; i < data.length; i++) {
            this.list.push(data[i])
            console.log(i)
          }
          */
          for (var i = last; i < last + 10; i++) {
            if (data[i]) {
              this.list.push(data[i])
            } else {
              this.list.push({
                alarm_send_id: '2',
                create_time: '1',
                danger_name: '锅炉漏水',
                danger_type_name: '清水区危险源2',
                send_time: '1531196009'
              })
            }
          }
        //}
        /*
          for (var j = 0; j < 20; j++) {
          this.list.push({
            alarm_send_id: '2',
            create_time: '1',
            danger_name: '锅炉漏水',
            danger_type_name: '清水区危险源2',
            send_time: '1531196009'
          })
        }
        */
      })
    },
    loadMore () {
      if (this.loadend) { return false }
      if (this.loading) { return false }
      this.page = this.page + 1
      this.getList()
    }
  },
  computed: {
    catIScroll () {
      return this.loading || this.loadend
    },
    filterResult () {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value))
    }
  }
}
</script>
-->
