<template>
  <div>
    <nav
      class="text-white mx-auto flex items-center justify-between h-[68px] w-[calc(100%-100px)]"
    >
      <RouterLink :to="{ name: 'signedhome' }">
        <div class="flex gap-[4px] items-center text-[16px] text-white">
          <img src="../../assets/icons/wtiplan.svg" alt="planIconwit" />
          <p class="tracking-[0.36px] font-[500] text-[18px]">my Dream Place</p>
        </div>
      </RouterLink>
      <div class="text-white">
        <ul
          class="inline-flex tracking-[0.36px] text-[16px] items-start gap-[48px]"
        >
          <a href="/"><li>Home</li></a>
          <a href="#"><li>Discover</li></a>
          <a href="#"><li>Activities</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
      </div>
      <div class="flex relative right-0">
        <div class="flex gap-[22px]">
          <img
            class="py-[10px] px-[18px] cursor-pointer"
            src="../../assets/icons/notification 1.svg"
            alt="iconswt"
          />
          <img
            @click="toggleModal"
            class="cursor-pointer"
            src="../../assets/icons/Ellipse 2.svg"
            alt="userimg"
          />
        </div>
        <div
          v-if="modalActive"
          class="absolute z-10 right-[0px] bottom-[-200px] w-[200px] flex text-[15px] bg-BGC rounded-[10px]"
        >
          <ul
            class="flex flex-col items-center capitalize transition ease-in duration-400 text-light-black w-[100%] justify-center text-center gap-[4px] mx-[12px]"
          >
            <a
              class="flex gap-[10px] hover:transition-all transition ease-in duration-400 w-[100%] py-[10px] border-solid border-b-2 border-bordrBtnGry cursor-pointer"
              href="#"
            >
              <img
                class="flex w-[20px] h-[20px]"
                src="../../assets/icons/user-square 1.svg"
                alt=""
              />
              <li class=" ">Manage account</li>
            </a>
            <a
              class="flex gap-[10px] hover:transition-all transition ease-in duration-400 w-[100%] py-[10px] border-solid border-b-2 border-bordrBtnGry cursor-pointer"
              href="#"
            >
              <img
                class="flex w-[20px] h-[20px]"
                src="../../assets/icons/bxs-plane-take-off 1.svg"
                alt=""
              />
              <li class=" ">My Trips</li>
            </a>
            <a
              class="flex gap-[10px] w-[100%] py-[10px] border-solid border-b-2 border-bordrBtnGry cursor-pointer"
              href="#"
            >
              <img
                class="w-[20px] h-[20px]"
                src="../../assets/icons/wallet-3 1.svg"
                alt=""
              />
              <li class=" ">Reward and wallet</li>
            </a>
            <RouterLink
              :to="{ name: 'home' }"
              class="flex gap-[10px] w-[100%] py-[10px] border-solid border-b-2 border-bordrBtnGry cursor-pointer"
              href="#"
            >
              <img
                class="w-[20px] h-[20px]"
                src="../../assets/icons/logout 1.svg"
                alt=""
              />
              <li class="">Sign out</li>
            </RouterLink>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>
