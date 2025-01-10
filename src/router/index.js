import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";

import HomeVue from "../views/Home.vue";
import AboutVue from "../views/About.vue";
import ContactVue from "../views/Contact.vue";
import PortfolioVue from "../views/Portfolio.vue";
import ResumeVue from "../views/Resume.vue";
import PageNotFound from "../views/errors/404.vue"
import PortfolioDetailVue from "../views/PortfolioDetail.vue";

const routes = [
  { path: "/", name: "home", component: HomeVue },
  { path: "/about", name: "about", component: AboutVue },
  { path: "/resume", name: "resume", component: ResumeVue },
  { path: "/contact", name: "contact", component: ContactVue },
  { path: "/portfolio", name: "portfolio", component: PortfolioVue },
  { path: "/portfolio/:id", name: "portfolio-detail", component: PortfolioDetailVue },
  { path: '/:pathMatch(.*)*', component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "bg-gradient-to-r from-[#FA5252] to-[#DD2476] font-medium font-popins text-white",
  linkExactActiveClass: "bg-base-300 text-gray-900",
  routes,
});

export default router;
