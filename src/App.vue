<script setup>

import Nav from "./components/Nav.vue"
import HomePage from "./components/HomePageCompos/HomePage.vue"
import footerlastbtm from "./components/footerlastbtm.vue";

</script>

<template>

    <div class="  ">
        <div class="">

            <div class="">
                <Nav />
            </div>
            <div class="flex flex-col mx-auto w-[calc(100%-100px)] items-center justify-center container  ">
               <router-link to="/" > <HomePage/> </router-link> 
            </div>
            <div class="">
                <footerlastbtm/>   
            </div>
       
        </div>
        <RouterView />
    </div>
</template>
