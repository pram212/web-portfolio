import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router"

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@views/about.vue"),
  },
  {
    path: "/resume",
    name: "resume",
    component: () => import("@views/Resume.vue"),
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("@views/Portfolio.vue"),
  },
  {
    path: "/portfolio/:id",
    name: "portfolio-detail",
    component: () => import("@views/PortfolioDetail.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@views/errors/404.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
