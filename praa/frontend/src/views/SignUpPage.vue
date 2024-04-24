<template>
  <div id="app" class="center">
    <h1>SIGN UP</h1>

    <div>
      <form @submit.prevent="handleSignUp">
        <div style="padding-bottom: 5px;">
          <label for="email">Email </label>
          <input v-model="email" name="email" id="email" type="email" />
        </div>
        <div style="padding-bottom: 5px;">
          <label for="password">Password </label>
          <input v-model="password" name="password" id="password" type="password" />
        </div>
        <div style="padding-bottom: 5px;">
          <label for="re-password">Retipe Password </label>
          <input v-model="re_password" name="re-password" id="re-password" type="password" />
        </div>
        <div class="text-center">
          <button class="btn" type="button" @click="router.push('\sign-in')">Back</button>
          <button class="btn" type="submit" @click="handleSignUp">Create New Account</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const re_password = ref("");
const router = useRouter();

/**
 *
 */
const handleSignUp = async () => {
  
  if (password.value === re_password.value){
    try {
      const resp = await fetch("http://localhost:3100/api/users", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
          re_password: re_password.value
        }),
      });

      if (!resp.ok) {
        const errorMsg = (await resp.json())?.errors[0].message;
        throw new Error(errorMsg);
      }
      
      const user = await resp.json();
      console.log(user);

      // goto chat menu
      router.replace("/sign-in");
    } catch (error: any) {
      alert("Sign Up Error " + error.message);
    }
  } else {
      alert("Password must same!");
    }
};

</script>

<style scoped>
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-center {
  display: flex;
  justify-content: center;
  gap: 5px;
}
.center {
  display: flex;
  justify-content: center;

}

.btn {
  display: flex;
  background-color: rgb(2, 133, 255);
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  cursor: pointer;
}

.btn:hover{
  background-color: rgb(4, 99, 188);
  transition: 200ms;
}
</style>
