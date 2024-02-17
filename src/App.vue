<script setup>
import CardList from './components/CardList.vue';
import Header from './components/Header.vue';
import SearchBar from './SearchBar.vue'; 
import DropdownMenu from './DropdownMenu.vue'; 
import { onMounted, ref, watch, reactive } from 'vue';
import axios from 'axios';
import { see } from './utils/myJsUtils';
// import Drawer from './components/Drawer.vue';

// A BUNCH OF LOCAL STATES: 
const items = ref([])          
const filters = reactive({
  sortBy: 'title', // now all these properties are reactive;
  searchQuery: ''
}); 

const fetchItems = async () => { 
   // this func is DIRTY. 
  // better give it some params and encapsulate that logic in a separate file   
  try {
    const params = { sortBy: filters.sortBy }
    
    if (filters.searchQuery) { 
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`https://df4b4c57be9170d6.mokky.dev/items`, { params });

    items.value = data; // [!] assigning data from server to items (local state) 
  }
  catch (e) { see(e) }
}

// HOOKS:
onMounted(fetchItems); 

// EVENT HANDLERS:
const onChangeSelect = async (event) => { 
  // Func passes the event to the sortBy local state var; 
  filters.sortBy = event.target.value; 
}
const onChangeSearch = async (event) => { 
  // Func passes the event to the searchQuery local state var; 
  filters.searchQuery = event.target.value; 
}

// WATCHERS:
watch(filters, fetchItems); 

</script>

<template>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">

    <!-- <Drawer />  -->

    <Header />

    <div class="m-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold"> All Sneakers </h2>

        <div class="flex gap-4">

          <DropdownMenu 
          :sortBy="filters.sortBy"
          :onChangeSelect="onChangeSelect"
          />

          <SearchBar 
          :searchQuery="filters.searchQuery"
          :onChangeSearch="onChangeSearch"
          />

        </div>

      </div>

      <CardList :items="items" />
    </div>
  </div>
</template>

<style scoped></style>