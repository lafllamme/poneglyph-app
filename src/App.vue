<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import WYSIWYGEditor from "@/components/wysiwyg-editor.vue";
import TextPreview from "@/components/text-preview.vue";
import ModeSwitcher from "@/components/ModeSwitcher.vue";
import SliderRange from "@/components/patterns/slider-range.vue";
</script>

<template>
  <div class="flex justify-between ">
    <ModeSwitcher />
    <div class="py-2 w-1/2">
      <SliderRange/>
    </div>
  </div>
  <WYSIWYGEditor />
  <TextPreview />

</template>

<style lang="scss" scoped>

</style>
