<script setup>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import see from '@/utils/utils.js';
import CardList from '@/components/CardList.vue';

const favorites = ref([])

defineProps({
    toggleFavorite: Function,
    toggleCartItem: Function
})

const getFavoriteItems = async () => {
    try {
        const { data } = await axios.get('https://df4b4c57be9170d6.mokky.dev/favorites');
        favorites.value = data;
    }
    catch (err) { see(err) }
}

onMounted(async () => {
    await getFavoriteItems();
});

</script>

<template>
    <h1 class="text-2xl font-bold">My favorites: </h1>
    <CardList
      :items="favorites"
      @toggle-favorite="toggleFavorite"
      @toggle-cart-item="toggleCartItem"
    />
</template>

<style scoped>
</style>
