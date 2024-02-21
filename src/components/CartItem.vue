<script setup>

defineProps( {
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
});

const emit = defineEmits(['removeFromCart']);

</script>

<template>

  <div class="flex items-center border border-slate-200 p-4 rounded-xl gap-4 mt-2">
    <img class="w-16 h-16" :src="imageUrl" alt="Sneaker">

    <div class="flex flex-col flex-1">
      <p>{{ title }}</p>

      <div class="flex justify-between mt-2">
        <b class="flex">{{ price }}</b>
        <img
          class="opacity-50 hover:opacity-100
          cursor-pointer
          transition z-30"
          src="/close.svg"
          alt=""
          @click="emit('removeFromCart')"
        >
      </div>
    </div>
  </div>
</template>