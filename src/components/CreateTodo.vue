<template>
    <input v-model="todo" @keyup.enter="saveTodo" type="text" placeholder="Todo item ">
</template>

<script>

    export default {
        data: () => ({
            todo: ''
        }),

        methods: {
            saveTodo() {
                this.$store.dispatch('todos/addTodo', this.todo)
            }
        }
    }
</script>
