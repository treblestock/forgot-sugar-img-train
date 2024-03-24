<script setup lang="ts">
import {ref, computed, watch} from 'vue'
import ImgCardWithName from '../components/ImgCardWithName.vue'

import type { ImgRecord } from '../types'

const props = defineProps<{
  desertNamesAndImgs: ImgRecord[]
}>()

</script>

<template>
  <div class="gallery">
    <ImgCardWithName class="card"
      v-for="{desertName, img} in desertNamesAndImgs" :key="desertName"
      :desertName="desertName"
      :url="img"
    ></ImgCardWithName>
  </div>
</template>

<style scoped>
/* @import "~css/consts"; */

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  padding: 10px;
}

.card {
  flex: 0 0 calc(100% / 2 - 10px);
}


</style>