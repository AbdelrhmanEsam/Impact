import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/Home.view.vue";
import InfoPolicies from "@/views/InfoPolicy.view.vue";
import PrivacyPolicies from "@/views/PrivacyPolicy.view.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/info-policies",
    name: "InfoPolicies",
    component: InfoPolicies,
    meta: {
      title: "Imapct Info Policies",
    },
  },

  {
    path: "/privacy-policies",
    name: "PrivacyPolicies",
    component: PrivacyPolicies,
    meta: {
      title: "Imapct Privacy Policies",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
router.beforeEach((to) => {
  document.title = to.meta?.title ?? "Imapct";
});
