<template>
  <div>
    <div>
      <!-- 模板插值 -->
      {{ num }}
      {{ arr.map(v => ({num: v})) }}
    </div>
    <div>
      <!-- vue指令 -->
      <div v-text="str"></div>
      <div v-html="html"></div>
      <div v-if="bool">
        true
      </div>
      <div v-else>
        false
      </div>
      <div v-show="bool">
        content
      </div>
      <button v-on:click="onclick">点击</button>
      <div @click="parent">
        <button v-on:[event].stop="onclick">点击</button> <!--  阻止冒泡 -->
      </div>
      <div v-bind:id="id">
        {{ data }}
      </div>
      <div>
        <input v-model="data" type="text">
      </div>
    </div>
    <div v-for="item in strarr">
      {{ item }}
    </div>
    <div v-for="(item, index) in strarr">
      {{ item }} -- {{ index }}
    </div>

    <div :key="index" v-for="(item, index) in strarr">
      {{ item }} -- {{ index }}
    </div>
    <div v-once>
      {{ data }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  let num: number = 0;
  const arr: number[] = [1,2,3]
  const str: string = 'asdfghjkl'
  const html: string = "<span style='color:red'>asdfghjkl</span>"
  let bool: boolean = false
  const onclick = () => {
    num += 1;
    console.log('点击'+num+'次')
  }
  const event: string = 'click'
  const parent = () => {
    console.log('父组件点击')
  }
  let id = 'start'
  let data = ref('kzw')  // 使用ref才能成为响应式

  const strarr: string[] = ['tyyty', 'sjkjds', 'sjdkksd']
</script>

<style>

</style>