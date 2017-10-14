<template>
 <div class="row m-0 p-5" id="app1">
    <img src="../assets/logo.png">
      <h1>{{ msg }}</h1>
    <h2>test</h2>
    <ul>
      <li><router-link to="/first">Go to 1th</router-link></li>
      <li><router-link to="/second">Go to 2th</router-link></li>
      <li><router-link to="/parent">Go to parent</router-link></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data: () => ({
      msg: 'Welcome to Your Vue.js App'
    })
  }
</script>
<style>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
