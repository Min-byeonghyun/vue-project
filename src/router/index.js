import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/blog/Blog.vue'
import BlogDetails from '../views/blog/BlogDetails.vue'
import SignupForm from '../components/SignupForm.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home,
  },
  {
    path: '/blogs',
    name: 'BlogPage',
    component: Blog,
  },
  {
    path: '/blogs/:id',
    name: 'BlogDetails',
    component: BlogDetails,
    props : true,
  },
  {
    path: '/signup',
    name: 'SignupForm',
    component: SignupForm,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
