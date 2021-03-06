import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../components/Chat.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/Profile.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
