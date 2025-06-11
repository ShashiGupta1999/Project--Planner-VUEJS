<template>
    <div>
        <router-link to="/completed">Completed Projects</router-link>
        <router-link to="/ongoing">Ongoing Projects</router-link>
        <div v-if="projects.length">
            <SingleProject v-for="project in projects" :key="project.id" :project="project" @delete="handleDelete"
                @complete="handleComplete" />
        </div>
        <div v-else>
            <p>No completed projects available.</p>
        </div>
    </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
export default {
    name: 'CompletedProjects',
    components: { SingleProject },
    data() {
        return {
            projects: []
        }
    },
    mounted() {
        fetch("http://localhost:3001/projects")
            .then(res => res.json())
            .then(data => this.projects = data.filter(project => project.complete))
            .catch(err => console.log(err.message))
    },
    methods: {
        handleDelete(id) {
            this.projects = this.projects.filter((project) => project.id !== id)
        },
        handleComplete(id) {
            let p = this.projects.find(project => project.id === id)
            p.complete = !p.complete
        }
    }
}
</script>
<style scoped>
p{
    font-weight: bold;
    color: #bbb;
    text-align: center;
    padding: 50px;
}
</style>