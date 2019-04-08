import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import todos from './todos'

const store = new Vuex.Store({
    modules: {
        todos
    }
})

export default store
