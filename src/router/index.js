import Vue from "vue";
import VueRouter from "vue-router";
import SearchBoxView from "../views/SearchBoxView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "no-items",
    component: SearchBoxView,
  },
  {
    path: "/items",
    name: "items",
    query: true,
    component: () =>
      import(
        /* webpackChunkName: "SearchResultsView" */ "../views/SearchResultsView.vue"
      ),
  },
  {
    path: "/items/:id",
    name: "itemDetails",
    params: true,
    component: () =>
      import(
        /* webpackChunkName: "ItemDetailsView" */ "../views/ItemDetailsView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
