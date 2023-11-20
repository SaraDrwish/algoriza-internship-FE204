<script setup>
// import { RouterLink, RouterView } from 'vue-router'
  import Nav from "./components/Nav.vue"
</script>

<template>

    <div class="flex flex-col min-h-screen font-SFProDisplay ">
        <Nav />
        <RouterView />
    </div>

</template>
