<script setup>
  import CardList from './components/CardList.vue';
  import Header from './components/Header.vue';
  import Drawer from './components/Drawer.vue';
  
</script>

<template>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    
    <Drawer /> 

    <Header />

    <CardList />
    

  </div> 
</template>

<style scoped>

</style>