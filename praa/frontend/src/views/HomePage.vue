<script lang="ts">
  import router from '../router';

  export default {
    name:"HomePage",
    components : {
      
    },
  };
</script>


<template>
  <div id="app" class="center">
    <h1>Selamat datang</h1><br>
    <div class="button">
      <button class="btn" @click="$router.push('/sign-in')">Login</button>
      <button class="btn" @click="$router.push('/sign-up')">Create Account</button>
    </div>
  </div>
</template>





<!-- <script setup lang="ts">
const handleLogin = () => {
  console.log("Login success");
  // Handle login logic here
};

const handleCreateAccount = () => {
  console.log("create success");
  // Handle create account logic here
}; -->





<style scoped>
h1{
  font-size: 40px;
  font-weight: bold;
  display: flex;
}
.button{
  display: flex;
  flex-direction: row;
}
.button .btn {
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

#app.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

</style>


