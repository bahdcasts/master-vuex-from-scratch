import Axios from 'axios'
const url = 'https://5aa775d97f6fcb0014ee249e.mockapi.io/todos'

export default {
    addTodo({ state, commit }, payload) {
        // make api request to store todo
        // commit todo to vuex store
        Axios.post(url, { name: payload })
            .then(() => {
                commit('addTodo', payload)
            })
    },
    getTodos({ commit }) {
        Axios.get(url).then(response => {
            commit('addTodos', response.data.map(item => item.name))
        })
    }
}
