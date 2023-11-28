<template>
  <div>



 
        <div class="flex items-center justify-between  mb-[24px]  ">
          <h2 class="text-[24px] font-[600] text-dark-black">Melbourne : 2,582 search results found</h2>
            <div class="flex items-center w-[190px] gap-[10px]  mx-[12px] mt-[11px] mb-[12px]">
               <button class="flex items-center justify-between border-solid border-1 border-bordersr
               w-[100%] rounded-[6px] py-[8px] px-[12px] bg-transparent hover:bg-transparent "  > 
               
                  <div class="flex flex-col gap-[2px] text-left">
                    <span class="text-sortText text-[12px]">Sort by :</span>
                    <span class="text[14px] ">Recommended</span>
                  </div>

                   <div @click="toggleModalSerch" class="flex cursor-pointer  ">
                      <svg  v-show="!modalActiveSerch"  xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                          <path d="M1.72027 6.03345L6.06694 1.68678C6.58027 1.17345 7.42027 1.17345 7.93361 1.68678L12.2803 6.03345" stroke="#828282" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <svg  v-show="modalActiveSerch" xmlns="http://www.w3.org/2000/svg" 
                          width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655" 
                          stroke="#828282" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
               
                </button>
              </div>
 
 
        </div>
       


  </div>
</template>

<script setup>

</script>

 