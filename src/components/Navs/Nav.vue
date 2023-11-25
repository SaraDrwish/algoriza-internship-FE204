<template  >
     <header class="fixed top-0  z-[100000] w-full bg-white shadow-sm overflow-hidden">
      <nav class=" mx-auto sm:flex-row flex shrink-0 items-center justify-between h-[68px] w-[calc(100%-100px)] ">

        <RouterLink :to="{name:'home'}">
          <div class="flex gap-[4px] items-center text-[16px] ">
            <img src="../../assets/icons/bxs-plane-alt 1.svg" alt="planIcon" class="text-med-footer-black">
            <p class=" tracking-[0.36px] font-[500] text-[18px] text-med-footer-black ">my Dream Place </p>
          </div>
        </RouterLink>

        <div class=" ">
          <ul class=" inline-flex tracking-[0.36px] text-[16px] text-Gray2 items-start gap-[48px]  ">
            <a href="/"><li>Home</li></a>
            <a href="#"><li>Discover</li></a>
            <a href="#"><li>Activities</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </div>

        <div class=" ">
          <router-link to="/register"> <button class="bg-primary py-[10px]  px-[18px]
           text-white text-[15px] font-[500]
            leading-[20px] tracking-[0.3px] ">Register</button></router-link> 
        </div>

      </nav>
    </header>
 </template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style  >

  nav p{
    transition: all 0.3s ease-in;
  }
  nav a{
    transition: all 0.3s ease;
  }
  nav ul a:hover 
  {
    color: var(--primary);
  }
  nav button  {
    transition: all 0.3s ease;
}

</style>