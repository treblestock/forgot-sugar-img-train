<script setup lang="ts">
import {ref, computed, watch} from 'vue'


const props = defineProps<{
  url: string
  desertName: string
}>()


const isFlipped = ref(false)

</script>

<template>
  <div class="card"
    :class="{'flipped': isFlipped}"
  >
    <div class="img upside">
      <button class="toggle-btn"
        @click="isFlipped = !isFlipped"
      >?</button>
      <img :src="url" alt="">
    </div>
    <div class="downside">
      <button class="toggle-btn"
        @click="isFlipped = !isFlipped"
      >?</button>
      {{ desertName }}
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 350px;
  height: 500px;

  position: relative;

  transform-style: preserve-3d;
  transition: all .4s ease-in;

  &.flipped {
    transform: rotateY(180deg);
  }
  

  box-shadow: 0 0 2px #000;
}


.upside,
.downside {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transition: all .4s ease-in;
}
.upside {
  backface-visibility: hidden;
}

.downside {
  z-index: -1;
  transform: rotateY(180deg);
}
.downside {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  /* background: coral; */
  box-shadow: inset 0 0 50px 20px greenyellow;
  color: #000;
  font-size: 35px;
}

.img {
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}


.toggle-btn {
  position: absolute;
  z-index: 2;
  cursor: pointer;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  color: #000;
  border: none;

  font-size: 20px;
}



</style>