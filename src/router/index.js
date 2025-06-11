import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProject from '../views/AddProject.vue'
import EditProject from '../views/EditProject.vue'
import CompletedProjects from '../components/CompletedProjects.vue'
import OngoingProjects from '../components/OngoingProjects.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'AddProject',
    component: AddProject
  },
  {
    path: '/projects/:id',
    name: 'EditProject',
    component: EditProject,
    props: true
  },
 
  { path: '/completed', 
    name: 'completed',
     component: CompletedProjects
    },
  { path: '/ongoing', 
    name: 'ongoing', 
    component: OngoingProjects
   }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
