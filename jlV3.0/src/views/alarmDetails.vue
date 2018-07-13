<style scoped lang="less">
.recordsTitle{
  padding: 20px 20px 10px 20px;
  border-bottom: 1px solid #EFEFEF;
  background: #fff;
}
.msgList{
  padding: 0 20px;
  background: #fff;
  margin-bottom:20px;
  &>div:first-child{
    padding-top: 20px;
  }
}
.item{
  width: 100%;
  height: auto;
  overflow: hidden;
  padding:10px 0;
  border-bottom: 1px solid #EDEDED;
  .preview_label{
    float: left;
    width: 30%;
    line-height: 24px;
    font-size: 14px;
    color: #9B9B9B;
  }
  .preview_value{
    float: left;
    padding-left: 10px;
    line-height: 24px;
    font-size: 14px;
  }
}
</style>
<template>
  <div class="container tl">
    <div class="recordsTitle">
      <h3 style="font-size: 17px;line-height: 24px;font-weight: normal">危险源：{{resData.danger_name}}</h3>
      <p style="font-size: 14px;color: #9B9B9B;margin-top: 5px;line-height: 20px">所属分类：{{resData.danger_type_name}}</p>
    </div>
    <div class="msgList">
      <div class="item">
        <label class="preview_label">报警时间</label>
        <span class="preview_value">{{resData.send_time}}</span>
      </div>
      <div class="item">
        <label class="preview_label">未查次数</label>
        <span class="preview_value">{{resData.patrol_lack_num}}</span>
      </div>
      <div class="item">
        <label class="preview_label">巡检岗位角色</label>
        <span class="preview_value">{{resData.patrol_position}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import qs from 'querystring'
export default{
  data () {
    return {
      resData: ''
    }
  },
  methods: {
    getDetails () {
      this.$http.post('/index.php?model=jlsafe&m=alarm&a=index&cmd=101&test=9135461', qs.stringify({data: JSON.stringify({alarm_send_id: this.id})
      })).then(res => {
        this.resData = res.data.info
      }).catch(function (err) {
        console.log(err)
      })
    }
  },
  created () {
    this.id = this.$route.query.id || ''
    this.id = '1'
    this.getDetails()
  }
}
</script>
