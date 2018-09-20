import Vue from 'vue'
import Vuex from 'vuex'
//import mutations from './mutations'
Vue.use(Vuex)


const store = () => new Vuex.Store({
    state:{
        counter:0,
        vip:3
    },
    mutations: {
        increment (state) {
            state.counter++
        }
    }
})
export default store;

// import user from './user/';
// import page from './page/';
// import menu from './menu/';

// export default new Vuex.Store({
//     modules: {
//         user,
//         page,
//         menu
//     }
// });
