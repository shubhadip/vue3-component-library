let config = {}

export { config as default }

export const setOptions = (options) => { config = options }

export const setVueInstance = (instance) => { VueInstance = instance }

export let VueInstance;
