<script setup lang="ts">
import type {Mode} from '../types';


const props = defineProps<{
  selectedMode: Mode
}>()

const emit = defineEmits<{
  onSelectMode: [mode: Mode]
}>()

</script>

<template>
  <div class="footer">
    <button class="btn view-mode"
      :class="selectedMode === 'View' ? '_selected' : ''"
      @click="emit('onSelectMode', 'View')"
    >view</button>
    <button class="btn train-mode"
      :class="selectedMode === 'Train' ? '_selected' : ''"
      @click="emit('onSelectMode', 'Train')"
    >train</button>
  </div>
</template>

<style scoped>

.footer {
  border-top: 1px solid #000;
  display: flex;
}

.btn {
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 15px;
  font-size: 18px;
  font-size: 25px;

  background: white;

  &._selected {
    background: lightgreen;
  }
}

.view-mode {
  border-right: 1px solid #000;
}

</style>