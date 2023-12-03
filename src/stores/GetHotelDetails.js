// // getHotelDetails.js
// import { defineStore } from "pinia";
// import axios from "axios";

// export const useGetHotelDetailsStore = defineStore("getHotelDetails", {
//   state: () => ({
//     hotelDetails: null,
//   }),

//   actions: {
//     async fetchHotelDetails() {
//       const options = {
//         method: "GET",
//         url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
//         params: {
//           hotel_id: "191605",
//           arrival_date: "12-12-2023",
//           departure_date: "16-12-2023",
//           adults: "1",
//           children_age: "1,17",
//           room_qty: "1",
//           languagecode: "en-us",
//           currency_code: "EUR",
//         },
//         headers: {
//           "X-RapidAPI-Key":
//             // "d275ed8749msh9c4994d1decc1e4p1208f5jsn9fa5576c4196",
//           "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
//         },
//       };

//       try {
//         const response = await axios.request(options);
//         this.hotelDetails = response.data;
//       } catch (error) {
//         console.error(error);
//       }
//     },
//   },
// });
