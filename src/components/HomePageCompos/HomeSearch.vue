<template>
  <div class="">
        <div class=" relative left-[105px] w-[calc(100%-205px)]  h-[64px]  ">
           <form @submit.prevent  action="#" class=" flex rounded-[8px]  gap-[15px] shadow-lg bg-white pt-[10px] pb-[11px] pr-[13px] pl-[12px] ">
           
            <div class="bigsearchdropdnbox relative w-[286px] text-[13px]">

              <div class="flex bg-inputsGray   rounded-[4px]  ">

                <div class="flex items-center  gap-[10px]  mx-[12px] mt-[11px] mb-[12px]">
                  <img class="flex " src="../../assets/icons/location 1.svg" alt="location-icon">
                  <input  v-model="searchQuery"
                    @input="getSearchContsResults"
                    class="flex w-[100%]" type="text" placeholder="Where are you going ?" required>
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

              <!-- .starting a drpodon -->

              <div v-if="modalActive" class="absolute top-[70px] z-10 flex bg-inputsGray w-full  rounded-[10px]  ">
                 
                <ul v-if="dropdownOptions.length > 0 " class=" flex items-center capitalize transition ease-in duration-400 text-light-black w-full justify-center text-center flex-col gap-[4px] mx-[12px] ">
                  <a  v-for="searchresult in dropdownOptions " :key="searchresult.id"
                   @click="selectCountry(searchresult)" 
                   class="hover:transition-all transition ease-in duration-400 hover:text-primary
                    w-[100%] py-[10px] border-solid border-b-2 border-bordrBtnGry cursor-pointer" href="#" >
                    <li   > {{ searchresult.name }} </li>
                  </a>
                 </ul>
              </div>

            </div>

            <div class="flex gap-[10px] bg-inputsGray rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
              <img  src="../../assets/icons/calendar 1.svg" alt="calendar-icon">
              <input v-model="checkInDate" class="text-[13px] w-full" type="date" :min="currentDate" placeholder="Check in date" required >
            </div>

            <div class="flex gap-[10px] bg-inputsGray rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
              <img src="../../assets/icons/calendar 1.svg" alt="calendar-icon">
              
              <input v-model="checkOutDate" class="text-[13px] w-full" type="date" :min="checkInDate"  placeholder="Check out date" required >
            </div>

            <div class="flex gap-[10px]  bg-inputsGray rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
              <img src="../../assets/icons/user-square 1.svg" alt="user-icon">
              <input v-model="guests" class="text-[13px] w-full " type="number" placeholder="Guests" >
            </div>

            <div class="flex gap-[10px]  bg-inputsGray rounded-[4px] pt-[11px] pb-[12px] px-[12px]">
              <img src="../../assets/icons/single_bed_FILL0_wght400_GRAD0_opsz24 1.svg" alt="single_bed">
              <input v-model="rooms" class="text-[13px] w-full " type="number" placeholder="Rooms">
            </div>
          
            <input @click="handleSubmit"      
             class="flex tracking-[0.3px] w-[137px] justify-center bg-primary text-[15px] text-white  
             cursor-pointer py-[12px] px-[18px]
             rounded-[6px]" type="submit" value="Search">

          </form>
        </div>
  </div>
</template>


<style scoped >

input[type="submit"] {
  transition: all 0.3s ease;
}

li:last-child { border-bottom: none; }

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="date"]{
  display: flex;
  flex-direction: row-reverse  ; 
  position: relative;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
    width: 100%;
    position: absolute;
    cursor: pointer;
}

</style>

<script setup>

import { ref } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router';
import { isAuthen } from '../auth';

const router = useRouter()

const modalActive = ref(null);

const toggleModal = () => {
  modalActive.value = !modalActive.value
}

defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  }
})

const searchQuery = ref("");
const checkInDate = ref("");
const checkOutDate = ref("");
const guests = ref("");
const rooms = ref("");

const currentDate = new Date().toISOString().split("T")[0];

const dropdownOptions = ref([]);

const id = ref(null)
// const timout = ref(null)
// clearTimeout( fetchCountries.value);

const fetchCountries = async (query) => {

  // timout.value= setTimeout( { 
  //   const options = {
  //     method: 'GET',
  //     url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
  //     params: { query },
  //     headers: {
  //       'X-RapidAPI-Key': '6326864156mshfdb62e53dcfd7bfp168784jsn4365b4c7f478',
  //       'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  //     }
  //   }
  //   try {
  //     const response = await axios.request(options)
  //     console.log(response.data)
  //     return response.data.data
  //   } catch(error) {
  //     console.error(error)
  //     return null;
  //   }
  // }, 200)

  const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
    params: { query  },
    headers: {
      'X-RapidAPI-Key': '6326864156mshfdb62e53dcfd7bfp168784jsn4365b4c7f478',
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data.data;
   } catch (error) {
    console.error(error);
    return null
  }

}

const getSearchContsResults = async () => {

  dropdownOptions.value = [];
    
  if (searchQuery.value.trim() !== "") {
    const countrs = await fetchCountries(searchQuery.value);
  
    if (countrs && countrs.length > 0) {
      dropdownOptions.value = countrs;
    } else {
      dropdownOptions.value = [{ id: -1, name: 'No matching cities found' }];
      console.log("No matching cities found")
    }

   }

  modalActive.value = true;
 
};

const selectCountry = (country) => {
  console.log(country, "::cty nam::", country.city_name, "id::", country.dest_id)
  searchQuery.value = country.name;
  modalActive.value = false; 
};


const handleSubmit = () => {
    if (!isAuthen.value) {
    router.push('/signin');
    return;
  }

  
    if (validateForm()) {
      window.localStorage.setItem('selectedCountry', searchQuery.value);
      window.localStorage.setItem('checkInDate', checkInDate.value);
      window.localStorage.setItem('checkOutDate', checkOutDate.value);
      window.localStorage.setItem('guests', guests.value);
      window.localStorage.setItem('rooms', rooms.value);

      console.log(" searchQuery.dest_id:::",
        searchQuery.dest_id, " -- ",
        id, searchQuery.value.dest_id, "--  ",
         
      )  
      // router.push('/searchres');
      router.push({
        name: "searchres",
        params: { id: searchQuery.id },
        query: {
          id: searchQuery.dest_id,
        }
      
    });

    } else {
      console.error("Form validation failed");
       
    }
  }

const validateForm = () => {
    
    if (
    searchQuery.value.trim() === "" ||
    checkInDate.value === "" ||
    checkOutDate.value === "" ||
    guests.value === "" ||
    rooms.value === ""
    ) {
    console.log("failed sending the inputs vals ")
    return false;  
  }

  const minCheckOutDate = new Date(checkInDate.value);
     minCheckOutDate.setDate(minCheckOutDate.getDate() + 1);
     if (checkOutDate.value < minCheckOutDate.toISOString().split("T")[0]) {
      console.error("Check-out date cannot be before a day from the check-in date");
      alert("your check out must be after one day from your check in date ")
      return false; 
  }

  return true; 
 
}



</script>

