<script setup lang="ts">

const props = defineProps<{
  url: string
}>()



</script>

<template>
  <div class="card">
    <div class="img">
      <img :src="url" alt="">
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 350px;
  height: 500px;

  box-shadow: 0 0 2px #000;
}


.img {
  width: 100%;
  height: 100%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}





</style>