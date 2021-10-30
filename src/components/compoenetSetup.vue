
<template> 
  <h1>componentsition api + vuex</h1>
  <h2 :style="{backgroundColor: titleInfo.color}">{{titleInfo.value}}</h2>
  <h3>{{ age }}</h3>
  <h3>{{ doubleAge }}</h3>
  <h3>store: {{ $store.state.age }}</h3>
  <input type="text" v-model="toName" @keydown.enter="addTodo(newTodo(toName))">
  <div class="1" v-for="item in items" :key="item.id">
    id:{{item.id}}
    name:{{item.name}}
    template: {{item.completed}}
  </div>
  <div class="2" v-for="item in todos" :key="item.id">
    id:{{item.id}}
    name:{{item.name}}
    template: {{item.completed}}
  </div>
</template>

<script setup lang="ts">
import { PropType, defineProps, ref, computed} from 'vue'
import { useStore } from 'vuex'  // vuex4.0+ 提供一个useStore方法，可以返回一个store实例
import { key } from '../store';

type Todo = {
    id:number,
    name: string,
    completed: boolean

}
type TitleInfo = {
  value:string;
  color:string;
};

const store = useStore(key)  // store实例, 有了store以后，所有的ref()都被认作计算属性去处理

// 属性声明
defineProps({
    titleInfo:{
        type:Object as PropType<TitleInfo>,
        required: true
    }
})
const age = ref(22)
const toName = ref('')
const doubleAge = computed(
    function(){
       return store.state.age*2
    }
)
const todos = computed(()=> store.state.todo?.todos)
// todos初始化
store.dispatch("todos/initTodo")
const newTodo = (toName: string):Todo=>{
    return {
        id: items.value.length,
        name: toName,
        completed: true
    }
}
const addTodo= function(data: Todo):void{
    items.value.push(data)
    toName.value=''
}
const items = ref([] as Todo[])

</script>



<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
