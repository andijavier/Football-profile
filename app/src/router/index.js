import Vue from 'vue'
import VueRouter from 'vue-router'
import Area from '../views/Area.vue'
import Clubs from '../views/Clubs.vue'
import ClubProfile from '../views/ClubProfile.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Area',
    component: Area
  },
  {
    path: '/clubs',
    name: 'Clubs',
    component: Clubs
  },
  {
    path: '/clubProfile',
    name: 'ClubProfile',
    component: ClubProfile
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
