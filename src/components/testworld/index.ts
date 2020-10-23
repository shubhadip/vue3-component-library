import { App as Application } from "vue";
import TestWorld from "./TestWorld.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, TestWorld);
  }
};

export default Plugin;

export { TestWorld };
