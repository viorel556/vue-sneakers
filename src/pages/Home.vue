<script setup>
import DropdownMenu from '@/DropdownMenu.vue'
import SearchBar from '@/SearchBar.vue'
import CardList from '@/components/CardList.vue'
import { watch } from 'vue'

const props = defineProps({
  items: Array,
  filters: Object,
  toggleFavorite: Function,
  toggleCartItem: Function,
  fetchItemsAndUpdateFavorites: Function,
  checkAndUpdateAddedItems: Function
})

// EVENT HANDLERS:
const onChangeSelect = async (event) => {
  // Func passes the event to the sortBy local state var (in App.vue);
  props.filters.sortBy = event.target.value
}
const onChangeSearch = async (event) => {
  // Func passes the event to the searchQuery local state var (in App.vue);
  props.filters.searchQuery = event.target.value
}

</script>

<template>
  <div class="flex justify-between items-center">
    <h2 class="text-3xl font-bold"> All Sneakers </h2>

    <div class="flex gap-4">
      <DropdownMenu
        :sort-by="props.filters.sortBy"
        :on-change-select="onChangeSelect"
      />
      <SearchBar
        :search-query="props.filters.searchQuery"
        :on-change-search="onChangeSearch"
      />
    </div>
  </div>

  <CardList
    :items="props.items"
    @toggle-favorite="props.toggleFavorite"
    @toggle-cart-item="props.toggleCartItem"
  />
</template>

<style scoped>

</style>