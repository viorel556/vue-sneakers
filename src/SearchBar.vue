<script setup>
import { defineProps } from 'vue';

defineProps(
  { 
    searchQuery: String, 
    onChangeSearch: Function
  }
)
</script>

<template>
  <div class="relative">
    <!-- THE SEARCH BAR -->
    <img class="absolute left-3 top-3" src="/search.svg" alt="search">
    <input 
      class="border border-gray-200 py-2 px-10 rounded-xl outline-none focus:border-gray-400" 
      @input="onChangeSearch"
      placeholder="Search..."
      :value="searchQuery" type="text">
  </div>
</template>
