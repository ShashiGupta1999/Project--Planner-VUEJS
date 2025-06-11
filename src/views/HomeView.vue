<template>
  <div class="home">
    <div v-if="projects.length">
      <!-- <FilterNav @filterchange="current = $event" :current="current" /> -->
      <!-- <router-link to="/all">View All</router-link> -->

      <router-link to="/completed">Completed Projects</router-link>
      <router-link to="/ongoing">Ongoing Projects</router-link>
      <div v-for="project in filteredProject" :key="project.id">

        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />

      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
export default {
  name: 'HomeView',
  components: {SingleProject},
  data() {
    return {
      projects:[],
      current:'all'

    }
  },
  mounted(){
   
    fetch("http://localhost:3001/projects")
    .then(res => res.json())
    .then(data =>this.projects = data )
    .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id
      })
    }, 
    handleComplete(id){
          let p = this.projects.find(project => {
            return project.id === id
          })
          p.complete = !p.complete
    }
    
  },
   computed: {
    filteredProject() {
      if (this.current === 'completed') {
        return this.projects.filter(project => project.complete)
      }
      if (this.current === 'ongoing') {
        return this.projects.filter(project => !project.complete)
      }
      return this.projects

    }
  }
}
</script>
<style>
a {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-left: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}


a:hover {
  color: black;
}
</style>
