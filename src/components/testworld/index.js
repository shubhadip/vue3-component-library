import TestWorld from "./TestWorld.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue) {
    registerComponent(vue, TestWorld);
  }
};

export default Plugin;

export { TestWorld };
