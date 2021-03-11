<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>安装及发布</h3>
    <ul>
      <li><a href="https://github.com/wecise/m3-app-template" target="_blank" rel="noopener">源码</a></li>
      <li><a href="/help/INSTALL.html" target="_blank" rel="noopener">安装</a></li>
    </ul>
    <h3>开发文档</h3>
    <ul>
      <li><a href="/help/REST_API.html" target="_blank" rel="noopener">REST_API_DOC</a></li>
      <li><a href="/help/SCRIPT_JS_DOC" target="_blank" rel="noopener">SERVER_JS_DOC</a></li>
      <li><a href="/help/RULE_DOC.html" target="_blank" rel="noopener">规则引擎文档 v1.0.3</a></li>
      <li><a href="/help/ODB_TRIGGER.html" target="_blank" rel="noopener">ODB触发器文档 v1.0.0</a></li>
      <li><a href="/help/FORWARD.html" target="_blank" rel="noopener">数据接入(Forward)</a></li>
    </ul>
    <h3>培训中心</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">安装</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">开发</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">数据接入</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">数据建模</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">数据消费</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
