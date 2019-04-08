export default {
    addTodo(state, payload) {
        state.todos = [
            ...state.todos,
            payload
        ]
    },
    addTodos(state, payload = []) {
        state.todos = [
            ...state.todos,
            ...payload
        ]
    }
}
