<template>
  <div id="app">
    <div>
      <h1 class="header">CONTAINER</h1>
    </div>

    <div class="topnav">
      <router-link to="/">Home</router-link>
      <router-link to="/todoList">Tasks</router-link>
      <router-link to="/comments">Thoughts</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
* {
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  padding: 0;
  margin: 0;
}

.topnav {
  overflow: hidden;
  background-color: #eff1ed;
}

.topnav a {
  float: left;
  color: #a9a9;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #83c5be;
  color: white;
}

.header {
  background-color: #C9D5B5;
  color: #fff;
  font-style: oblique;
  font-size: 75px;

  padding: 40px;
}
</style>
