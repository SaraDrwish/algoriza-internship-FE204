<template>
  <div class="h-[100vh]">
    <div class="m-auto flex flex-col">
      <NavSignined :showUl="false" :showRegstr="false" />
      <div class="w-[401px] m-auto flex flex-col items-center">
        <h2 class="text-[28px] mb-[40px] mt-[92px] font-[600]">Register</h2>

        <form
          @submit.prevent="handleSubmit"
          class="flex flex-col gap-[20px] m-auto w-[401px]"
        >
          <div class="flex flex-col gap-[4px]">
            <label for="email" class="text-dark-black font-[500] text-[14px]"
              >Email address</label
            >
            <input
              id="email"
              v-model="email"
              class="w-[400px] bg-inputsGray pt-[11px] pb-[12px] px-[12px]"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div class="flex flex-col gap-[4px]">
            <label for="password" class="text-dark-black font-[500] text-[14px]"
              >Password</label
            >
            <div
              class="flex justify-between rounded-[4px] gap-[12px] items-center w-[400px] bg-inputsGray pt-[11px] pb-[12px] px-[12px]"
            >
              <input
                id="password"
                v-model="password"
                class="w-full"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <img
                class="w-[20px] h-[20px] cursor-pointer"
                src="../../assets/icons/eye 1.svg"
                alt="password"
              />
            </div>
          </div>

          <div class="flex flex-col gap-[4px]">
            <label
              for="repassword"
              class="text-dark-black font-[500] text-[14px]"
              >Confirm password</label
            >
            <div
              class="flex justify-between rounded-[4px] gap-[12px] items-center w-[400px] bg-inputsGray pt-[11px] pb-[12px] px-[12px]"
            >
              <input
                id="repassword"
                v-model="repassword"
                class="w-full"
                type="password"
                name="repassword"
                placeholder="Confirm Password"
                required
              />
              <img
                class="w-[20px] h-[20px] cursor-pointer"
                src="../../assets/icons/eye 1.svg"
                alt="password"
              />
            </div>
          </div>

          <input
            class="bg-primary text-white rounded-[6px] w-[100%] pt-[11px] pb-[12px] cursor-pointer mt-[33px]"
            type="submit"
            value="Submit"
          />
        </form>

        <div class="text-center mt-[20px] text-[16px]">
          <p>
            Already have an account?
            <router-link class="text-primary" to="/signin">
              Sign in
            </router-link>
          </p>
        </div>
      </div>
    </div>

    <footerlastbtm class="absolute bottom-0 w-[100%]" />
  </div>
</template>

<script setup>
import NavSignined from "../layout/NavSignined.vue";
import footerlastbtm from "../layout/footerlastbtm.vue";

import { ref } from "vue";

const email = ref("");
const password = ref("");
const repassword = ref("");

const handleSubmit = async () => {
  if (password.value !== repassword.value) {
    alert("the password is not matching ");
    return;
  }
  try {
    window.localStorage.setItem("emailRegstord", email.value);
    window.localStorage.setItem("passRegstored", password.value);
    console.log("you did registered successfuly ");
    alert("you did registered successfuly ");
    // to clear the form :
    email.value = "";
    password.value = "";
    repassword.value = "";
  } catch (e) {
    console.log("registered failed  ", e);
  }
};
</script>
