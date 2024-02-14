<script setup>
  import Header from './components/Header.vue'
  import Card from './components/Card.vue' 
</script>

<template>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    
    <Header />

    <di class="p-10">
      <h2 class="text-3xl font-bold px-10"> All Sneakers </h2>

      <div class="grid grid-cols-4 gap-5 m-10">
        <Card />

      </div>
    </di>

  </div> 
</template>

<style scoped>
</style>