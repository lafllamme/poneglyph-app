<script setup lang="ts">
import {withDefaults, computed, watch} from "vue";
import {useFontStore} from "@/stores/useFont.store";
import { storeToRefs } from 'pinia'

interface Props {
  id: string;
  name: string;
  required: boolean;
  value?: string;
  cols?: number;
  rows?: number;
  autofocus?: boolean;
  autocomplete?: boolean;
  spellcheck?: boolean;
  minlength?: number;
  maxlength?: number;
  label?: string;
  placeholder?: string;
  readonly?: boolean;
  wrap?: string;
  disabled?: boolean;
  form?: string;
}

const props = withDefaults(defineProps<Props>(), {
  autofocus: true,
  autocomplete: true,
  cols: 8,
  rows: 20,
  disabled: false,
  spellcheck: true,
  minlength: 10,
  maxlength: 500,
  label: "label",
  placeholder: "placeholder",
  readonly: false,
  wrap: 'soft'

});

const hasAutoComplete = computed(() => props.autocomplete ? "on" : "off");


const {fontText} = storeToRefs(useFontStore());

watch((hasAutoComplete), (newValue: string, oldValue: string) => {
  console.log(`hasAutoComplete changed from ${oldValue} to ${newValue}`);
});

const handleKeyUp = (e: Event) => {
  console.log(e);
}
</script>
<template>
  <slot name="label">
    <label :for="id" class="sr-only">{{ label }}</label><br>
  </slot>

   <textarea
        :id="id"
        :name="name"
        :required="required"
        :autocomplete="hasAutoComplete"
        :autofocus="autofocus"
        :spellcheck="spellcheck"
        :cols="cols"
        :rows="rows"
        :disabled="disabled"
        :maxlength="maxlength"
        :minlength="minlength"
        :placeholder="placeholder"
        :readonly="readonly"
        :wrap="wrap"
        :class="$attrs.class"
        @keyup="handleKeyUp"
        v-model="fontText"
        >
      </textarea>
</template>
<style lang="scss" scoped>
</style>
