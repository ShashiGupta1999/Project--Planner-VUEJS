<template>
    <div class="project" :class="{complete:project.complete}">
        <div class="actions">
            <h3 @click="showdetails=!showdetails">{{ project.title }}</h3>

            <div class="icons">

                <router-link :to="{ name:'EditProject', params:{id:project.id}}" >
                    <span class="material-icons">
                        edit
                    </span>
                </router-link>
                <span @click="deleteProject" class="material-icons">
                    delete
                </span>
                <span @click="toggleComplete" class="material-icons check">
                    check
                </span>

            </div>
        </div>
        <div class="details" v-if="showdetails">
            <p>{{ project.details }}</p>
        </div>
    </div>
</template>

<script>
export default{
    props: ['project'],
    data(){
        return{
            showdetails:false,
            uri: 'http://localhost:3001/projects/' + this.project.id
        }
    },
   methods: {
       deleteProject() {
        fetch(this.uri, {method: 'DELETE'})
        .then(() => this.$emit('delete', this.project.id))
        .catch(err => console.log(err.message))

       },

       toggleComplete(){
        fetch(this.uri,
         {
            method: 'PATCH',
         headers:{'Content-Type': 'application/json'},
         body:JSON.stringify({complete: !this.project.complete})
    }).then(() => {
        this.$emit('complete', this.project.id)
    }).catch(err => console.log(err.message))

       }
      
   }
}
</script>

<style>
.project{
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 3px solid red;
}
h3{
    cursor: pointer;
}
.actions{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.material-icons{
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}
.material-icons:hover{
    color: #777;
}
.project.complete{
    border-left: 4px solid green;
}
.project.complete .check{
    color: green;
}

</style>