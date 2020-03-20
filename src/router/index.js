import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Quotes from '../views/Quotes.vue'
import Contact from '../views/Contact.vue'
import Links from '../views/Links.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: Quotes
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/links',
    name: 'Links',
    component: Links
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
