<script setup>
import { ref } from 'vue';
// import see from "../utils/myJsUtils"; 

// COMPOSITION API: 
let count = ref(0);

function increment() {
    count.value++;
}


</script>

<template>
    <!--  HERE IS THE LAYOUT ITSELF -->

    <h1>{{ count }}</h1>
    <button @click="increment"> + </button>
</template>
