<script setup lang="ts">
import {storeToRefs} from "pinia";
import {computed, watch} from "vue";
import {useFontStore} from "@/stores/useFont.store";

const {fontText, fontTextSize} = storeToRefs(useFontStore());


const fontSizeClass = computed(() => {
  const baseFontSize = Math.floor(parseFloat(fontTextSize.value));
  const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

  const responsiveClasses = breakpoints
      .map((bp) => (bp !== 'xs' ? `${bp}:` : '') + `text-${Math.min(baseFontSize + (breakpoints.indexOf(bp) * 2), 5)}xl`);

  return responsiveClasses.join(' ');
});

watch(fontSizeClass, (newVal) => {
  console.log(newVal);
  /*  const textPreview = document.getElementById('text-preview');
    if (textPreview) {
      textPreview.classList.remove('text-5xl', 'text-6xl', 'text-7xl', 'text-8xl', 'text-9xl', 'text-10xl');
      textPreview.classList.add(fontSizeClass.value);
    }*/
});

</script>
<template>
  <div class="text-preview py-2 px-5">
      <textarea
          v-model="fontText"
          id="text-preview"
          rows="6"
          :class="fontSizeClass"
          class="text-left text-gray-900 dark:text-white block py-4 px-3 w-full bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
  </div>
</template>
<style lang="scss">

.text-preview {
  font-family: 'Poneglyph Regular', sans-serif;
  animation: fade-in 1.9s ease-in;
}
</style>