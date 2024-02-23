<script setup>
import CartItem from './CartItem.vue'
import { inject } from 'vue'

defineProps({
  cart: Array
});


const removeFromCart = inject('removeFromCart')

</script>


<template>
  <div class="flex flex-1 flex-col overflow-x-auto h-[400px]" v-auto-animate>
    <CartItem
      v-for="item in cart"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :image-url="item.imageUrl"
      :price="item.price"
      @remove-from-cart="removeFromCart(item)"
    />
  </div>
</template>