<template>
  <RouterView />
</template>

<script lang="ts">
  import router from "./router";
  import HomePage from "./views/HomePage.vue";
  import SignInPage from "./views/SignInPage.vue";
  import { RouterLink, RouterView } from "vue-router";

  export default {
    name: "App",
    components: {
    HomePage,
    SignInPage,
    router
},
  }
</script>;