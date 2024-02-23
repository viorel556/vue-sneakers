<script setup>
import Card from './Card.vue'

defineProps({
    items: Array
})

// Callbacks are received via emit;
const emit = defineEmits(['toggleFavorite', 'toggleCartItem']);

</script>

<template>
    <div class="p-5">

        <div class="grid grid-cols-4 gap-5 m-5" v-auto-animate>
            <Card v-for="item in items" :key="item.id" :id="item.id" :title="item.title" :image-url="item.imageUrl"
                :price="item.price" :is-added="item.isAdded" :is-favorite="item.isFavorite"
                :toggle-favorite="() => emit('toggleFavorite', item)"
                :toggle-cart-item="() => emit('toggleCartItem', item)" />
        </div>
    </div>
</template>
