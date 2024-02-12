<script setup>
  import MyHello from '@/components/MyHello.vue';
</script>

<template>
  <!-- SENDING PROPS HERE: -->
  <!-- ":" - indicates to Vue that this is a property of dinamically interepreted type -->
  <MyHello title="Sneakers Puma" :price="1200" is-added/>
  <MyHello title="Sneakers Nike" :price="1500"/>

  <MyHello title="Sneakers Nike" :price="1500">
    
    <!-- BELLOW IS A SLOT CONTENT:  -->
    <button> Additional Button </button>
  </MyHello> 

</template>



<style> </style>
