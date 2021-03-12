<template>
  <div id="app">
    <img :src="require('@/assets/logo.png')">
    <div>
      <p>
        默认集成ElementUI框架
      </p>
    </div>
    <HelloWorld msg="欢迎使用第一个 M³ 小应用"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>

body{
  background-image: url( "./assets/bg.jpg");
  background-size: cover;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}

</style>
