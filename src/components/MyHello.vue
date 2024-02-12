<script setup>

defineProps({
  // IN VUE, tipization is required for the received props;
  title: String,
  price: Number,
  isAdded: Boolean
})

</script>

<template>
  <!--  HERE IS THE LAYOUT ITSELF -->
  <div class="product">
    <h2>Product: {{ title }}</h2>
    <h3>Price: {{ price }} </h3>
    <slot>
      <!-- AN ADDITIONAL BLANK SPACE FOR A DIV -->
      <p>THIS IS SOME DEFAULT CONTENT IN CASE NOTHING IS PROVIDED</p>
    </slot>
  </div>
</template>


<style>
.product {
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
}
</style>