<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
</script>

<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">

    <div class="flex items-center gap-4">
      <!-- LEFT SECTION HEADER -->
      <img src="/logo.png" alt="logo" class="w-12">
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
        <p class="text-gray-400 font-light">The best sneakers shop in Moldova</p>
      </div>
    </div>

    <ul class="flex items-center gap-10">
      <!-- RIGHT SECTION HEADER -->
      <li class="nav_item">
        <img src="/cart.svg" alt="Cart">
        <b> 1200 EUR </b>
      </li>

      <li class="nav_item">
        <img src="/heart.svg" alt="Favorites">
        <span> Favorites </span>
      </li>

      <li class="nav_item">
        <img src="/profile.svg" alt="Profile">
        <span> Profile </span>
      </li>
    </ul>

  </header>
</template>

<style>
.nav_item {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem; 
  color: #64748b; 
}.nav_item:hover {
  color: #000; 
}

</style>