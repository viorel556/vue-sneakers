<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

defineProps({
  imageUrl: String,
  title: String,
  price: Number, 

  // LOCAL STATE
  isFavorite: Boolean, // [!] ILEGAL MOVE; As per copilot we cannot keep local state within define props 
  isAdded: Boolean,

  // CALLBACKS 
  onClickAddToCart: Function,
  onClickAddToFavorites: Function
}); 

</script>

<template>
  <!-- FIXME: Encapsulate that styling logic in a Style:  -->
  <div class="relative bg-white border border-slate-200 rounded-3xl p-4 cursor-pointer 
    transition-all hover:translate-y-2 hover:shadow-xl"> 
    <div class="">
      <img 
      class="absolute top-8 left-8"
      :src="isFavorite ? '/like-1.svg' : '/like-2.svg'" 
      alt="Like"  
      @click="onClickAddToFavorites"
      />
      
      <img :src="imageUrl" alt="Sneaker" />

      <p class="mt-1"> {{ title }} </p>

      <div class="flex justify-between mt-5">

        <div class="flex flex-col">
          <span class="text-gray-400">Price</span>
          <b> {{ price }}</b>
        </div>

        <img 
        :src="isAdded ? '/checked.svg' : '/plus.svg'" 
        @click="onClickAddToCart" 
        alt="Plus"
        />

      </div>
    </div>
  </div>
</template> 

<style>

</style>