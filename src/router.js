import { createRouter, createWebHistory } from "vue-router";
import Home from "./Pages/Home.vue";

import Users from "./Pages/Users/Users.vue";
import ShowUser from "./Pages/Users/ShowUser.vue";
import TempleUsers from "./Pages/Users/Template.vue";

import Posts from "./Pages/Posts/Posts.vue";
import TemplePosts from "./Pages/Posts/Template.vue";
import ShowPost from "./Pages/Posts/Show.vue";
import CreatePost from "./Pages/Posts/CreatePost.vue";

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
  {
    path: "/posts",
    name: "posts",
    component: TemplePosts,
    children: [
      { path: "", name: "Tposts", component: Posts },
      { path: ":id", name: "postId", component: ShowPost },
      { path: "create", name: "createPost", component: CreatePost },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
