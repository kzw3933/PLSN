<template>
    <div>{{x}}</div>
    <button @click="x++" :style="{width: '60px', height: '30px'}"></button>
    <div>
        {{ moment().format('YYYY-MM-DD HH:mm:ss') }}
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import moment from 'moment';
    const x = ref<number>(456)
</script>

<style lang="less">
@red: red;
html, body {
    background-color: @red;
}
</style>