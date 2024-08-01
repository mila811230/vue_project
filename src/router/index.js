import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import LoginView from '../views/LoginView.vue'
import BasicView from '../views/BasicView.vue'
import LoginTeacherver from '../views/LoginTeacherver.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/subsub',
    name: 'subsub',
    component: LoginView
  },
  {
    path: '/basic',
    name: 'BasicView',
    component: BasicView
  },
  {
    path: '/form-container',
    name: 'LoginTeacherver',
    component: LoginTeacherver
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
