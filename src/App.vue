<script setup lang="ts">
import SelectImgTrain from '~/components/SelectImgTrain.vue'
import ModeToggler from '~/components/ModeToggler.vue'
import DesertGallery from '~/components/DesertGallery.vue'

import {parseDesertName} from '~/utils/index'
import type {ImgRecord, Mode} from '~/types'
import { ref } from 'vue';

type ImgURL = string
// const desertImgs = import.meta.glob<ImgURL>('../public/deserts/*', {
const desertImgs = import.meta.glob<ImgURL>('../public/deserts/*', {
  query: 'url',
  import: 'default',
  eager: true,
})



const desertNamesAndImgs: ImgRecord[] = []
for (const filePath in desertImgs) {
  const imgUrl = import.meta.env.DEV 
    ? desertImgs[filePath]
    : desertImgs[filePath].split('/public').at(1)!
  console.log(imgUrl)
  desertNamesAndImgs.push({
    desertName: parseDesertName(filePath),
    img: imgUrl
  })
}



const currentMode = ref<Mode>('View')

</script>

<template>
  <div class="app">
    <div class="main-frame">
      <div class="current-page-content">
        <SelectImgTrain 
          v-if="currentMode === 'Train'"
          :desertNamesAndImgs="desertNamesAndImgs"
        ></SelectImgTrain>
        <DesertGallery
          :desertNamesAndImgs="desertNamesAndImgs"
          v-else
        ></DesertGallery>
      </div>
    </div>
    <ModeToggler class="footer"
      :selectedMode="currentMode"
      @onSelectMode="(selectedMode) => currentMode = selectedMode"
    ></ModeToggler>
  </div>

</template>

<style>
@import '~css/null.css';


.app {
  height: 100vh;
  /* position: relative; */

  display: flex;
  flex-direction: column;
}

.main-frame {
  /* flex: 0 0 calc(100vh - 50px); */
  flex: 1 1 auto;
  position: relative;
}

.current-page-content {
  position: absolute;
  /* z-index: -1; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
}
.footer {
  flex: 0 0 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  /* height: 50px; */
}




</style>
