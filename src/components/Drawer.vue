<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
import DrawerHead from './DrawerHead.vue';
import CartItemList from './CartItemList.vue';
import { calculateTax } from '../utils/utils.js'

defineProps({
  cart: Array,
  total: Number,
  addToCart: Function
})

</script>

<template>
  <!-- A thin black element that covers the entire screen and appears when clicking on Cart-->
  <div class="fixed top-0 left-0 h-full w-full bg-black/70 z-10"> </div>

  <!-- The bar on the right side of the screen containing the added Cart items -->
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">


    <DrawerHead />

    <CartItemList
      :cart="cart"
    />


    <div class="flex flex-col gap-2 mt-7 mb-5">
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

      <button :disabled="total === 0"
        class="mt-4 text-white bg-lime-500 w-full rounded-xl py-3 hover:bg-lime-600 transition active:bg-lime-700 disabled:bg-slate-400 cursor-pointer">
        Order
      </button>
    </div>

  </div>
</template>