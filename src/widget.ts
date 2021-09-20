import "./assets/styles/css/main.css";
import { createApp } from "vue";

declare let window: any;

function loadWidget(
  widgetCode: string,
  containerId = "app",
  props = { useRouter: false }
) {
  const widget = import(
    /* webpackChunkName: "[index]" */ `./widgets/${widgetCode}.widget.vue`
  );
  if (widget) {
    const node = document.getElementById(containerId);
    if (node) {
      widget.then(Component => {
        const renderDOM = () => {
          const app = createApp(Component.default);
          if (props.useRouter) {
            import("./router").then(mod => {
              app.use(mod.default);
              app.mount(`#${containerId}`);
            });
          } else {
            app.mount(`#${containerId}`);
          }
        };
        renderDOM();
      });
    }
  }
}

window["loadWidget"] = loadWidget;
