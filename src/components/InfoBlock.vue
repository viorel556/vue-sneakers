<script setup>

defineProps({
  title: String,
  imageUrl: String,
  description: String
});


 // FIXME[EASY](**): For the empty cart page, its good UX to have a "GO BACK" button;
// it would also CENTER the current elements more nicely; Just copy the order button and change it;
</script>

<template>
  <div class="flex flex-col items-center w-72 mx-auto">
    <img height="100" width="100" :src="imageUrl" alt="image">
    <h2 class="mt-4 text-2xl font-bold mr-0 ml-0 flex">{{ title }}</h2>
    <p class="text-gray-400">{{ description }}</p>
  </div>
</template>

<style scoped>

</style>