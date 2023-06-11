<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useFontStore} from "@/stores/useFont.store";



const {fontText} = storeToRefs(useFontStore());

</script>
<template>
    <div class="text-preview py-2 px-5">
      <textarea
          v-model="fontText"
          id="text-preview"
          rows="12"
          class="text-6xl text-center text-gray-900 dark:text-white block p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
</template>
<style lang="scss">

.text-preview {
  font-family: 'Poneglyph Regular', sans-serif;
  animation: fade-in 1.9s ease-in;
}
</style>