<template>
  <div id="header">
    <div class="container">
      <div class="logo">Vue Train</div>
      <ul id="nav" class="float-right">
        <router-link tag="li" to="/" exact>Home</router-link>
        |
        <router-link tag="li" to="/about">About</router-link>
        |
        <router-link tag="li" to="/team">Team</router-link>
        |
        <router-link tag="li" to="/contact">Contact</router-link>
        |
        <router-link tag="li" to="/alerts">Alerts</router-link>
      </ul>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#header {
  background-color: #ddd;
  color: green;
  .logo {
    float: left;
    padding: 25px;
    font-size: 25px;
  }
  ul li {
    display: inline-block;
  }
}
</style>
