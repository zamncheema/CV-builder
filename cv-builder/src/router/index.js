import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuilderView from '../views/BuilderView.vue'
import PreviewView from '../views/PreviewView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/builder', name: 'builder', component: BuilderView },
  { path: '/preview', name: 'preview', component: PreviewView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router