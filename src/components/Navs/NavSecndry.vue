<template>
  <header
    class="fixed top-0 z-[100000] w-full bg-white shadow-sm overflow-hidden"
  >
    <nav
      class="mx-auto sm:flex-row flex shrink-0 items-center justify-between h-[68px] w-[calc(100%-100px)]"
    >
      <RouterLink :to="{ name: 'home' }">
        <div class="flex gap-[4px] items-center text-[16px]">
          <img
            src="../../assets/icons/bxs-plane-alt 1.svg"
            alt="planIcon"
            class="text-med-footer-black"
          />
          <p
            class="tracking-[0.36px] font-[500] text-[18px] text-med-footer-black"
          >
            my Dream Place
          </p>
        </div>
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
