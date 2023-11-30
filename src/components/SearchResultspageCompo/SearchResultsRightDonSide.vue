<template>
  <div>

    <div class="flex flex-col  gap-[24px]  ">

  <!-- ///////////// -->

      <div class="flex gap-[24px] w-[100%]  rounded-[5px] 
        border-solid border-2 border-borderserbox  py-[20px] pl-[20px] pr-[24px] ">
        <div class="flex-2  rounded-[5px] ">
          <img class="w-[285px] h-[200px] rounded-[5px] " src="../../assets/imgs/12.png" alt="12">
        </div>
          <div class="flex flex-1  "  >                    
            <!-- <div class="flex flex-1 bg-orange-500 "  v-for="hotel in searchResults" :key="hotel.hotel_id"  >                     -->
          <div class=" flex-1 p-2">
            <!-- <p class="text-[20px] font-[500]">  {{ hotel.checkoutDate }} Julia Dens Resort</p> -->
              <p class="text-[20px] font-[500]">Julia Dens Resort</p>
            <div class="flex gap-[12px] mb-[17px]">
              <span class="flex"> 
                <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                <img src="../../assets/icons/srhv.svg" alt="strhf">
              </span>
              <span class="text-[14px] text-light-black"> 4.5 (1200 Reviews)</span>
            </div>
            <p class="text-[13px] font-[500] mb-[4px] ">Live a little and celbrate with champagne</p>
            <p class="text-[13px]   ">Reats include a glass of French champagne, parking 
              and a late checkout. Gym included. Flexible cancellation applies</p>
            <button @click="handleBotton" class="mt-[18px] text-white bg-primary rounded-[6px] py-[10px] px-[18px] text-[15px]">See availability</button>
          </div>
          <div class="flex items-end flex-col flex-2 text-right justify-between   ">
            <p class="text-[13px] bg-srchRed py-[4px] px-[8px] mb-[64px] rounded-[6px] font-[500] text-white" >Book now and receive 15% off</p>
            <p class="text-[13px] bg-srchGrn mb-[29px]  py-[4px] px-[8px] rounded-[6px]  font-[500] text-white" >5% off</p>
            <div class="flex flex-col items-end  ">
              <div class="flex gap-[8px] font-[500]  items-center  ">
                <span class="text-srchRed text-[14px] line-through ">$150</span>
                <span class="text-[20px]">$130</span>
              </div>
              <p class="mt-[6px]"> Includes taxes and fees </p>
          </div>
          
          </div>
        </div>
      </div>

<!-- ////// -->

<div class="flex gap-[24px] rounded-[5px] border-solid border-2 border-borderserbox py-[20px] pl-[20px] pr-[24px] ">
    <div class="flex-2  rounded-[5px] ">
      <img class="w-[285px] h-[200px] rounded-[5px] " src="../../assets/imgs/222.png" alt="12">
    </div>
    <div class="flex flex-1 ">
      <div class=" flex-1 p-2">
        <p class="text-[20px] font-[500]">Julia Dens Resort</p>
        <div class="flex gap-[12px] mb-[17px]">
          <span class="flex"> 
            <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
            <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
            <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
            <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
            <img src="../../assets/icons/srhv.svg" alt="strhf">
          </span>
          <span class="text-[14px] text-light-black"> 4.5 (1200 Reviews)</span>
        </div>
        <p class="text-[13px] font-[500] mb-[4px] ">Live a little and celbrate with champagne</p>
        <p class="text-[13px]   ">Reats include a glass of French champagne, parking 
          and a late checkout. Gym included. Flexible cancellation applies</p>
        <button @click="handleBotton" class="mt-[18px] text-white bg-primary rounded-[6px] py-[10px] px-[18px] text-[15px]">See availability</button>
      </div>
      <div class="flex items-end flex-col flex-2 text-right justify-end ">
      
        <div class="flex gap-[8px] font-[500]  items-center  ">
          <span class="text-[20px]">$250</span>
        </div>
        <p class="mt-[6px]"> Includes taxes and fees </p>
      </div>
    </div>
  </div>

<!-- //////// -->

  <div class="flex gap-[24px] rounded-[5px] border-solid border-2 border-borderserbox py-[20px] pl-[20px] pr-[24px] ">
      <div class="flex-2  rounded-[5px] ">
        <img class="w-[285px] h-[200px] rounded-[5px] " src="../../assets/imgs/333.png" alt="333">
      </div>
      <div class="flex flex-1 ">
        <div class=" flex-1 p-2">
          <p class="text-[20px] font-[500]">Aghnim Scepter Hotel</p>
          <div class="flex gap-[12px] mb-[17px]">
            <span class="flex"> 
              <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
              <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
              <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
              <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
              <img src="../../assets/icons/srhv.svg" alt="strhf">
            </span>
            <span class="text-[14px] text-light-black"> 4.5 (1200 Reviews)</span>
          </div>
          <p class="text-[13px] font-[500] mb-[4px] ">Live a little and celbrate with champagne</p>
          <p class="text-[13px]   ">Reats include a glass of French champagne, parking 
            and a late checkout. Gym included. Flexible cancellation applies</p>
          <button class="mt-[18px] text-white bg-primary rounded-[6px] py-[10px] px-[18px] text-[15px]">See availability</button>
        </div>
        <div class="flex items-end flex-col flex-2 text-right justify-between  ">
          <p class="text-[13px] bg-orngressearchbox  py-[4px] px-[8px] 
        mb-[64px] rounded-[6px] font-[500] text-white" >Receive 30% discount on a restaurant</p>
          <div class="flex flex-col items-end">
            <div class="flex gap-[8px] font-[500]  items-center  ">
              <span class="text-[20px]">$300</span>
            </div>
            <p class="mt-[6px]"> Includes taxes and fees </p> 
          </div>
        
        </div>
      </div>
  </div>

<!-- ////// -->

<div class="flex gap-[24px] rounded-[5px] border-solid border-2 border-borderserbox py-[20px] pl-[20px] pr-[24px] ">
      <div class="flex-2  rounded-[5px] ">
        <img class="w-[285px] h-[200px] rounded-[5px] " src="../../assets/imgs/444.png" alt="12">
      </div>
      <div class="flex flex-1 ">
        <div class=" flex-1 p-2">
          <p class="text-[20px] font-[500]">Julia Dens Resort</p>
          <div class="flex gap-[12px] mb-[17px]">
            <span class="flex"> 
              <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
              <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
              <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
              <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
              <img src="../../assets/icons/srhv.svg" alt="strhf">
            </span>
            <span class="text-[14px] text-light-black"> 4.5 (1200 Reviews)</span>
          </div>
          <p class="text-[13px] font-[500] mb-[4px] ">Live a little and celbrate with champagne</p>
          <p class="text-[13px]   ">Reats include a glass of French champagne, parking 
            and a late checkout. Gym included. Flexible cancellation applies</p>
          <button @click="handleBotton" class="mt-[18px] text-white bg-primary rounded-[6px] py-[10px] px-[18px] text-[15px]">See availability</button>
        </div>
        <div class="flex items-end flex-col flex-2 text-right justify-end ">
    
          <div class="flex gap-[8px] font-[500]  items-center  ">
            <span class="text-[20px]">$120</span>
          </div>
          <p class="mt-[6px]"> Includes taxes and fees </p>
        </div>
      </div>
  </div>

  <!-- //////// -->

    <div class="flex gap-[24px] rounded-[5px] border-solid border-2 border-borderserbox py-[20px] pl-[20px] pr-[24px] ">
          <div class="flex-2  rounded-[5px] ">
            <img class="w-[285px] h-[200px] rounded-[5px] " src="../../assets/imgs/77.png" alt="12">
          </div>
          <div class="flex flex-1 ">
            <div class=" flex-1 p-2">
              <p class="text-[20px] font-[500]">Shanghai Open House</p>
              <div class="flex gap-[12px] mb-[17px]">
                <span class="flex"> 
                  <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                  <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                  <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                  <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                  <img src="../../assets/icons/srhv.svg" alt="strhf">
                </span>
                <span class="text-[14px] text-light-black"> 4.5 (1200 Reviews)</span>
              </div>
              <p class="text-[13px] font-[500] mb-[4px] ">Live a little and celbrate with champagne</p>
              <p class="text-[13px]   ">Reats include a glass of French champagne, parking 
                and a late checkout. Gym included. Flexible cancellation applies</p>
              <button @click="handleBotton" class="mt-[18px] text-white bg-primary rounded-[6px] py-[10px] px-[18px] text-[15px]">See availability</button>
            </div>
            <div class="flex items-end flex-col flex-2 text-right justify-end ">
    
              <div class="flex gap-[8px] font-[500]  items-center  ">
                <span class="text-[20px]">$145</span>
              </div>
              <p class="mt-[6px]"> Includes taxes and fees </p>
            </div>
          </div>
      </div>

      <!-- /////////// -->


        <div class="flex gap-[24px] rounded-[5px] border-solid border-2 border-borderserbox py-[20px] pl-[20px] pr-[24px] ">
            <div class="flex-2  rounded-[5px] ">
              <img class="w-[285px] h-[200px] rounded-[5px] " src="../../assets/imgs/88.png" alt="12">
            </div>
            <div class="flex flex-1 ">
              <div class=" flex-1 p-2">
                <p class="text-[20px] font-[500]">Ocean Waves Resort</p>
                <div class="flex gap-[12px] mb-[17px]">
                  <span class="flex"> 
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                    <img src="../../assets/icons/srhv.svg" alt="strhf">
                  </span>
                  <span class="text-[14px] text-light-black"> 4.5 (1200 Reviews)</span>
                </div>
                <p class="text-[13px] font-[500] mb-[4px] ">Live a little and celbrate with champagne</p>
                <p class="text-[13px]   ">Reats include a glass of French champagne, parking 
                  and a late checkout. Gym included. Flexible cancellation applies</p>
                <button class="mt-[18px] text-white bg-primary rounded-[6px] py-[10px] px-[18px] text-[15px]">See availability</button>
              </div>
              <div class="flex items-end flex-col flex-2 text-right justify-end ">
    
                <div class="flex gap-[8px] font-[500]  items-center  ">
                  <span class="text-[20px]">$310</span>
                </div>
                <p class="mt-[6px]"> Includes taxes and fees </p>
              </div>
            </div>
        </div>

      <!-- ///////// -->
 

        <div class="flex gap-[24px] w-[100%]  rounded-[5px] 
        border-solid border-2 border-borderserbox  py-[20px] pl-[20px] pr-[24px] ">
          <div class="flex-2  rounded-[5px] ">
            <img class="w-[285px] h-[200px] rounded-[5px] " src="../../assets/imgs/99.png" alt="12">
          </div>
            <div class="flex flex-1  "  >                    
            <div class=" flex-1 p-2">
                <p class="text-[20px] font-[500]">Maimi City frontier</p>
              <div class="flex gap-[12px] mb-[17px]">
                <span class="flex"> 
                  <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                  <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                  <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                  <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                  <img src="../../assets/icons/srhv.svg" alt="strhf">
                </span>
                <span class="text-[14px] text-light-black"> 4.5 (1200 Reviews)</span>
              </div>
              <p class="text-[13px] font-[500] mb-[4px] ">Live a little and celbrate with champagne</p>
              <p class="text-[13px]   ">Reats include a glass of French champagne, parking 
                and a late checkout. Gym included. Flexible cancellation applies</p>
              <button @click="handleBotton" class="mt-[18px] text-white bg-primary rounded-[6px] py-[10px] px-[18px] text-[15px]">See availability</button>
            </div>
            <div class="flex items-end flex-col flex-2 text-right justify-between   ">
              <p class="text-[13px] bg-orngressearchbox
               py-[4px] px-[8px]   rounded-[6px] font-[500] text-white" >
                 Receive 30% discount on a restaurant
              </p>
             <div class="flex items-end flex-col flex-2 text-right justify-end   ">
                <p class="text-[13px] bg-srchGrn mb-[29px]  py-[4px] px-[8px] rounded-[6px]  font-[500] text-white" >15% off</p>
                <div class="flex flex-col items-end  ">
                  <div class="flex gap-[8px] font-[500]  items-center  ">
                    <span class="text-srchRed text-[14px] line-through ">$200</span>
                    <span class="text-[20px]">$190</span>
                  </div>
                  <p class="mt-[6px]"> Includes taxes and fees </p>
              </div>
            </div>
          
            </div>
          </div>
        </div>

      <!-- ////////// -->

       <div class="flex gap-[24px] w-[100%]  rounded-[5px] 
        border-solid border-2 border-borderserbox  py-[20px] pl-[20px] pr-[24px] ">
          <div class="flex-2  rounded-[5px] ">
            <img class="w-[285px] h-[200px] rounded-[5px] " src="../../assets/imgs/999.png" alt="12">
          </div>
            <div class="flex flex-1  "  >                    
            <div class=" flex-1 p-2">
                <p class="text-[20px] font-[500]">Lakeside Motel Warefront</p>
              <div class="flex gap-[12px] mb-[17px]">
                <span class="flex"> 
                  <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                  <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                  <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                  <img src="../../assets/icons/star-s-fill 4fl.svg" alt="str">
                  <img src="../../assets/icons/srhv.svg" alt="strhf">
                </span>
                <span class="text-[14px] text-light-black"> 4.5 (1200 Reviews)</span>
              </div>
              <p class="text-[13px] font-[500] mb-[4px] ">
                Live a little and celbrate with champagne</p>
              <p class="text-[13px]   ">Reats include a glass of French 
                champagne, parking and a late checkout.
                 Gym included. Flexible cancellation applies</p>
              <button @click="handleBotton" class="mt-[18px] text-white bg-primary rounded-[6px] py-[10px] px-[18px] text-[15px]">See availability</button>
            </div>
            <div class="flex items-end flex-col flex-2 text-right justify-end   ">
              <p class="text-[13px] bg-srchGrn mb-[29px]  py-[4px] px-[8px] rounded-[6px]  font-[500] text-white" >15% off</p>
              <div class="flex flex-col items-end  ">
                <div class="flex gap-[8px] font-[500]  items-center  ">
                  <span class="text-srchRed text-[14px] line-through ">$320</span>
                  <span class="text-[20px]">$300</span>
                </div>
                <p class="mt-[6px]"> Includes taxes and fees </p>
            </div>
          
            </div>
          </div>
        </div>

      <!-- ////////// -->



  <!-- end cards -->

    </div>

  </div>
</template>

<script setup>

import { useRouter } from 'vue-router';
const router = useRouter()

const handleBotton = () => {
  
    router.push('/prodetails');
     
}
// /////////////////////

// const searchResults = ref(null);

// onMounted(async () => {
//   searchResults.value = await fetchSearchResults();
// });

// const fetchSearchResults = async () => {

//   const options = {
//     method: 'GET',
//     url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
//     params: {
//       dest_id: '20123249',
//       search_type: ' city',
//       arrival_date: '2023-11-28',
//       departure_date: '2023-11-30',
//       adults: '1',
//       children_age: '0,17',
//       room_qty: '1',
//       page_number: '1',
//       languagecode: 'en-us',
//       currency_code: 'AED'
//     },
//     headers: {
//       'X-RapidAPI-Key': '6326864156mshfdb62e53dcfd7bfp168784jsn4365b4c7f478',
//       'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
//     }

//   };

//   try {
//     const response = await axios.request(options);
//     console.log("response.data", response.data);
//   } catch (error) {
//     console.error(error);
//   }

// };

// window.addEventListener('load', searchHotels);

</script>
