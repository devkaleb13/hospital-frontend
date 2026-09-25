<script setup>
import { useAuth } from '@/service/auth';
import { useRouter } from "vue-router";
const router = useRouter();
const { logout } = useAuth()
const isAuthenticated = localStorage.getItem("isAuthenticated")

const user = JSON.parse(localStorage.getItem("user"))
let letter =""
if(user){
    letter = user.firstname[0]
}
function handlelogout(){
    logout()
    router.push("/").then(()=> {
        router.go(0)
    });
}

</script>

<template>
    <v-app-bar color="primary">
    <v-app-bar-title>
        <router-link to="/">
            <v-img src="/logo.png" width="10%" height="5%"></v-img>
        </router-link>
    </v-app-bar-title>
    <v-btn to="/homepage" v-if="isAuthenticated">Home</v-btn>
    <v-btn to="/patients" v-if="isAuthenticated">patients</v-btn>
    <v-btn icon="mdi-accoynt" v-if="isAuthenticated" variant="tonal ">{{ letter }}
    <v-menu activator="parent">
        <v-list>
            <v-list-item>
                <v-btn color="primary" to="/profile">Profile</v-btn>
                <v-list-item>
                </v-list-item>
                <v-btn color="primary" @click="()=> { handlelogout();}">logout</v-btn>
            </v-list-item>
        </v-list>

    </v-menu>
    </v-btn>
    <v-btn to="/login" v-else>login</v-btn>
    </v-app-bar>
</template>