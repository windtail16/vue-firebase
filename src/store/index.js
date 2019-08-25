import Vue from 'vue';
import Vuex from 'vuex';

import {firebaseAuth} from '../firebase'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    SignIn({commit}, payload) {
      firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        (user) => {
          const userInfo = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', userInfo)
          console.log(user); 
        }
      )
      .catch(
        (error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          // console.log(error);
        }
      )
    },
    logout () {
      firebaseAuth
      .signOut()
      .then()
      .catch((error) => console.error(`SingOut Error: ${error}`))
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    }
  }
})
