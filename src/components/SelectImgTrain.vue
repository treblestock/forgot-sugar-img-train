<script setup lang="ts">
import { computed, ref } from 'vue'

import OneSideCard from '~/components/OneSideCard.vue'

import type { ImgRecord } from '~/types'
import { getRandomItem, shuffleArr } from '~/utils'

const props = defineProps<{
  desertNamesAndImgs: ImgRecord[]
}>()


type Task = {
  guessed: {
    desertName: string
    img: string
  }
  other: [string, string, string]
}
function createTask(): Task {
  const guessed = getRandomItem(props.desertNamesAndImgs)

  const other: string[] = []
  while (other.length !== 3) {
    const anotherPair = getRandomItem(props.desertNamesAndImgs)
    if (
      anotherPair.desertName === guessed.desertName
      || other.includes(anotherPair.img)
    ) continue

    other.push(anotherPair.img)
  }

  return {
    guessed,
    other: other as [string, string, string],
  } 
}


const currentTask = ref<Task>(createTask() )
const shuffledImgs = computed<string[]>(() => {
  const task = currentTask.value
  const imgs: string[] = [task.guessed.img, ...task.other]
  return shuffleArr(imgs)
})



type Answer = {
  img: string
  isCorrect: boolean
} 
const answer = ref<Answer | null>(null)

const NEXT_TASK_DELAY = 300
function makeAnswer(url: string) {

  const givenAnswer: Answer = {
    img: url,
    isCorrect: currentTask.value.guessed.img === url
  }
  answer.value = givenAnswer
  
  setTimeout(() => {
    currentTask.value = createTask()
    answer.value = null
  }, NEXT_TASK_DELAY)
}

</script>

<template>
  <div class="window">
    <div class="title">{{ currentTask.guessed.desertName }}</div>
    <div class="card-wrapper"
      v-for="url in shuffledImgs" :key="url"
      @click="() => makeAnswer(url)"
    >
      <div class="card-frame"
        :class="[answer && answer.img === url
          ? answer.isCorrect 
            ? '_succeed'
            : '_failed'
          : ''
        ]"
      ></div>
      <OneSideCard 
        :url="url"
      ></OneSideCard>
    </div>
  </div>
</template>

<style scoped>
/* @import "~css/consts"; */
.window {
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, calc(100% / 2 - 5px));
  grid-template-rows: repeat(2, calc(100% / 2 - 5px));
  grid-gap: 10px;

  padding: 10px;
  position: relative;
}

.card-wrapper {
  position: relative;
}

.card {
  width: 100%;
  height: 100%;
}

.card-frame {
  display: none;

  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;


  .card-wrapper:hover & {
    display: block;
  }

  box-shadow: inset 0 0 50px 20px orange;
  &._succeed {
    box-shadow: inset 0 0 50px 20px lightgreen;
  }
  &._failed {
    box-shadow: inset 0 0 50px 20px red;
  }
}


.title {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  text-align: center;
  text-transform: uppercase;
}

/* label */
.title {
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: inset 0 0 .5px #000;
}

</style>