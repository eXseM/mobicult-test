import { createRouter, createWebHistory } from "vue-router/auto";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/pages/MainPage.vue"),
  },
  {
    name: "Settings",
    path: "/settings",
    component: () => import("@/pages/SettingsPage.vue"),
  },
  {
    name: "404Page",
    path: "/404",
    component: () => import("@/pages/404Page.vue"),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
