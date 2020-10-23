import HelloWorld from "./HelloWorld.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue) {
    registerComponent(vue, HelloWorld);
  }
};

export default Plugin;

export { HelloWorld };
