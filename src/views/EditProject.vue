<template>
    <form @submit.prevent="handleUpdate">

        <label for="title">Title</label>
        <input type="text" v-model="title" required>
        <label for="details">Details</label>
        <textarea v-model="details" required></textarea>

        <button>Update Project</button>
    </form>
</template>
<script>

export default {
    props: ['id'],
data(){
    return{
        title:'',
        details:'',
        uri:'http://localhost:3001/projects/' + this.id
    }
},
mounted(){
    fetch(this.uri)
    .then(res => res.json())
    .then(data => {
        this.title = data.title
        this.details = data.details
        console.log(data)
    })
},
methods:{
    handleUpdate(){
        fetch(this.uri,
            {
                method:'PATCH',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({title:this.title, details:this.details})
            }).then(() =>{
                this.$router.push('/')
            }).catch((err) => console.log(err.message))

    }
}
}

</script>

<style>
form {
    background: white;
    padding: 20px;
    border-radius: 10px;
}

label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
}

input {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
}

textarea {
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
}

form button {
    display: block;
    margin: 20px auto 0;
    background: green;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
}
</style>