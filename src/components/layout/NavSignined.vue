<template>
  <header class="fixed top-0 z-[100000] w-full bg-white shadow-sm">
    <nav
      class="mx-auto sm:flex-row flex shrink-0 items-center justify-between h-[68px] w-[calc(100%-100px)]"
    >
      <RouterLink :to="{ name: 'signedhome' }">
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

      <div v-if="showUl">
        <ul
          class="transition duration-300 ease-in inline-flex tracking-[0.36px] text-[16px] text-Gray2 items-start gap-[48px]"
        >
          <a class="hover:text-primary transition duration-300 ease-in" href="/"
            ><li>Home</li></a
          >
          <a class="hover:text-primary transition duration-300 ease-in" href="#"
            ><li>Discover</li></a
          >
          <a class="hover:text-primary transition duration-300 ease-in" href="#"
            ><li>Activities</li></a
          >
          <a class="hover:text-primary transition duration-300 ease-in" href="#"
            ><li>About</li></a
          >
          <a class="hover:text-primary transition duration-300 ease-in" href="#"
            ><li>Contact</li></a
          >
        </ul>
      </div>
      <!-- ////// -->
      <!-- <div v-if="showUl"> -->
      <div v-if="showRegstr">
        <router-link to="/register">
          <button
            class="transition duration-400 ease-in flex relative right-0 bg-primary py-[10px] px-[18px] text-white text-[15px] font-[500] leading-[20px] tracking-[0.3px]"
          >
            Register
          </button>
        </router-link>
      </div>
      <!-- ////////// -->
      <div v-if="showIcons" class="flex relative right-0">
        <div class="flex gap-[22px]">
          <img
            class="py-[10px] px-[18px] cursor-pointer"
            src="../../assets/icons/notification2.png"
            alt="icons"
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
          class="absolute right-[0px] bottom-[-200px] w-[200px] flex text-[15px] bg-BGC rounded-[10px]"
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
              <li @click="handleMyTripsBtn" class=" ">My Trips</li>
            </a>

            <RouterLink :to="{ name: 'checkout' }">
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
            </RouterLink>

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
  </header>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref, defineProps } from "vue";

const router = useRouter();

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
  showUl: {
    type: Boolean,
    default: true,
  },
  showRegstr: {
    type: Boolean,
    default: true,
  },
  showIcons: {
    type: Boolean,
    default: false,
  },
});

const handleMyTripsBtn = () => {
  router.push("/mytrips");
};

// //////////////////////////////////////////// // const props =
// defineProps(["showUl"]); // ///////////////////////////////////////////
</script>
