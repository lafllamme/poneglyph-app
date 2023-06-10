<script setup lang="ts">
import {withDefaults} from "vue";
import {storeToRefs} from "pinia";
import {useFontStore} from "@/stores/useFont.store";

const {fontText} = storeToRefs(useFontStore());

</script>
<template>
  <div id="text-preview">
    <div class="text-6xl text-gray-900 dark:text-white">{{ fontText }}</div>
  </div>
</template>
<style lang="scss">

#text-preview {
  font-family: 'Poneglyph Regular', sans-serif;
  animation: fade-in 1.9s ease-in;
  @apply text-center py-12 px-5;
}
</style>