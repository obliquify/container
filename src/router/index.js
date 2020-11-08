import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from '../views/TodoList.vue'
import Comments from '../views/Comments'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todoList',
    name: 'TodoList',
    component:TodoList
  },
  {
    path: '/comments',
    name: 'Comments',
    component:Comments
  },
  {
    path: '/about',
    name: 'About',
    component:About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
