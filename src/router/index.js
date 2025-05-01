import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Planet from '../views/Planet.vue' 
const routes = [
  { path: '/', component: Home },
  { path: '/planets', component: Planet } 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router