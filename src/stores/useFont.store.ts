import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFontStore = defineStore('font', () => {
    const fontText = ref<string>('Hello World');

    const setFontText = (text: string) => {
        fontText.value = text;
    }

    const getFontText = computed(() => fontText.value);

    return { fontText, setFontText, getFontText }
})