import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import LoginView from '../views/LoginView.vue'
import BasicView from '../views/BasicView.vue'
import LoginTeacherver from '../views/LoginTeacherver.vue'
import PracSelf from '../views/PracSelf.vue'
import DeepView from '../views/DeepView.vue'
import DeepView2 from '../views/DeepView2.vue'
import CalculatorView1 from '../views/CalculatorView1.vue'
import CalculatorView2 from '../views/CalculatorView2.vue'
import CalculatorView3 from '../views/CalculatorView3.vue'
import CalculatorView4 from '../views/CalculatorView4.vue'
import MixView from '../views/MixView.vue'
import UserView from '../views/UserView.vue'
import MemberView from '../views/MemberView.vue'

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
    name: 'TestView',
    component: TestView
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/BasicView',
    name: 'BasicView',
    component: BasicView
  },
  {
    path: '/LoginTeacherver',
    name: 'LoginTeacherver',
    component: LoginTeacherver
  },
  {
    path: '/pracSelf',
    name: 'PracSelf',
    component: PracSelf
  },
  {
    path: '/DeepView',
    name: 'DeepView',
    component: DeepView
  },
  {
    path: '/DeepView2',
    name: 'DeepView2',
    component: DeepView2
  },
  {
    path: '/CalculatorView1',
    name: 'CalculatorView1',
    component: CalculatorView1
  },
  {
    path: '/CalculatorView2',
    name: 'CalculatorView2',
    component: CalculatorView2
  },
  {
    path: '/CalculatorView3',
    name: 'CalculatorView3',
    component: CalculatorView3
  },
  {
    path: '/CalculatorView4',
    name: 'CalculatorView4',
    component: CalculatorView4
  },
  {
    path: '/MixView',
    name: 'MixView',
    component: MixView
  },
  {
    path: '/UserView',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/MemberView',
    name: 'MemberView',
    component: MemberView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
