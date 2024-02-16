<script setup>
import CardList from './components/CardList.vue';
import Header from './components/Header.vue';
// import Drawer from './components/Drawer.vue';

</script>

<template>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">

    <!-- <Drawer />  -->

    <Header />


    <div class="m-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold"> All Sneakers </h2>



        <div class="flex gap-4">
          <!-- THE DROPDOWN -->
          <select class="py-2 px-4 border rounded-md outline-none" name="" id="">
            <option value=""> By Name </option>
            <option value=""> By Price (cheap)</option>
            <option value=""> By Price (expensive)</option>
          </select>

          <div class="relative">
            <!-- THE SEARCH BAR -->
            <img class="absolute left-3 top-3" src="/search.svg" alt="search">
            <input class="border border-gray-200 py-2 px-10 rounded-xl outline-none focus:border-gray-400"
              placeholder="Search..." type="text">
          </div>

        </div>

      </div>

      <CardList />
    </div>





  </div>
</template>

<style scoped></style>