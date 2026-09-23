<script setup>

</script>

<template>
    <v-app-bar color="primary">
    <v-app-bar-title>
        <router-link to="/">
            <v-img src="/logo.png" width="10%" height="5%"></v-img>
        </router-link>
    </v-app-bar-title>
    <v-btn to="/homepage">home</v-btn>
    <v-btn to="/patients">patients</v-btn>
    <v-btn to="/Login">login</v-btn>
    <v-btn to="/profile">profile</v-btn>
    </v-app-bar>
</template>