import { App as Application } from "vue";
import TestWorld from "./TestWorld.vue";

import { use, registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, TestWorld);
  }
};

use(Plugin);

export default Plugin;

export { TestWorld };
