<template>
  <div id="app" class="backColor">
    <h2 class="backColor">
      <i class="fas fa-futbol"></i>
      Football Club Profile
    </h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5vh;
}
.backColor {
  color: #000000
}
</style>
