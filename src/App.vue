<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Nav from "./components/Nav.vue"
import HomaPage from "./components/HomePageCompos/HomePage.vue"
import footerlastbtm from "./components/footerlastbtm.vue";

  
</script>

<template>

    <div class=" ">
      <!-- <div class="flex flex-col min-h-screen font-SFProDisplay "> -->
        <!-- <div class=" container flex flex-col min-h-screen "> -->
          <!-- <Nav/>
          <HomaPage/>
         </div>
         <div class="">
          <footerlastbtm/>
        </div>
        <RouterView /> -->

          <Nav/>
          <HomaPage/>
          <footerlastbtm/>   
          <RouterView />
        </div>

    <!-- </div> -->

</template>
