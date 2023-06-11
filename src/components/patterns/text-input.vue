<script setup lang="ts">
import {ref} from "vue";

interface Props {
  id: string;
  name: string;
  type: string;
  required: boolean;
  size?: number;
  pattern?: string;
  label?: string;
  description?: string;
}

 withDefaults(defineProps<Props>(), {
  type: "text",
  size: 45,
  pattern: "[a-z]{4,8}",
  label: "label",
  description: "description"
});

const validityRef = ref<HTMLInputElement | null>(null);

const handleKeyUp = (e: Event) => {
  validateInput(e);
}

const validateInput = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  const isValid = ref<boolean>(target.validity.valid);

  if (isValid.value && validityRef.value) {
    validityRef.value.textContent = "✓";

  } else if (!isValid.value && validityRef.value) {
    validityRef.value.textContent = "✖";

  }
}
</script>
<template>
  <div>
    <label :for="id">{{ label }} </label>
    <input
        @keyup="handleKeyUp"
        :type="type"
        :id="id"
        :name="name"
        :required="required"
        :size="size"
        :pattern="pattern"/>
    <span ref="validityRef"></span>
    <p>{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
</style>