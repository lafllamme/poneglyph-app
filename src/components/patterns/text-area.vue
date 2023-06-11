<script setup lang="ts">
import {computed, ref} from "vue";
import {useFontStore} from "@/stores/useFont.store";

interface Props {
  id: string;
  name: string;
  required: boolean;
  cols?: number;
  rows?: number;
  value?: string;
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

interface Emits {
  (event: 'update:modelValue', value: string): boolean
}

const props = withDefaults(defineProps<Props>(), {
  autofocus: false,
  autocomplete: true,
  cols: 8,
  rows: 20,
  disabled: false,
  spellcheck: true,
  minlength: 10,
  maxlength: 500,
  label: "label",
  placeholder: "Hello World ...",
  readonly: false,
  wrap: 'soft'

});
const  { validateFontText, setFontText } = useFontStore();

const hasAutoComplete = computed(() => props.autocomplete ? "on" : "off");
//const emits = defineEmits<Emits>()
const text = ref<string>('');


const handleInput = (e: Event) => {
  const textArea = e.target as HTMLTextAreaElement;
  textArea.value = validateFontText(textArea.value);
  setFontText(textArea.value);
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
      @input="handleInput"
      v-model="text"
  >
      </textarea>
</template>
<style lang="scss" scoped>
</style>
