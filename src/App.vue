<template>
    <div>
      <form>
        <input v-model="form.name" type="text">
        <br>
        <input v-model="form.age" type="text">
        <br>
        <button @click.prevent="submit">提交</button>
      </form>
    </div>
    <div>
      {{ obj }}
    </div>
</template>

<script setup lang='ts'>
// ref支持所有类型, reactive支持引用类型: Array object Map Set
// ref取值、赋值都需要使用`.value`, reactive不需要
// reactive 使用proxy实现 不能直接赋值，否则会破坏响应式对象 
    import {ref, reactive, readonly, shallowReactive } from 'vue';
    let form = reactive({
      name: 'xm',
      age: 23
    }) 

    const read = readonly(form); // 只读，但是直接修改form还是会影响

    const submit = () => {
      console.log(form)
      console.log(read)
    }

    let obj = shallowReactive({
      fool: {
        bar: {
          num: 1
        }
      }
    }) // 只对修改obj.fool触发响应(即只深入一层)
</script>

<stype scoped>

</stype>