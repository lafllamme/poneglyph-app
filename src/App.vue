<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import WYSIWYGEditor from "@/components/wysiwyg-editor.vue";
import TextPreview from "@/components/text-preview.vue";
import ModeSwitcher from "@/components/ModeSwitcher.vue";
</script>

<template>
  <ModeSwitcher />
  <WYSIWYGEditor />
  <TextPreview />

</template>

<style lang="scss" scoped>

</style>
