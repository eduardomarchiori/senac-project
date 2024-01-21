import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import DetailsView from "../views/DetailsView.vue";

const routes = [
  {
    path: "/",
    component: () => import("@/layout/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
      },
      {
        path: "/register",
        name: "Register",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/RegisterView.vue"),
      },
      {
        path: "/details/:id",
        name: "Details",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/DetailsView.vue"),
      },
      {
        path: "/edit/:id",
        name: "Edit",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/EditView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export { routes };

export default router;
