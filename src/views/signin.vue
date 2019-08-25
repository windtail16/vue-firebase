<template>
  <div>
    <h1>SIGN IN</h1>
    <form @submit.prevent="onSignin">
      <div>
        <label for="email">email</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" id="password" v-model="password">
      </div>
      <div>
        <button type="submit">SIGN IN</button>
      </div>
    </form>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
 
  methods: {
    onSignin () { 
      this.$store.dispatch('SignIn', {email: this.email, password: this.password})
    }
  },
}
</script>
