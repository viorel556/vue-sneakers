<script setup>
  import { defineProps } from 'vue'

  defineProps({
    sortBy: String,
    onChangeSelect: Function
  }); 

</script>

<template>
  <select @change="onChangeSelect" class="py-2 px-4 border rounded-md outline-none" name="" id="">
    <!-- THE DROPDOWN MENU -->
    <option value="name"> By Name </option>
    <option value="price"> By Price (cheap)</option>
    <option value="-price"> By Price (expensive)</option> 
  </select>
</template>
