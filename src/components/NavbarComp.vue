

<template>

    <nav class="main-nav">
        <router-link to="/" >Projects</router-link>
        <router-link to="/add">Add new Project</router-link>

    </nav>
</template>
<script>

</script>
<style>
.main-nav{
    text-align: center;
    margin: 40px auto;
}
.main-nav a {
    display:  inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #999;
    font-size: 18px;
}
a.router-link-active{
    border-bottom: 2px solid green;
    padding-bottom: 4px;
}
</style>