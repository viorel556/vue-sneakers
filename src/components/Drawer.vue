<script setup>
import DrawerHead from './DrawerHead.vue';
import CartItemList from './CartItemList.vue';
import { calculateTax } from '../utils/utils.js'
import InfoBlock from '@/components/InfoBlock.vue'

const emit = defineEmits(['createOrder']);

defineProps({
  cart: Array,
  total: Number,
})



</script>

<template>
  <!-- FIXME[EASY](**): Exit the drawer by pressing ESC key and by clicking outside the drawer  -->

  <!-- A thin black element that covers the entire screen and appears when clicking on Cart-->
  <div class="fixed top-0 left-0 h-full w-full bg-black/70 z-10"> </div>

  <!-- The bar on the right side of the screen containing the added Cart items -->
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">

    <DrawerHead />

    <div v-if="total <= 0" class="flex flex-column h-full items-center">
      <InfoBlock
        title="Your cart is empty"
        image-url="/package-icon.png"
        description="Start adding new items to your cart"
      />
    </div>

    <CartItemList
      :cart="cart"
    />

    <div v-if="total > 0" class="flex flex-col gap-2 mt-7 mb-5">
      <div class="flex gap-2">
        <span>TOTAL: </span>
        <div class="flex-1 border-b border-dashed"> </div>
        <b> {{ total }} €</b>
      </div>

      <div class="flex gap-2">
        <span>TAX: </span>
        <div class="flex-1 border-b border-dashed"> </div>
        <span>{{ calculateTax(total) }} €</span>
      </div>

      <button
        :disabled="total <= 0"
        @click="emit('createOrder')"
        class="mt-4 text-white bg-lime-500 w-full rounded-xl py-3 hover:bg-lime-600 transition active:bg-lime-700 disabled:bg-slate-400 cursor-pointer"
      >
        Order
      </button>
    </div>

  </div>
</template>