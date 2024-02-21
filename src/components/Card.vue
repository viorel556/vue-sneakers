<script setup>

defineProps({
  // DATA FROM SERVER:
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  // LOCAL STATE
  isFavorite: Boolean, // [!] ILLEGAL MOVE; As per copilot we cannot keep local state within define props
  isAdded: Boolean,
  // CALLBACKS:
  toggleFavorite: Function,
  toggleCartItem: Function
})

</script>

<template>
  <!-- FIXME[EASY](**): Encapsulate that styling logic in a usual CSS:  -->
  <div class="relative bg-white border border-slate-200 rounded-3xl p-4 cursor-pointer 
    transition-all hover:translate-y-2 hover:shadow-xl">
    <div class="">
      <img
        class="absolute top-8 left-8 transition-all hover:scale-125"
        :src="isFavorite ? '/like-1.svg' : '/like-2.svg'"
        alt="Like"
        @click="toggleFavorite"
      />

      <img :src="imageUrl" alt="Sneaker" />

      <p class="mt-1"> {{ title }} </p>

      <div class="flex justify-between mt-5">

        <div class="flex flex-col">
          <span class="text-gray-400">Price</span>
          <b> {{ price }} €</b>
        </div>

        <img
          @click="toggleCartItem"
          class="hover:scale-125 transition-all"
          :src="isAdded ? '/checked.svg' : '/plus.svg'"
          alt="Plus"
        />

      </div>
    </div>
  </div>
</template>

<style>
</style>