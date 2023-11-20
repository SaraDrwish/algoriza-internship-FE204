<template>
     <header class="fixed top-0 left-[100px]">
      <nav class="flex sm:flex-row items-center justify-between  ">

        <RouterLink :to="{name:'home'}">
          <div class="flex items-center ">
            <img src="../assets/icons/bxs-plane-alt 1.svg" alt="planIcon" class="text-med-footer-black">
            <p class="tracking-wide ">my Dream Place </p>
          </div>
        </RouterLink>

        <div class="flex gap-5">
          <ul>
            <li>Home</li>
            <li>Discover</li>
            <li>Activities</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div class="">
          <button class=" bg-BlueColor text-BlueColor p-1 m-1">Register</button>
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
  * ,body{
   font-family: SF Pro Display;
   font-style: normal;
  }
  p{
    color: #1B1F2D;
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.36px;
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
  li{
   /* background: rgb(120, 71, 71); */
  }
  button{
    background-color: var(--primary);
    padding: 10px 18px;
    color: #FFF;
     font-size: 15px;
     font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: 0.3px;
}

</style>