import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";

import HomeVue from "../views/Home.vue";
import AboutVue from "../views/About.vue";
import PortfolioVue from "../views/Portfolio.vue";
import ResumeVue from "../views/Resume.vue";
import PageNotFound from "../views/errors/404.vue";
import PortfolioDetailVue from "../views/PortfolioDetail.vue";
// import Dashboard from "../views/admin/Dashboard.vue";
// import Client from "../views/admin/Client.vue";
// import Course from "../views/admin/Course.vue";
// import Contact from "../views/admin/Contact.vue";
// import Education from "../views/admin/Education.vue";
// import Experience from "../views/admin/Experience.vue";
// import Skill from "../views/admin/Skill.vue";
// import Login from "../views/auth/Login.vue";
// import Biodata from "../views/admin/Biodata.vue";
// import AdminLayout from "../views/layouts/cms/AdminLayout.vue";

const routes = [
  { path: "/", name: "home", component: HomeVue },
  { path: "/about", name: "about", component: AboutVue },
  { path: "/resume", name: "resume", component: ResumeVue },
  { path: "/portfolio", name: "portfolio", component: PortfolioVue },
  {
    path: "/portfolio/:id",
    name: "portfolio-detail",
    component: PortfolioDetailVue,
  },
  // { path: "/login", name: "Login", component: Login },
  // {
  //   path: "/cms",
  //   // component: User,
  //   children: [
  //     {
  //       path: "dashboard",
  //       component: Dashboard,
  //       meta: { requiresAuth: true },
  //     },
  //     {
  //       path: "biodata",
  //       component: Biodata,
  //       meta: { requiresAuth: true },
  //     },
  //     {
  //       path: "experience",
  //       component: Experience,
  //       meta: { requiresAuth: true },
  //     },
  //     {
  //       path: "education",
  //       component: Education,
  //       meta: { requiresAuth: true },
  //     },
  //     {
  //       path: "course",
  //       component: Course,
  //       meta: { requiresAuth: true },
  //     },
  //     {
  //       path: "client",
  //       component: Client,
  //       meta: { requiresAuth: true },
  //     },
  //     {
  //       path: "contact",
  //       component: Contact,
  //       meta: { requiresAuth: true },
  //     },
  //     {
  //       path: "skill",
  //       component: Skill,
  //       meta: { requiresAuth: true },
  //     },
  //   ],
  //   meta: {
  //     layout: AdminLayout,
  //   },
  // },
  { path: "/:pathMatch(.*)*", component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("auth_token");

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "Login" }); // Redirect ke login jika belum login
  } else {
    next(); // Lanjutkan ke halaman tujuan
  }
});

export default router;
