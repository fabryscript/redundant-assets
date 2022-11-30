import { createRouter, createWebHistory } from "vue-router"
 
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/favorites",
      name: "Favorites",
      component: () => import("../views/Favorites.vue"),
    }
  ]
})