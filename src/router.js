import { createRouter, createWebHistory } from "vue-router";
import Home from "./Pages/Home.vue";
import Users from "./Pages/Users/Users.vue";
import ShowUser from "./Pages/Users/ShowUser.vue";
import TempleUsers from "./Pages/Users/Template.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/users",
    name: "users",
    component: TempleUsers,
    children: [
      { path: "", name: "Tusers", component: Users },
      { path: ":id", name: "userId", component: ShowUser },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
