import { createRouter, createWebHistory} from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SignIn from '../views/SignInPage.vue';
import SignUp from '../views/SignUpPage.vue';
import ChatMenu from '../views/ChatMenuPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "home",
    },
    {
      path: "/home",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/sign-in",
      name: "signIn",
      component: SignIn
    },
    {
      path: "/sign-up",
      name: "signUp",
      component: SignUp
    },
    {
      path: "/chat-menu",
      name: "chatMenu",
      component: ChatMenu
    },
    // {
    //   path: "/status",
    //   name: "status",
    //   component: () => import("../views/StatusView.vue"),
    // },
  ],
});
export default router;
