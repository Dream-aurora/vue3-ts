import { createStore } from 'vuex'
import { InjectionKey } from 'vue'
import todos,{TodoState}  from './modules/todos'
// 创建一个injectionKey, 用来约束state声明
export const key: InjectionKey<Store<State>> = Symbol()
export type State={
    age: number,
    todos?: TodoState, // todos不一定有，需要加一个问号
}

export default createStore({
    state: {
        age: 18
    },
    mutations:{
        add(state) {
            state.age++
        }
    },
    // 声明子模块
    modules:{
        todos
    }
})