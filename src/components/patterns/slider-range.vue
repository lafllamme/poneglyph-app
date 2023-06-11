<template>

  <label for="steps-range"
         class="block mb-2 text-black text-sm font-medium text-gray-200 dark:text-white">Font Size
    {{ fontTextSize }}</label>
  <input @input="handleInput" id="steps-range" type="range" min="0" max="5" :value="fontTextSize" step="0.5"
         class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-800">
</template>

<script setup lang="ts">
import {useFontStore} from "@/stores/useFont.store";
import {storeToRefs} from "pinia";

const {setFontTextSize} = useFontStore();
const {fontTextSize} = storeToRefs(useFontStore());
const handleInput = (e: Event) => {
  const slider = e.target as HTMLInputElement;
  setFontTextSize(slider.value);
  console.log(slider.value);
}
</script>