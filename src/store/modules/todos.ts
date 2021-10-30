// 模块化

import { Todo } from '../../types';
import { Module } from "vuex";
import { State } from '..';
const initialState = {
    todos: [] as Todo[]
}

export type TodoState = typeof initialState;

export default{
    namespaced: true,
    state: initialState,
    mutations: {
        initTodo(state, payload: Todo[]){
            state.todos = payload
        },
        addTodo(state, payload: Todo){
            state.todos.push(payload)
        }
    },
    actions:{
        initTodo({commit}){
            setTimeout(()=>{
                commit("initTodo", [{
                    id:1,
                    name: "lijinwei",
                    complated: true
                }])
            }, 500)
        }
    }
} as Module<TodoState, State>