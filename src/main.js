import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import View1 from "./views/View1.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/view1",
      name: "View111",
      component: View1,
    },
  ],
});

import App from "./App.vue";

createApp(App).use(router).mount("#app");
