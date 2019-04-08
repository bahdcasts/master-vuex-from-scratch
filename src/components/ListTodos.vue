<template>
    <ul>
        <li v-for="(todoitem, index) in todos" :key="index">
            {{ todoitem }}
        </li>
    </ul>
</template>


<script>
    export default {
        computed: {
            todos() {
                return this.$store.state.todos.todos
            }
        }
    }
</script>
