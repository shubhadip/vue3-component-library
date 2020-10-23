import { App as Application }  from 'vue';

let config = {};

export { config as default };

export const setVueInstance = (instance: Application) => {
  VueInstance = instance;
};

export let VueInstance:  Application;
