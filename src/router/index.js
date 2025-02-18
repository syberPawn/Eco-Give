import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/Home Page.vue";
import AboutUsPage from "@/components/AboutUs Page.vue";
import DonationPagfe from "@/components/Donation Pagfe.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage }, // Home Page Route
  { path: "/about", name: "About", component: AboutUsPage },
  { path: "/donationpage", name: "DonationPage", component: DonationPagfe },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
