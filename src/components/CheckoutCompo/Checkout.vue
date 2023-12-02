<template>
  <div class="bg-bggraynstedpage py-2 ">

  <!-- <div class="  bg-yellow-500   "> -->
    <!-- <div class=" bg-yellow-500  mt-[128px] "> -->
      <div class="  bg-yellow-500  mt-[128px] mb-[141px]  ">

    <!-- <div class="bg-red-500 p-2 h-[72px]    "> -->
      <NavSigninedSecndry  />
    <!-- </div> -->

    <div class="p-2 bg-pink-400 m-auto w-[calc(100%-100px)]  ">
      <!-- <div class="bg-bordersr m-auto w-[calc(100%-100px)]  "> -->

      <p class="text-[32px] font-[600] text-checkoutText1 mb-[30px]">Secure your reservation</p>

        
      <!-- <div class="bg-green-500 p-2 "> -->

      <div class="relative top-[1px] bg-slate-700 p-2">
        <div class="absolute w-full bottom-unset h-[72px] bg-slate-500 mb-[30px] top-[1px] left-0">
          <!-- <HomeAlert class="relative" /> -->
        </div>
      </div>

      <!-- </div> -->



      <div class="bg-orange-300 p-2 flex gap-[30px] mt-[130px]">

      <!-- start left big div -->

        <div class="bg-slate-400 p-2 flex-1 flex flex-col gap-[30px]">

        <!-- ////////////////////////////// -->

            <div class="bg-green-600 p-2">
            <div class="bg-primary text-white rounded-t-[6px] ">
              <div class="flex gap-[16px] font-[500] py-[18px] pl-[20px]">
                <img src="../../assets/icons/security-user 111.svg" alt="security-user">
                <p class=" text-[18px]" >Room 1 </p>
                <span class="pl-[2px] text-[16px]">2 adults, 1 double bed and 1 twin bed, Non-smoking</span>
              </div>
            </div>
            <div class="bg-white rounded-b-[6px]">
              
              <form @submit.prevent class="px-[32px] pt-[32px] p-[40px] flex flex-col gap-[20px] " >

                <div class="bg-pink-200 p-2 flex gap-[20px] w-2/3  "> 
                  <div class="flex flex-col gap-[4px]  w-full ">
                    <label >First name </label>
                    <input class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray 
                    focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white " type="text" placeholder="Juilis">
                  </div>
                  <div class="flex flex-col gap-[4px] w-full ">
                    <label > Last name </label>
                    <input class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray 
                      focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white " type="text" placeholder="Lorenzo">
                  </div>
                </div>

                <div class="bg-pink-800 p-2 flex gap-[12px] w-2/3 "> 

                  <div class="flex gap-[4px] items-end w-full bg-slate-800  ">
                    <div class="flex flex-col bg-orange-300 mr-[12px] w-[33%] "><label >Mobile number</label> 
                      <div class=" bg-inputsGray rounded-[4px] flex items-center px-[12px] py-[10px] gap-[10px] ">
                        <img class="w-[24px] h-[24px]" src="../../assets/imgs/flag.png" alt="flagnumber">
                        <input v-model="searchQuery"  @input="getSearchContsResults" 
                        class="rounded-[4px] w-full bg-inputsGray 
                        focus:outline-none focus:ring focus:border-primary focus:border-2
                        focus:bg-white " type="number" placeholder="+91" >
                        <span @click="toggleModal" class="flex cursor-pointer  ">
                          <svg  v-show="!modalActive"  xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                              <path d="M1.72027 6.03345L6.06694 1.68678C6.58027 1.17345 7.42027 1.17345 7.93361 1.68678L12.2803 6.03345" stroke="#828282" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <svg  v-show="modalActive" xmlns="http://www.w3.org/2000/svg" 
                              width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655" 
                              stroke="#828282" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div class="flex flex-col gap-[4px] w-[70%]">
                      <input class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray 
                        focus:outline-none focus:ring focus:border-primary
                        focus:border-2 focus:bg-white " type="text" placeholder="88672778">
                    </div>

                  </div>

                </div>

                <div class="bg-yellow-200 p-1 w-2/3 flex gap-[8px] items-center ">
                  <input class="w-[20px] h-[20px] rounded-[5px] border-2 border-bordersr "  type="checkbox">
                  <p>Receive text alerts about this trip.</p>
                </div>

              </form>
            </div>

        </div>

        <!-- ////////////////////////////// -->

           <div class="bg-green-600 p-2">
              <div class="bg-primary text-white rounded-t-[6px] ">
                <div class="flex gap-[16px] font-[500] py-[18px] pl-[20px]">
                  <img src="../../assets/icons/card-tick 111.svg" alt="card">
                  <p class=" text-[18px]" >Payment options </p>
                 </div>
              </div>
              <div class="bg-white rounded-b-[6px]">
              
              <form @submit.prevent class="px-[32px] pt-[32px] p-[40px] flex flex-col gap-[20px] " >

                <div class="bg-pink-200 p-2 flex gap-[20px] w-2/3  "> 
                  <div class="flex flex-col gap-[4px]  w-full ">
                    <label >First name </label>
                    <input class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray 
                  focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white " type="text" placeholder="Juilis">
                  </div>
                  <div class="flex flex-col gap-[4px] w-full ">
                    <label > Last name </label>
                    <input class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray 
                    focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white " type="text" placeholder="Lorenzo">
                  </div>
                </div>

                <!-- // -->


                <div class="bg-pink-200 p-2 flex gap-[20px] w-2/3  "> 
                    <div class="flex flex-col gap-[4px]  w-full ">
                      <label >First name </label>
                      <input class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray 
                  focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white " type="text" placeholder="Juilis">
                    </div>
                    <div class="flex flex-col gap-[4px] w-full ">
                      <label > Last name </label>
                      <input class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray 
                    focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white " type="text" placeholder="Lorenzo">
                    </div>
                  </div>

                  <!-- /// -->


                  <div class="bg-pink-200 p-2 flex gap-[20px] w-2/3  "> 
                    <div class="flex flex-col gap-[4px]  w-full ">
                      <label >First name </label>
                      <input class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray 
                        focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white " type="text" placeholder="Juilis">
                    </div>
                    <div class="flex flex-col gap-[4px] w-full ">
                      <label > Last name </label>
                      <input class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray 
                        focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white " type="text" placeholder="Lorenzo">
                    </div>
                  </div>

                  <!-- // -->

                  <div class="bg-pink-200 p-2 flex gap-[20px] w-2/3  "> 
                    <div class="flex flex-col gap-[4px]  w-full ">
                      <label >First name </label>
                      <input class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray 
                      focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white " type="text" placeholder="Juilis">
                    </div>
                    <div class="flex flex-col gap-[4px] w-full ">
                      <label > Last name </label>
                      <input class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray 
                        focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white " type="text" placeholder="Lorenzo">
                    </div>
                  </div>

                  <!-- //// -->

                  <div class="bg-pink-200 p-2 flex gap-[20px] w-2/3  "> 
                    <div class="flex flex-col gap-[4px]  w-full ">
                      <label >First name </label>
                      <input class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray 
                      focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white " type="text" placeholder="Juilis">
                    </div>
                    <div class="flex flex-col gap-[4px] w-full ">
                      <label > Last name </label>
                      <input class="rounded-[4px] px-[12px] pt-[11px] pb-[12px] bg-inputsGray 
                    focus:outline-none focus:ring focus:border-primary focus:border-2 focus:bg-white " type="text" placeholder="Lorenzo">
                    </div>
                  </div>

                  <!-- /// -->

                </form>

              </div>
            </div>

      <!-- ////////////////////////////// -->

         <div class=" ">
                <div class="bg-CkeckoutYellowPAy text-Gray2 rounded-t-[6px] ">
                  <div class="flex gap-[16px] font-[500] py-[18px] pl-[20px]">
                    <p class=" text-[18px]" >Important information about your booking</p>
                  </div>
                </div>

                <div class="bg-white rounded-b-[6px]">
              
                  <div  class="px-[32px] pt-[32px] p-[40px] flex flex-col  " >

                    <div class=" p-[24px] flex  mb-[32px]"> 
                      <ol class="list-decimal">
                        <li>This rate is non-refundable.
                           If you change or cancel your booking you will not get a refund or credit
                            to use for a future stay.
                        </li>
                        <li>Stay extensions will require a new reservation.</li>
                        <li>Front desk staff will greet guests on arrival</li>
                        <li>No refunds will be issued for late check-in or early check-out.</li>
                      </ol>
                    </div>

                    <div class="text-[14px]">
                      <p>By clicking the button below, I acknowledge that I have reviewed the 
                      <a href="#" class="text-primary">Privacy Statement</a>
                       and have reviewd and accept the
                       <a href="#" class="text-primary" >Rules and Restrictions</a> 
                          and 
                       <a href="#" class="text-primary" > Terms of Use</a> . </p>
                    </div>

                    <button class="px-[18px] py-[12px] bg-primary text-white text-[15px] 
                    w-1/4 mb-[21px] mt-[24px]"> Complete Booking </button>

                    <div class="flex gap-[8px] ">
                      <img class="w-[24px] h-[24px] " src="../../assets/icons/lock-circle 111.svg" alt="lock">
                      <p  >We use secure transmission and encrypted storage to protect your personal information </p>
                    </div>

                  </div>
                
                </div>
              </div>


        <!-- ////////////////////////////// -->


        </div>


      <!-- end left big div -->
      

      <!-- start right big div -->

        <div  class="flex-2 flex flex-col gap-[30px] w-1/3 " >

            <div class="bg-white rounded-b-[6px] rounded-t-[6px] ">

              <div class="mb-[20px]  ">
                <img class="rounded-t-[6px]" src="../../assets/imgs/d3.png" alt="d3">
              </div>
              <div class="pl-[20px] pb-[20px] ">
                <p class="mb-[10px]" >Lakeside Motel Warefront</p>
                <!-- ///starts and viwes div //// -->
                <div class="flex gap-[12px] mb-[25px]">
                  <span class="flex"> 
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/srhv.svg" alt="strhf">
                  </span>
                  <span class="text-[14px] text-light-black"> 4.5 (1200 Reviews)</span>
                </div>
                <!-- ////end stars and wies div /// -->
                <p class="text-srchRed text-[14px] mb-[8px] " >Non refundable</p>
                <div class="text-[14px] text-light-black flex flex-col gap-[8px]">
                  <p class="  " >Check in: Sunday, March 18, 2022</p>
                  <p class="  " >Check out: Tuesday, March 20, 2022</p>
                  <p class="  " >2 night stay</p>
                </div>
              
              </div>

            </div>

            <div class=" ">

            <div class="bg-CeckoutGreen rounded-t-[6px] p-[18px] ">
              <p class="text-[16px] font-[500] text-checkoutText1 " >Price Details</p>
            </div>
            <div class="bg-white rounded-b-[6px] border-x-2 border-b-2 border-borderserbox  ">
              <ul class="flex px-[18px] pt-[18px] pb-[20px] flex-col gap-[12px] text-light-black">
                <li class="flex justify-between ">
                  <p>1 room X 2 nights</p>
                  <span>$ 120.32</span>
                </li>

                <li class="flex justify-between " >
                  <p>Tax and service fees</p>
                  <span>$ 8.32</span>
                </li>
              </ul>
              <hr>

              <div class="flex justify-between px-[18px] pb-[23px] pt-[25px] text-checkoutText1  ">
                <p class="text-[16px] font-[500]" >Total</p>
                <span class="text-[20px] font-[600] ">$130</span>
              </div>

             
            </div>
            
          </div>


        </div>

        <!-- end right big div -->

      </div>


    </div>



  </div>


  </div>
</template>

<script setup>
import NavSigninedSecndry from '../Navs/NavSigninedSecndry.vue';
import HomeAlert from '../HomePageCompos/HomeAlert.vue';
</script>

<style scoped>
/* p{
  color: #F4F4F4;
} */
</style>