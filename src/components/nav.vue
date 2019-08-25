<template>
  <div>
    <ul class="nav">
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/signin">SIGNIN</router-link></li>
      <li><router-link to="/signup">SIGNUP</router-link></li>
      <li>
        <router-link to="#" v-on:click.native="Signout()">SIGNOUT</router-link>
      </li>
    </ul>
  </div>
</template>
<script>


export default {

  methods: {
    Signout () {
      console.log('로그아웃 작업 전');
      
    }
  }
}
</script>
<style scoped>
.nav {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav:after {
  clear: both;
  display: block;
  content: '';
}
.nav li {
  float: left;
  margin-left: 10px;
}
</style>