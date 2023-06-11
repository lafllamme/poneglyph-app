import {computed, ref} from 'vue'
import {defineStore} from 'pinia'

export const useFontStore = defineStore('font', () => {
    const fontText = ref<string>('Hello World');
    const fontTextSize = ref<string>('2.5');

    const setFontText = (text: string) => {
        fontText.value = validateFontText(text);
    }
    const setFontTextSize = (size: string) => {
        fontTextSize.value = size;
    }
    const getFontText = computed(() => fontText.value);
    const getFontTextSize = computed(() => fontTextSize.value);

    const validateFontText = ((text: string) => {
        return text.replace(/[^a-zA-Z0-9\s.,]/g, '');
    })




    return {
        fontText,
        setFontText,
        getFontText,
        validateFontText,
        fontTextSize,
        setFontTextSize,
        getFontTextSize
    }
})