
<script setup>
import Card from './Card.vue' 

defineProps({
    items: Array
}); 

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
  <div class="p-5">

    <div class="grid grid-cols-4 gap-5 m-5">
      <Card 
      v-for="item in items"
      :key="item.id"
      :title="item.title" 
      :image-url="item.imageUrl" 
      :price="item.price" 
      :is-added="item.isAdded"
      :is-favorite="item.isFavorite"
      :onClickAddToCart="onClickAddToCart"
      :onClickAddToFavorites="onClickAddToFavorites"
      />
    </div>
  </div>
</template>