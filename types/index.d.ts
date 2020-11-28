import { DefineComponent, Plugin } from "vue";

declare const vue3ComponentLibrary: Exclude<Plugin["install"], undefined>;
export default vue3ComponentLibrary;

export const TestWorld: Exclude<Plugin["install"] & DefineComponent, undefined>;
export const HelloWorld: Exclude<
  Plugin["install"] & DefineComponent,
  undefined
>;
