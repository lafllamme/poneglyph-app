//generates a random UUID as string

export const generateUUID = (): string => {
    let d = new Date().getTime()
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now() //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        // eslint-disable-next-line no-bitwise
        const r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        // eslint-disable-next-line no-bitwise
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
}
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    console.log('dark')
} else {
    document.documentElement.classList.remove('dark')
    console.log('light')
}