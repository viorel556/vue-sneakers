
<script setup>
import Card from './Card.vue' 

function onClickAddToCart () { 
  // ADDS AN ELEMENT TO THE CART; 
  alert("ELEMENT ADDED TO CART");
}

function onClickAddToFavorites() { 
  // ADDS AN ELEMENT TO THE FAVORITES; 
  alert("ELEMENT ADDED TO FAVORITES");
}

</script>

<template>
  <div class="p-10">
    <h2 class="text-3xl font-bold px-10"> All Sneakers </h2>

    <div class="grid grid-cols-4 gap-5 m-10">
      <Card 
      image-url="/sneakers/sneakers-1.jpg" 
      title="Male sneakers Puma Huiuma" 
      :price="1300" 
      :is-added="true"
      :is-favorite="true"
      :onClickAddToCart="onClickAddToCart"
      :onClickAddToFavorites="onClickAddToFavorites"
      />

    </div>
  </div>
</template>