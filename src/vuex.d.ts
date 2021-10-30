// .d.ts 强类型声明式文件
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { State } from './store/index';

// 模块扩展
// this.$store强类型的支持
declare module '@vue/runtime-core' {  // declare 声明一下模块 地址
    interface ComponentCustomProperties {  // ComponentCustomProperties 是一个接口，扩展的话 需要一个 $store 属性
        $store: Store<State>  // Store 是一个范型类型，需要穿一个根状态的基础类型<State>，然后在组件上直接使用this.$store就能获取到state的数据
    }
}