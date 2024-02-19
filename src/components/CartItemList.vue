<script setup>
import CartItem from './CartItem.vue'
import { inject } from 'vue'

defineProps({
  cart: Array
})

const addToCart = inject('addToCart');

const onClickRemove = (item) => {
  addToCart(item);
}

</script>


<template>
  <div class="flex flex-1 flex-col">
    <CartItem
      v-for="item in cart"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :image-url="item.imageUrl"
      :price="item.price"
      @onClickRemove="onClickRemove(item)"
    />
  </div>
</template>