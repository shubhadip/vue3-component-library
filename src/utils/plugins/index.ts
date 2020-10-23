import { App as Application, Component } from 'vue';

declare let global: any;

export const use = (plugin: any) => {
  let GlobalVue = null;
  if (typeof window !== 'undefined') {
      GlobalVue = (window as any).Vue;
  } else if (typeof global !== 'undefined') {
      GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
}

export const registerComponent = (instance : Application, component: Component) => {
  if(component){
    instance.component(component.name || '', component);
  }
};

export const registerComponentProgrammatic = (
  instance: Application,
  property: string,
  component: Component
) => {
  if (!instance.config.globalProperties.$test)
    instance.config.globalProperties.$test = {};
  instance.config.globalProperties.$test[property] = component;
};



