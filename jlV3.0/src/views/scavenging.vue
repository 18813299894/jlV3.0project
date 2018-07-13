<style scoped lang="less">
.scavenging{
  overflow: scroll;
}
.addressPart{
  width: 100%;
  height: 46px;
  border-top: 1px solid #E4E4E4;
  border-bottom: 1px solid #E4E4E4;
  background: #FAFAFA;
  .address{
    float: left;
    width: 75%;
    height: 48px;
    line-height: 48px;
    font-size: 17px;
    color: #9B9B9B;
    text-align: right;
  }
  a{
    float: left;
    width: 25%;
    height: 48px;
    line-height: 48px;
    font-size: 14px;
    color: #467DB9;
    text-align: center;
  }
}
/* --------单选框样式------------ */
.checkBox{
  width: 100%;
  height: 86px;
  border-bottom: 1px solid #EAEAEA;
  padding: 10px 0 0 15px;
}
.selected:before{
  content: "\EA06";
  background-color:#FFF;
  color: #5685BB;
}
.checkBox .weui-cell__bd span a:before{
  margin-left: 0;
}
.checkBox .weui-cell__bd .abnormal{
  margin-left: 30px;
}
/* ----------备注信息---------- */
.textArea{
  height: 86px;
  margin-top: -20px;
}
.textArea .weui-cells .textAreaSize{
  width: 100%;
  height: 86px;
}
.textArea .weui-cells:after{
  border-bottom: 1px solid #EAEAEA;
}
.weui-cell__bd .weui-textarea{
  width: 100%;
  height: 86px;
  font-size: 17px;
  color: #B2B2B2;
  line-height: 24px;
}
/* ----------------- */
.addPicture{
  box-sizing: border-box;
  width: 100%;
  height: 131px;
  background: #fff;
  margin-top: 20px;
  text-align: left;
  padding:20px 0 0 15px;
  border-top: 1px solid #EAEAEA;
  border-bottom:1px solid #EAEAEA;
}
.addPicture p span{
  display: inline-block;
  color: #ff0000;
  height: 20px;
  width: 30px;
  text-align: center;
  line-height: 20px;
  font-size: 10px;
}
.addPicture .picPart ul{
  list-style: none;
  padding: 0;
  li{
    float: left;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    img{
      width: 50px;
      height: 50px;
    }
  }
}
.addPicture .picPart .addIcon{
  display: inline-block;
  width: 50px;
  height: 50px;
  background: #E1E1E1;
  background:url(./../../static/image/camera.png) no-repeat center center;
  background-size: 40px 40px;
}
/* 删除icon */
.cancelIcon{
  display: block;
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 8px;
  background-image: url(./../../static/image/cancel.png);
  background-size: 16px 16px;
  position: relative;
  top: -58px;
  left: 37px;
}
/* 按钮样式 */
.weui-btn_primary{
  width: 90%!important;
  height: 46px;
  background: #2F7DCD;
  border-radius: 5px;
}
.weui-btn_primary:not(.weui-btn_disabled):active{
  background: #1b72ca;
}
/* -------------- */
.attentionBtn{
  font-size: 18px;
  color: #2F7DCD;
}
</style>
<template>
  <div class="scavenging container">
    <div class="addressPart">
      <div class="address">
        <img style="width:25px;height20px;margin-bottom: -3px" src="./../../static/image/address1.png"/>
        <span>广东省东莞市麻涌镇</span>
      </div>
      <a href="">重新定位</a>
    </div>
    <div class="checkBox bs bg_fff">
      <p style="text-align:left;font-size: 17px;line-height: 24px;">现场动火作业</p>
      <div class="weui-cell__bd client-type mt10 tl">
        <span class="normal" >
          <a href="" class="weui-icon-circle" data-type="1"></a>
          <span class="user-type">正常</span>
        </span>
        <span class="abnormal">
          <a href="" class="weui-icon-circle selected" data-type="2"></a>
          <span class="user-type">不正常</span>
        </span>
      </div>
    </div>
    <wv-group class="textArea">
      <wv-textarea class="textAreaSize bs" placeholder="输入备注信息" :rows="3" :show-counter="false"></wv-textarea>
    </wv-group>
    <div class="checkBox bs bg_fff mt20">
      <p style="text-align:left;font-size: 17px;line-height: 24px;">消防器材完好性</p>
      <div class="weui-cell__bd client-type mt10 tl">
        <span class="normal" >
          <a href="" class="weui-icon-circle selected" data-type="1"></a>
          <span class="user-type">正常</span>
        </span>
        <span class="abnormal">
          <a href="" class="weui-icon-circle" data-type="2"></a>
          <span class="user-type">不正常</span>
        </span>
      </div>
    </div>
    <div class="checkBox bs bg_fff mt20">
      <p style="text-align:left;font-size: 17px;line-height: 24px;">该区域其他安全隐患</p>
      <div class="weui-cell__bd client-type mt10 tl">
        <span class="normal" >
          <a href="" class="weui-icon-circle" data-type="1"></a>
          <span class="user-type">无</span>
        </span>
        <span class="abnormal">
          <a href="" class="weui-icon-circle selected" data-type="2"></a>
          <span class="user-type">有</span>
        </span>
      </div>
    </div>
    <wv-group class="textArea">
      <wv-textarea class="textAreaSize bs" placeholder="输入备注信息" :rows="3" :show-counter="false"></wv-textarea>
    </wv-group>
    <div class="addPicture">
      <p>图片<span>✱</span></p>
      <div class="picPart mt15">
        <ul>
          <li><img src="./../../static/image/logo.png"/><i class="cancelIcon"></i></li>
          <li><img src="./../../static/image/logo.png"/><i class="cancelIcon"></i></li>
        </ul>
        <i class="addIcon"></i>
      </div>
    </div>
    <wv-button type="primary" class="btnStyle mt30 mb20">提交</wv-button>
    <a class="attentionBtn mb20" style="display:block;">巡检注意事项</a>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
