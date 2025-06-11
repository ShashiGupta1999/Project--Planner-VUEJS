<!-- <template>

    <nav class="filter">
        <button @click="updateFilter('all')" :class="{active:current === 'all'}">View All</button>
        <button @click="updateFilter('completed')" :class="{ active: current === 'completed' }">Completed</button>
        <button @click="updateFilter('ongoing')" :class="{ active: current === 'ongoing' }">Ongoing</button>
    </nav>
</template>

<script>
export default{
    props: ['current'],
    methods:{
        updateFilter(by){
            this.$emit('filterchange',by)

        }
    }

}
</script>

<style>
.filter button{
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
}
.filter button.active{
    color: #555;
}
</style> -->