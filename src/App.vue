<script setup>
import CardList from './components/CardList.vue';
import Header from './components/Header.vue';
import SearchBar from './SearchBar.vue';
import DropdownMenu from './DropdownMenu.vue';
import { onMounted, ref, watch, reactive, provide, computed } from 'vue'
import axios from 'axios';
import see  from './utils/utils.js'
import Drawer from './components/Drawer.vue';


// A BUNCH OF LOCAL STATES:
const items = ref([]);
const drawerOpen = ref(false);
const cart = ref([]);
const filters = reactive({
  sortBy: 'title', // now all these properties are reactive;
  searchQuery: ''
});
const total = computed(() => {
  let totalPrice = cart.value.reduce( (acc, item) => acc + item.price, 0)
  return totalPrice.toFixed(2) // returns a total with just 2 digits after the comma;
});

const fetchItems = async () => {
  // Func gets items from server and assigns them to items (local state)
  try {
    const params = { sortBy: filters.sortBy }

    if (filters.searchQuery) {
      // checking if we have filters set; If we do, we make the request WITH filters;
      params.title = `*${filters.searchQuery}*`
    }

     // FIXME[EASY](*): create an axios instance to shorten the code (check other projects for reference);
    // it is preferable to encapsulate that instance;
    const { data } = await axios.get(`https://df4b4c57be9170d6.mokky.dev/items`, { params })

    items.value = data.map((obj) => {
      // we take the item but ADD 2 properties more for local state:
      return {
        ...obj,
        isFavorite: false,
        favoriteId: null,
        isAdded: false
      }
    })
  } catch (err) { see(err) }
}
const fetchFavoritesAndUpdateItems = async () => {
  // this function cross-checks the favorite items with the items from the server and CHANGES the items[]
  // FIXME[MEDIUM](*) Ideally there should be 2 functions; one to fetch favorites and one to update items;
  try {
    const { data: favorites } = await axios.get(`https://df4b4c57be9170d6.mokky.dev/favorites`);

    items.value = items.value.map( (item) => {

      // checks if an parentId from favorites matches an item.id from items
      const favorite = favorites.find( (favorite) => favorite.parentId === item.id );

      // if we don't have a match, we just return the item;
      if (!favorite) { return item; }

      // if we do have a match we set it isFavorite property to true;
      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  }
  catch (err) { see(err) }
}
const fetchItemsAndUpdateFavorites = async () => {
  await fetchItems();
  await fetchFavoritesAndUpdateItems();
}
const resetAddedItems = () => {
  // In our implementation watch is CALLED ONLY when an order is sent to the server;
  items.value = items.value.map( (item) => {
    return {
      ...item,
      isAdded: false // nullifying isAdded property for all items immediately after an order is made;
    }
  })
}
const checkAndUpdateAddedItems = () => {
  // this function checks if an item is in the cart and updates its isAdded state;
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some( (cartItem) => cartItem.id === item.id )
  }))
}

// HOOKS:
onMounted(async () => {
  const localCart = localStorage.getItem('cart');
  cart.value = localCart ? JSON.parse(localCart) : [];

  await fetchItemsAndUpdateFavorites();

  checkAndUpdateAddedItems();

})

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
watch(filters, async () => {
  await fetchItemsAndUpdateFavorites();
  checkAndUpdateAddedItems();
})

watch(cart, () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}, { deep: true })

const toggleFavorite = async (item) => {
    // NB: in my implementation FLUX
   // icon gets UPDATED only when we know FOR SURE that the item was added/removed from Back End Favorites
  // only after the request itself (POST/DELETE) WAS COMPLETED the UI gets updated accordingly;
  if (!item.isFavorite) { // if item is not favorite do:
    try {
      const payload = { parentId: item.id } // Creates a favorite item on the server;
      const { data } = await axios.post(`https://df4b4c57be9170d6.mokky.dev/favorites`, payload)
      item.isFavorite = true; // Changing the FRONT-END to reflect that the item was added to favorites;
      item.favoriteId = data.id // saving the favorite id on Front-end; so we can delete it later
    }
    catch (err) { see(err) }
  }
  else {
    try {
      await axios.delete(`https://df4b4c57be9170d6.mokky.dev/favorites/${item.favoriteId}`)
      item.isFavorite = false; // Changing the FRONT-END to reflect that the item was removed from favorites
    }
    catch (err) { see(err) }
  }
}
const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value
}
const addToCart = (item) => {
  item.isAdded = true;
  cart.value.push(item);
  // total.value += item.price;
}
const removeFromCart = (item) => {
  // FIXME[EASY](*) remove this to removeCartItem (for consistency with the second func bellow)
  item.isAdded = false;
  cart.value = cart.value.filter( (cartItem) => cartItem.id !== item.id);
  checkAndUpdateAddedItems();
  // total.value -= item.price;
  // another approach (just in case first one bugs out);
  // cart.value.splice(cart.value.indexOf(item), 1);
}
const toggleCartItem = (item) => {
  if (!item.isAdded) { addToCart(item) }
  else { removeFromCart(item) }
}
const createOrder = async () => {
  try {
    const { data } = await axios.post(`https://df4b4c57be9170d6.mokky.dev/orders`,
      {
        items: cart.value,
        total: total.value
      }
    )
    cart.value = []; // nullifying cart value that will automatically nullify the total as well;

    return data;
  }
  catch (err) { see(err) }

  finally {
    resetAddedItems() // resetting the isAdded property of menu items;
  }
}



// GLOBALS:
provide('toggleDrawer', toggleDrawer); // 2 usages: Header.vue & DrawerHead.vue
provide('removeFromCart', removeFromCart); // 1 usage: CardItemList.vue

</script>

<template>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
     <Drawer
       v-if="drawerOpen"
       :cart="cart"
       :total="total"
       @create-order="createOrder"
     />

    <Header
      :total="total"
    />

    <div class="m-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold"> All Sneakers </h2>

        <div class="flex gap-4">
          <DropdownMenu
            :sort-by="filters.sortBy"
            :on-change-select="onChangeSelect"
          />
          <SearchBar
            :search-query="filters.searchQuery"
            :on-change-search="onChangeSearch"
          />
        </div>
      </div>

      <CardList
        :items="items"
        @toggle-favorite="toggleFavorite"
        @toggle-cart-item="toggleCartItem"
      />
    </div>
  </div>

</template>

<style scoped></style>