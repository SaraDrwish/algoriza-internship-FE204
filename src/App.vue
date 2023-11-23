<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Nav from "./components/Nav.vue"
import HomaPage from "./components/HomePageCompos/HomePage.vue"


  
</script>

<template>

    <div class="flex">
      <!-- <div class="flex flex-col min-h-screen font-SFProDisplay "> -->
        <Nav/>
        <HomaPage/>
        <RouterView />
    </div>

</template>
