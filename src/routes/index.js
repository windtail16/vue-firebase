import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../views/'
import SignIn from '../views/signin'
import SignUp from '../views/signup'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/signup',
      component: SignUp
    }
  ]
})