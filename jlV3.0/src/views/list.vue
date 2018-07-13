<!--  -->
<template>
  <div>
    <ul>
      <li>
        <router-link to="/noJurisdiction">无权限</router-link>
      </li>
      <li>
        <router-link to="/inspectionCode">输巡检码</router-link>
      </li>
      <li>
        <router-link to="/scavenging">扫码巡检</router-link>
      </li>
      <li>
        <router-link to="/success">提交成功</router-link>
      </li>
      <li>
        <router-link to="/attention">注意事项</router-link>
      </li>
      <li>
        <router-link to="/inspectionRecord">巡查记录</router-link>
      </li>
      <li>
        <router-link to="/recordDetails">巡查记录详情</router-link>
      </li>
      <li>
        <router-link to="/alarmRecord">报警记录</router-link>
      </li>
      <li>
        <router-link to="/alarmDetails">报警记录详情</router-link>
      </li>
      <li>
        <router-link to="/noResult">搜索无结果</router-link>
      </li>
      <li>
        <router-link to="/noRecord">无巡查记录</router-link>
      </li>
      <li>
        <router-link to="/inquiries">巡检查询</router-link>
      </li>
      <li>
        <router-link to="/resultList">巡检查询结果列表</router-link>
      </li>
      <li>
        <router-link to="/resultDetails">巡检查询结果详情</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
li {
  width: 100px;
  background: gainsboro;
  margin-top: 10px;
}
</style>
