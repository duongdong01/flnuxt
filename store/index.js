/* eslint-disable guard-for-in */
import axios from 'axios';
import Vuex from 'vuex';

const createStore = () => new Vuex.Store({
    state: {
        users: [],
    },
    mutations: {
        addUer(state, user) {
            state.users.push(user);
        },
        setUser(state, users) {
            state.users = users;
        },
    },
    actions: {
        async setUsers(vuexcontext) {
            await axios.get('https://flextext-f544f-default-rtdb.firebaseio.com/user.json').then((response) => {
                // console.log('data :', response);
                const arrayUser = [];
                // eslint-disable-next-line no-restricted-syntax
                for (const key in response.data) {
                    arrayUser.push({ ...response.data[key], id: key });
                }
                vuexcontext.commit('setUser', arrayUser);
                // console.log(vuexcontext.state.users);
            });
        },

        // setUser(vuexcontext, users) {
        //     vuexcontext.commit('setUser', users);
        // },
    },
    getters: {
        Users(state) {
            return state.users;
        },
    },
});

export default createStore;
