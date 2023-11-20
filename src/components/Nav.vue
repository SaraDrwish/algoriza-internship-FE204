<template>
     <header class="fixed top-0 left-[100px] bg-white shadow-sm">
      <nav class="flex sm:flex-row items-center justify-between  ">

        <RouterLink :to="{name:'home'}">
          <div class="flex items-center ">
            <img src="../assets/icons/bxs-plane-alt 1.svg" alt="planIcon" class="text-med-footer-black">
            <p class="tracking-wide ">my Dream Place </p>
          </div>
        </RouterLink>

        <div class="  ">
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="#"><li>Discover</li></a>
            <a href="#"><li>Activities</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </div>

        <div class="">
          <button class=" ">Register</button>
        </div>

      </nav>
    </header>
 </template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>

  nav{
  width: calc(100vw - 200px);
  height: 68px;
  flex-shrink: 0;
  /* background: rgb(132, 100, 163); */
  }
  * {
   font-family: SF Pro Display;
   font-style: normal;
  }
  p{
    color: #1B1F2D;
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.36px;
    transition: all 0.3s ease-in;
  }
  ul{
    display: inline-flex;
    align-items: flex-start;
    gap: 48px;
    /* background-color: antiquewhite; */
    color:#333 ;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;
  }
  a{
    transition: all 0.3s ease;
  }
  ul a:hover 
  /* ,  */
  /* p:hover  */
  {
    color: var(--primary);
  }
  button{
    background-color: var(--primary);
    padding: 10px 18px;
    color: #FFF;
     font-size: 15px;
     font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: 0.3px;
    transition: all 0.3s ease;
}
  button:hover{
    background-color: #4391f7;
}

</style>