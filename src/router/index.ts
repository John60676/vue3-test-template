import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "index",
      path: "/",
      component: () => import("../pages/index/index.vue"),
    },
    {
      name: "shop",
      path: "/shop",
      component: () => import("../pages/shop/index.vue"),
    },
  ],
})

export default router
