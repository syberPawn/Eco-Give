import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/Home Page.vue";
import AboutUsPage from "@/components/AboutUs Page.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage }, // Home Page Route
  { path: "/about", name: "About", component: AboutUsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
