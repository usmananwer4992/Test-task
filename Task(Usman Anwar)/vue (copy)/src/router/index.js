import Vue from "vue";
import VueRouter from "vue-router";
import AllCards from "../views/AllCards.vue";
import CreateCard from "../views/CreateCard.vue";
import Selected from "../views/SelectedCard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AllCards",
    component: AllCards,
  },
  {
    path: "/createCard",
    name: "CreateCard",
    component: CreateCard,
  },
  {
    path: "/selectedCard",
    name: "SelectedCard",
    props: (route) => ({ query: route.query.a }),
    component: Selected,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
