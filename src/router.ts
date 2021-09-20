import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/test-one",
    name: "TestOne",
    component: () =>
      import(/* webpackChunkName: "one" */ "./widgets/test-one.widget.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
