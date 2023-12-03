<template>
  <div class=" ">
    <NavSignined :showUl="false" />

    <div
      class="absolute left-[calc(100vw/12)] text-center container m-auto flex items-center justify-center text-[33px] w-[80%] h-[80%] font-bold text-primary"
    >
      <h2>Page is Not Found</h2>
    </div>

    <div class="absolute bottom-0 w-full">
      <footerlastbtm />
    </div>
  </div>
</template>

<script setup>
import NavSignined from "./NavSignined.vue";
import footerlastbtm from "./NavSignined.vue";
</script>
