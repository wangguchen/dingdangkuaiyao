import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    totalPrice:0
}

const mutations = {
    ADD(state, price){
        return state.totalPrice += price
    },
    MINUS(state, price){
        return state.totalPrice -= price
    }

}

const actions = {
    add({commit}, price){
        commit('ADD', price)
    },
    minus({commit}, price){
        commit('MINUS', price) 
    }
}

const getters = {
    total: function(){
        return state.totalPrice
    }
}

// export default new Vue.Store(
//     state,
//     mutations,
//     actions,
//     getters 
// )
