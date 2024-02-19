<script setup>
import { inject } from 'vue'

// Injecting a global func:
const toggleDrawer = inject('toggleDrawer');
</script>

<template>
  <!-- [!] FIXME: This component can be reused by passing to it a certain route link;  -->

  <div class="flex items-center gap-5 mb-5" @click="toggleDrawer">
    <svg class="opacity-30 cursor-pointer rotate-180 hover:opacity-100 z-20 transition hover:-translate-x-1" width="16"
      height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="black" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
    <h2 class="text-2xl font-bold">Cart</h2>
  </div>
</template>