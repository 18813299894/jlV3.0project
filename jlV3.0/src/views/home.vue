<style scoped>
.home{
  width:100%;
  height:100%;
  position: fixed;
  background:#F5F5F5;
}
.footNav{
  width:100%;
  height:52px;
  position:fixed;
  bottom:0;
}
.footNav .keyboardIcon{
  display:block;
  width:48px;
  height:52px;
  float:left;
  background:#fff;
}
.footNav .checkItem{
  display:block;
  width:121px;
  height:52px;
  line-height:52px;
  float:left;
  border-left:1px solid #d7cdcd;
  background:#fff;
  position:relative;
}
.footNav .checkItem p{
  font-size:15px;
  color: #4A4A4A;
}
/*---------上拉菜单-------------*/
.footNav .checkItem .pullUpmenu{
  width: 112px;
  height: 108px;
  border: 1px solid #DEDEDE;
  border-radius: 8px;
  background: #fafafa;
  position: absolute;
  top: -122px;
  left: 4.5px;
  box-sizing: border-box;
  padding: 10px;
}
.line{
  width: 100%;
  border-bottom: 1px solid #EBEBEB;
  margin: 10px 0;
}
.footNav .checkItem .pullUpmenu a{
  display: block;
  text-decoration:none;
  font-size: 15px;
  color: #4A4A4A;
  letter-spacing: 0;
  line-height :50px;
}
.footNav .checkItem .pullUpmenu .triangle-facing-right {
  display:inline-block;
  width:5px;
  height:5px;
  border-right:1px solid #DEDEDE;
  border-bottom:1px solid #DEDEDE;
  transform:rotate(45deg);
  background:#FAFAFA;
  position:absolute;
  top:105px;
  left:57px;
}
</style>
<template>
  <div class="home">
    <footer class="footNav">
      <div class="keyboardIcon"><img style="display:block;width:40px;height: 40px;margin:6px 0 0 4px" src="./../assets/keyboard.png" /></div>
      <div class="checkItem">
        <img src="./../assets/listIcon1.png" style="display: inline-block;width: 15px;height: 15px;margin-bottom: -2px;"/>
        <p style="display: inline-block;">巡检操作</p>
        <div class="pullUpmenu">
          <a href="/#/recoveryPage">扫一扫</a>
          <div class="line" style="margin:0"></div>
          <a href="/#/attentionPage">输巡检码</a>
          <div class="triangle-facing-right"></div>
        </div>
      </div>
      <div class="checkItem">
        <p>巡检查询</p>
      </div>
      <div class="checkItem">
        <img src="./../assets/listIcon1.png" style="display: inline-block;width: 15px;height: 15px;margin-bottom: -2px;"/>
        <p style="display: inline-block;">我的</p>
        <div class="pullUpmenu">
          <a href="">报警记录</a>
          <div class="line" style="margin:0"></div>
          <a href="">巡查记录</a>
          <div class="triangle-facing-right"></div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default{
  data () {

  }
}
</script>
