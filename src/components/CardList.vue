<script setup>
import Card from './Card.vue'

defineProps({
  items: Array
})

// Callbacks are received via emit;
const emit = defineEmits(['toggleFavorite', 'addToCart']);

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
        :toggle-favorite="() => emit('toggleFavorite', item)"
        :add-to-cart="() => emit('addToCart', item)"
      />
    </div>
  </div>
</template>