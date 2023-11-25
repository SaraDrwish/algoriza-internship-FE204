<template>
  <div>
    
    <div class="blueNavsign relative top-0 
           h-[200px] w-full bg-gradient-to-b from-laniergrad1 to-laniergrad2 
          ">
      <!-- <div class="blueNavsign relative top-0 bg-blue-400 h-[200px] w-full "> -->
      <div >
        <NavSignined  class="bg-transparent shadow-none  " />
      </div>
    </div>

  </div>
</template>

<script setup>
import NavSignined from '../Navs/NavSignined.vue'
</script>


<style scoped>
.blueNavsign{
background: linear-gradient(180deg, #2969BF 0%, #144E9D 100%);
}
</style>

 