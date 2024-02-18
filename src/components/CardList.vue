<script setup>
import Card from './Card.vue'
import { inject } from 'vue'

const props = defineProps({
  items: Array
})

const addToFavorites = inject('addToFavorites');


</script>

<template>
  <div class="p-5">
    <div class="grid grid-cols-4 gap-5 m-5">
      <Card
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :image-url="item.imageUrl"
        :price="item.price"
        :is-added="item.isAdded"
        :is-favorite="item.isFavorite"
        :onCLickAddToFavorites="() => addToFavorites(item)"
      />
    </div>
  </div>
</template>