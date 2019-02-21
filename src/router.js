import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from "@/views/Home.vue";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home
    }
  ]
});
