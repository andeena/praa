<template>
      <!-- Navbar -->
    <nav class="navbar">
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link btn" @click="toggleDropdown">
                    Channel
                </a>
                <div class="navbar-dropdown" v-if="isDropdownVisible" v-for="(item, index) in currentChannel.docs">
                    <a class="navbar-item channel" @click="selectChannel(index+1)">{{item.channelName}}</a>
                </div>
            </div>
            
            <div class="navbar-item">
                <a class="navbar-link btn" type="button" @click="handleLogout">Logout</a>
            </div> 
    </nav>
    <div class="bod" v-for="(item, index) in currentChannel.docs">
        <div class="msg">{{ item.message }}</div>
    </div>
</template>
  
  <script lang="ts">
    import { useRouter } from "vue-router";
    import { ref } from "vue";

    
    export default {
    data() {
        return {
        isDropdownVisible: false
        };
    },
    methods: {
        toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible;
        },
        selectChannel(channelNumber: number) {
        
        console.log(`Channel ${channelNumber} selected`);
        this.isDropdownVisible = false; 

        },

        async handleLogout() {
            try {
                const res = await fetch('http://localhost:3100/api/users/logout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                
                this.$router.replace("/home");

            }catch (error :any){
                alert("Log Out Error " + error.message);
            }
            
        },
        
    
  },};
  
  </script>
    
  <script setup lang="ts">
    import { onBeforeMount } from "vue";

    const currentChannel = ref();

    onBeforeMount(async () => {
        
                const channelData = await getChannel();
                currentChannel.value = channelData;
            
    })

    const getChannel = async () => {
            try{
                const resp = await fetch("http://localhost:3100/api/channels", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                });
                const channel = await resp.json();
                console.log(channel);
                return channel;
            }
            catch(error:any){
                alert("Get Channel Error" + error.message);
            }};
  </script>

  <style scoped>

    .btn {
        width: 90px;
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
    .navbar{
        height: 60px;
        background-color: #fff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        display: flex;
        /* flex-direction: row; */
        justify-content: end;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
    }

    .navbar-dropdown{
        /* height: 60px; */
        display: flex;
        /* position: absolute; */
        flex-direction: column-reverse;
        background-color: #fff;
        transition: 200ms;
    }

    .channel{
        color:rgb(4, 99, 188) ;
        cursor: pointer;
        display: block;
    }

    .channel:hover{
        color: #fff;
        background-color: rgb(4, 99, 188);
        transition: 200ms;
    }

  </style>
  