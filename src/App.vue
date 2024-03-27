<template>
    <div>
      {{ man }}
    </div>
    <hr>
    <div>
      <button @click="change">点击</button>
    </div>
</template>

<script setup lang='ts'>
// toRef 只能修改对象的值对于非响应式对象视图无变化, 可提取响应式对象的属性且不丢失其响应性
// toRefs 如果是一个响应式对象，提取其所有属性为响应式到一个新对象返回
// toRaw 去除响应式效果
    import {ref, reactive, toRef, toRefs, toRaw} from 'vue'

    
    const man = reactive({
      name: '张三',
      age: 18
    })

    let name_ = toRef(man, 'name')

    let {name, age} = toRefs(man)

    const change = () => {
      name_.value = '李四'
      // man.name = '李四'
      console.log(name)
      console.log(name)
      console.log(age)
    }
</script>

<stype scoped>

</stype>