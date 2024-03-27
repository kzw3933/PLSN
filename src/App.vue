<template>
    <div> 
        {{man}}
    </div>
    <div>
      {{ man2 }}
    </div>
    <hr>
    <div>
      {{ obj }}
    </div>
    <hr>
    <div ref="dom">Dom节点</div>
    <button @click="change1">button1</button>
    <button @click="change2">button2</button>
</template>

<script setup lang='ts'>
    import {ref, isRef, shallowRef, triggerRef, customRef} from 'vue'

    type Man = {
      name: string
    }

    const man = ref<Man>({
      name: 'xm'
    })

    const man2 = shallowRef<Man>({
      name: 'xm2'
    })

    const dom = ref<HTMLDivElement>() // 捕获dom对象

    const change1 = () => {
      man.value.name =  man.value.name + 's'
      console.log(isRef(man));

      console.log(dom.value?.innerHTML);
    }

    const change2 = () => {
      // man2.value.name =  man2.value.name + 'd' 通过name赋值不会触发响应, 
      // 但是ref和shallowRef的数据同时被修改会触发响应, 可使用triggerRef(man2)触发响应
      man2.value = {
        name: man2.value.name + 'd'
      }
    }

    function MyRef<T>(value: T) {
      return customRef((track, trigger) => {
        return {
          get() {
            track()
            return value
          },
          set(newVal) {
            value = newVal
            trigger()
          }
        }
      })
    }

    const obj = MyRef<string>('myref')

</script>

<stype scoped>

</stype>