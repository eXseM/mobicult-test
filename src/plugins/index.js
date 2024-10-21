// Plugins
import vuetify from "./vuetify";
import router from "@/router";
import store from "@/store";

export function registerPlugins(app) {
  app.use(vuetify).use(store).use(router);
}
