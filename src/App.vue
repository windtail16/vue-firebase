<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/nav.vue';
export default {
  components: {
    Nav
  }
}
</script>

<style>

</style>
