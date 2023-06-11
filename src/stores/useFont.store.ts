import {computed, ref} from 'vue'
import {defineStore} from 'pinia'

export const useFontStore = defineStore('font', () => {
    const fontText = ref<string>('Hello World');

    const setFontText = (text: string) => {
        fontText.value = validateFontText(text);
    }

    const getFontText = computed(() => fontText.value);

    const validateFontText = ((text: string) => {
        return text.replace(/[^a-zA-Z0-9\s.,]/g, '');
    })


    return {fontText, setFontText, getFontText, validateFontText}
})