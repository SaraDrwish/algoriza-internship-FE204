<template>
  <div>

    <div class="flex flex-col gap-[20px]">

      <div class="bg-inputsGray py-[20px]  px-[18px] rounded-[6px]   ">
        <p class="text-[18px] text-dark-black mb-[16px] ">Search by property name</p>
        <div class="flex gap-[10px] items-center pt-[11px] pb-[12px] 
          px-[12px] justify-center bg-white border-solid border-2 border-borderserbox rounded-[4px]">
          <img class="w-[20px] h-[20px]  " src="../../assets/icons/search 1.svg" alt="search">
          <input class="bg-white text-light-black "  type="text" placeholder="eg. Beach westpalm">
        </div>
      </div>

      <div class="">
         <p class="mb-[20px] text-[18px] font-[600]">Filter by</p>
         <div class="flex flex-col  border-solid border-2 border-borderserbox rounded-[6px] ">
           <div class="bg-inputsGray  p-[18px] text-[16px] font-[500] rounded-t-[6px] ">Your budget per day</div>
           <div class="flex flex-col p-[18px]">
            <div class="">
               <ul class="flex flex-col gap-[14px]">

                <li class="flex justify-between items-center ">
                  <div class="flex gap-[8px] items-center ">
                      <input type="checkbox" class="rounded-[15px] border-bordersr w-[20px] h-[20px]" checked="checked">
                      <span> $ 0 - $ 200 </span>
                  </div>

                </li>

                <li class="flex justify-between items-center ">
                  <div class="flex gap-[8px] items-center ">
                      <input type="checkbox" class="rounded-[15px] bg-bordersr border-bordersr w-[20px] h-[20px] " >
                      <span>$ 200 - $ 500</span>
                  </div>

                </li>

                <li class="flex justify-between items-center ">
                  <div class="flex gap-[8px] items-center " >
                      <input type="checkbox" class="rounded-[15px] bg-bordersr border-bordersr w-[20px] h-[20px] " >
                      <span>$ 500 - $ 1,000</span>
                  </div>

                </li>

                <li class="flex justify-between items-center ">
                  <div class="flex gap-[8px] items-center">
                      <input type="checkbox" class="rounded-[15px] bg-bordersr border-bordersr w-[20px] h-[20px] " >
                      <span>$ 1,000 - $ 2,000</span>
                  </div>

                </li>

                <li class="flex justify-between items-center ">
                  <div class="flex gap-[8px] items-center">
                      <input type="checkbox" class="rounded-[15px] bg-bordersr border-bordersr w-[20px] h-[20px] ">
                      <span>$ 2,000 - $ 5,000</span>
                  </div>

                </li>

              </ul>
            
            </div>
            <div class="flex my-[20px] gap-[99px]">
              <p>Set your own budget</p>
              <img src="../../assets/icons/switcer.svg" alt="swicher1">
            </div>
             <div class="flex gap-[35px] mt-[15px]">
              <button class="border-solid border-1 pt-[11px] pb-[12px] px-[12px] border-borderserbox">Min budget</button>
              <button class="border-solid border-1 pt-[11px] pb-[12px] px-[12px] border-borderserbox">Max budget</button>
            </div>

           </div>
         </div>
      </div>

          <div class="flex flex-col  border-solid border-2 border-borderserbox rounded-[6px] ">
            <div class="bg-inputsGray p-[18px] text-[16px] font-[500] rounded-t-[6px] ">Rating</div>
            <div class="flex flex-col p-[18px]">
            <div class="">
              <p class="mb-[8px]">Show only ratings more than</p>
               <div class="rounded-[5px] ">
                 <ul class="flex border-solid border-2 border-borderserbox  rounded-[5px] ">
                   <li class=" flex  items-center justify-center gap-[1px] p-[14px]  " >
                     <span>1</span> 
                     <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                   </li>
                   <li class=" flex items-center justify-center gap-[1px] p-[14px]  border-solid border-l-2 border-borderserbox " >
                     <span>2</span> 
                     <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                   </li>
                   <li class=" flex gap-[1px] p-[14px]  border-solid border-l-2 border-borderserbox " >
                     <span>3</span> 
                     <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                   </li>
                   <li class=" flex items-center justify-center gap-[1px] p-[14px]  border-solid border-l-2 border-borderserbox " >
                     <span>4</span> 
                     <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                  </li>
                  <li class="flex gap-[1px] items-center justify-center px-[14px] border-solid border-l-2 border-borderserbox " >
                    <span>5</span> 
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                  </li>
                 </ul>
               </div>
            </div>

        </div>
      </div>

      <!-- end box  -->

    </div>

  </div>
</template>

<script setup>

</script>

<style>
input{
  background-color: unset !important;
}
.leftbox button:hover {
  background-color: unset;
}
</style>
