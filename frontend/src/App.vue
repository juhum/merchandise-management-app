<template> 
  <div id="app">
    <header>
      <h1>Goods Management</h1>
      <nav>
        <router-link to="/">Home</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Reset default margin and padding */
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Set app styles */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background: #42b983;
  padding: 20px;
  color: white;
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

main {
  padding: 20px;
}
</style>
