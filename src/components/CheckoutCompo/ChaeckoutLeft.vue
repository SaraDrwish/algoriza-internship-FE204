<template>
  <div>
    <!-- start left sec -->
    <form @submit.prevent class=" ">
      <div class="flex-1 flex flex-col gap-[30px]">
        <!-- ////////////////////////////// -->

        <div class=" ">
          <div class="bg-primary text-white rounded-t-[6px]">
            <div class="flex gap-[16px] font-[500] py-[18px] pl-[20px]">
              <img
                src="../../assets/icons/security-user 111.svg"
                alt="security-user"
              />
              <p class="text-[18px]">Room 1</p>
              <span class="pl-[2px] text-[16px]"
                >2 adults, 1 double bed and 1 twin bed, Non-smoking</span
              >
            </div>
          </div>
          <div class="bg-white rounded-b-[6px]">
            <form
              @submit.prevent
              class="px-[32px] pt-[32px] p-[40px] flex flex-col gap-[20px]"
            >
              <div class="flex gap-[20px] w-2/3">
                <div class="flex flex-col gap-[4px] w-full">
                  <label>First name </label>
                  <input
                    required
                    class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white"
                    type="text"
                    placeholder="Juilis"
                  />
                </div>
                <div class="flex flex-col gap-[4px] w-full">
                  <label> Last name </label>
                  <input
                    required
                    class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white"
                    type="text"
                    placeholder="Lorenzo"
                  />
                </div>
              </div>

              <div class="flex gap-[12px] w-2/3">
                <div class="flex gap-[4px] items-end w-full">
                  <div class="flex flex-col mr-[12px] w-[33%]">
                    <label>Mobile number</label>
                    <div
                      class="bg-inputsGray rounded-[4px] flex items-center px-[12px] py-[10px] gap-[10px]"
                    >
                      <img
                        class="w-[24px] h-[24px]"
                        src="../../assets/imgs/flag.png"
                        alt="flagnumber"
                      />
                      <input
                        required
                        v-model="searchQuery"
                        @input="getSearchContsResults"
                        class="rounded-[4px] w-full bg-inputsGray focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white appearance-none"
                        type="number"
                        placeholder="+91"
                      />
                      <span @click="toggleModal" class="flex cursor-pointer">
                        <svg
                          v-show="!modalActive"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                        >
                          <path
                            d="M1.72027 6.03345L6.06694 1.68678C6.58027 1.17345 7.42027 1.17345 7.93361 1.68678L12.2803 6.03345"
                            stroke="#828282"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          v-show="modalActive"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655"
                            stroke="#828282"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div class="flex flex-col gap-[4px] w-[70%]">
                    <input
                      required
                      class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white"
                      type="text"
                      placeholder="88672778"
                    />
                  </div>
                </div>
              </div>

              <div class="w-2/3 flex gap-[8px] items-center">
                <input
                  required
                  class="w-[20px] h-[20px] rounded-[5px] border-2 border-bordersr"
                  type="checkbox"
                />
                <p>Receive text alerts about this trip.</p>
              </div>
            </form>
          </div>
        </div>

        <!-- ////////////////////////////// -->

        <div class=" ">
          <div class="bg-primary text-white rounded-t-[6px]">
            <div class="flex gap-[16px] font-[500] py-[18px] pl-[20px]">
              <img src="../../assets/icons/card-tick 111.svg" alt="card" />
              <p class="text-[18px]">Payment options</p>
            </div>
          </div>

          <div class="bg-white rounded-b-[6px]">
            <div class="pl-[32px] pt-[8px]">
              <p
                class="w-[156px] text-[14px] border-b-4 cursor-pointer border-b-primary py-[10px] px-[14px]"
              >
                Debit/Credit Card
              </p>
            </div>
            <!-- <hr class="border-b-2 " > -->
            <hr />

            <form
              @submit.prevent
              class="px-[32px] pt-[32px] p-[40px] flex flex-col gap-[20px]"
            >
              <!-- /// -->
              <div class="flex gap-[6px] mb-[26px]">
                <div class="bg-inputsGray rounded-[5px] p-[8px]">
                  <img
                    class="w-[42px] h-[24px]"
                    src="../../assets/imgs/visa.png"
                    alt="master visa"
                  />
                </div>
                <div
                  class="bg-inputsGray rounded-[5px] p-[8px] w-[60px] h-[40px]"
                >
                  <img
                    class="w-[42px] h-[24px]"
                    src="../../assets/imgs/visavisa.png"
                    alt=" visa"
                  />
                </div>
                <div
                  class="bg-inputsGray rounded-[5px] p-[8px] w-[60px] h-[40px]"
                >
                  <img
                    class="w-[42px] h-[24px]"
                    src="../../assets/imgs/amricanExpress.png"
                    alt="amrican "
                  />
                </div>
                <div
                  class="bg-inputsGray rounded-[5px] p-[8px] w-[60px] h-[40px]"
                >
                  <img
                    class="w-[100%] h-[100%]"
                    src="../../assets/imgs/image 8.png"
                    alt="discvr "
                  />
                </div>
              </div>
              <!-- /// -->

              <div class="flex gap-[16px] items-end">
                <div class="flex flex-col gap-[4px] w-2/3">
                  <label>Name on card</label>
                  <input
                    required
                    class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray focus:ring focus:border-primary"
                    type="text"
                    placeholder="Julius Lorenzo"
                  />
                </div>
                <div
                  class="flex flex-col gap-[4px] w-1/3 py-[12px] px-[16px] items-start"
                >
                  <img
                    class="w-[24px] h-[24px]"
                    src="../../assets/icons/tick-circle 111.svg"
                    alt="ticCircl"
                  />
                </div>
              </div>

              <!-- // -->

              <div class="flex gap-[16px] items-end">
                <div class="flex flex-col gap-[4px] w-2/3">
                  <label>Debit/Credit card number </label>
                  <input
                    required
                    class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white"
                    type="text"
                    placeholder="9923464374822293"
                  />
                </div>
                <div
                  class="flex flex-col gap-[4px] w-1/3 py-[12px] px-[16px] items-start"
                >
                  <img
                    class="w-[24px] h-[24px]"
                    src="../../assets/icons/tick-circle 111.svg"
                    alt="ticCircl"
                  />
                </div>
              </div>

              <!-- /// -->

              <div class="flex flex-col gap-[4px] w-2/3">
                <div class="flex flex-col">
                  <label>Expiration Date </label>
                </div>
                <div class="flex gap-[12px] w-full">
                  <div class="relative">
                    <select
                      required
                      v-model="selectedMonth"
                      @click="toggleArrows(2, !isSelectFocused2)"
                      @change="toggleArrows(2, false)"
                      id="month"
                      class="w-[199px] text-left rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white appearance-none"
                    >
                      <option
                        v-for="(month, indx) in months"
                        :key="indx"
                        :value="indx + 1"
                        class="p-[12px] m-[10px] text-primary"
                      >
                        {{ month }}
                      </option>
                    </select>

                    <span
                      @click="toggleDropdown"
                      class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        v-show="!isSelectFocused2"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655"
                          stroke="#828282"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        v-show="isSelectFocused2"
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                      >
                        <path
                          d="M1.72027 6.03345L6.06694 1.68678C6.58027 1.17345 7.42027 1.17345 7.93361 1.68678L12.2803 6.03345"
                          stroke="#828282"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <!-- //////////////////////// -->

                  <div
                    @focus="toggleArrows(true)"
                    @blur="toggleArrows(false)"
                    class="relative"
                  >
                    <select
                      required
                      style="bottom: 0"
                      v-model="selectedYear"
                      @click="toggleArrows(1, !isSelectFocused)"
                      @change="toggleArrows(1, false)"
                      class="rounded-[4px] w-[190px] bg-inputsGray appearance-none focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white px-[12px] pt-[11px] pb-[12px]"
                    >
                      <option
                        style="bottom: 0"
                        v-for="year in getYears()"
                        :key="year"
                        :value="year"
                      >
                        {{ year }}
                      </option>
                    </select>

                    <span
                      @click="toggleDropdown"
                      class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        v-show="!isSelectFocused"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655"
                          stroke="#828282"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        v-show="isSelectFocused"
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                      >
                        <path
                          d="M1.72027 6.03345L6.06694 1.68678C6.58027 1.17345 7.42027 1.17345 7.93361 1.68678L12.2803 6.03345"
                          stroke="#828282"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <!-- /////// -->

                  <div
                    class="flex flex-col gap-[4px] w-1/3 py-[12px] px-[16px] items-start"
                  >
                    <img
                      class="w-[24px] h-[24px]"
                      src="../../assets/icons/tick-circle 111.svg"
                      alt="ticCircl"
                    />
                  </div>
                </div>
              </div>

              <!-- ////////////////////////// -->

              <div class="flex w-2/3">
                <div class="flex gap-[20px] w-full items-end">
                  <div class="flex flex-col gap-[4px]">
                    <label>Security Code </label>
                    <input
                      required
                      class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white"
                      type="number"
                      placeholder="543"
                    />
                  </div>
                  <div class="flex flex-col gap-[4px]">
                    <label>Billing Zip code </label>
                    <input
                      required
                      class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white"
                      type="number"
                      placeholder="203846"
                    />
                  </div>
                  <div class="flex flex-col w-1/3 py-[12px] px-[16px]">
                    <img
                      class="w-[24px] h-[24px]"
                      src="../../assets/icons/tick-circle 111.svg"
                      alt="ticCircl"
                    />
                  </div>
                </div>
              </div>

              <!-- //// -->
            </form>
          </div>
        </div>

        <!-- ////////////////////////////// -->

        <div class=" ">
          <div class="bg-CkeckoutYellowPAy text-Gray2 rounded-t-[6px]">
            <div class="flex gap-[16px] font-[500] py-[18px] pl-[20px]">
              <p class="text-[18px]">
                Important information about your booking
              </p>
            </div>
          </div>

          <div class="bg-white rounded-b-[6px]">
            <div class="px-[32px] pt-[32px] p-[40px] flex flex-col">
              <div class="p-[24px] flex mb-[32px]">
                <ol class="list-decimal">
                  <li>
                    This rate is non-refundable. If you change or cancel your
                    booking you will not get a refund or credit to use for a
                    future stay.
                  </li>
                  <li>Stay extensions will require a new reservation.</li>
                  <li>Front desk staff will greet guests on arrival</li>
                  <li>
                    No refunds will be issued for late check-in or early
                    check-out.
                  </li>
                </ol>
              </div>

              <div class="text-[14px]">
                <p>
                  By clicking the button below, I acknowledge that I have
                  reviewed the
                  <a href="#" class="text-primary">Privacy Statement</a>
                  and have reviewd and accept the
                  <a href="#" class="text-primary">Rules and Restrictions</a>
                  and
                  <a href="#" class="text-primary"> Terms of Use</a> .
                </p>
              </div>
              <RouterLink :to="{ name: 'checkoutcard' }">
                <button
                  class="px-[18px] py-[12px] bg-primary text-white text-[15px] w-1/4 mb-[21px] mt-[24px]"
                >
                  Complete Booking
                </button>
              </RouterLink>
              <div class="flex gap-[8px]">
                <img
                  class="w-[24px] h-[24px]"
                  src="../../assets/icons/lock-circle 111.svg"
                  alt="lock"
                />
                <p>
                  We use secure transmission and encrypted storage to protect
                  your personal information
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- ///////////// -->
      </div>

      <!-- end left sec -->
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

// //////////////////////////

const selectedMonth = ref(4);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// //////////////////////////

const modalActive = ref(false);

const selectedYear = ref(new Date().getFullYear());

const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

// //////////////////////////

const isSelectFocused = ref(false);
const isSelectFocused2 = ref(false);

const toggleArrows = (selectNumber, focused) => {
  if (selectNumber === 1) {
    isSelectFocused.value = focused;
  } else if (selectNumber === 2) {
    isSelectFocused2.value = focused;
  }
};

const getYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear - 2; i <= currentYear + 20; i++) {
    years.push(i);
  }
  return years;
};

// //////////////////////////
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="text"]::placeholder,
input[type="number"]::placeholder {
  color: #333;
}
</style>
