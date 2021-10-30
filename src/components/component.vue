
<template>
  <h1>componentsition + vuex</h1>
  <h2 :style="{backgroundColor: titleInfo.color}">{{titleInfo.value}}</h2>
  <h3>{{ age }}</h3>
  <h3>{{ doubleAge }}</h3>
  <h3>store: {{ $store.state.age }}</h3>
  <input type="text" v-model="toName" @keydown.enter="addTodo(newTodo(toName))">
  <div v-for="item in items" :key="item.id">
    id:{{item.id}}
    name:{{item.name}}
    template: {{item.completed}}
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
type Todo = {
    id:number,
    name: string,
    completed: boolean

}
type TitleInfo = {
  value:string;
  color:string;
};
export default defineComponent({
  
  props: {
    titleInfo:{
      type:Object as PropType<TitleInfo>,
      required: true
    }
  },
  data(){
    return{
      age: 20,
      toName:"",
      items: [] as Todo[]
    }
  },
  computed:{
    doubleAge(): number{
      return this.$store.state.age *2

    }
  },
  methods:{
    newTodo(value: string): Todo{
      return {
        id: this.items.length,
        name: value,
        completed: false
      }
    },
    addTodo(data: Todo): void{
      this.items.push(data)
      console.log("this.items", this.items)
      this.toName = ''
    }
  }
})
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
