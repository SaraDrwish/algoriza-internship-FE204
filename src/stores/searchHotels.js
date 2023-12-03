// import { defineStore } from "pinia";
// import axios from "axios";

// export const pinia = createPinia();

// export const useSearchHotelsStore = defineStore("searchHotels", {
//   state: () => ({
//     hotels: [],
//   }),

//   actions: {
//     async searchHotels() {
//       try {
//         const options = {
//           method: "GET",
//           url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
//           params: {
//             dest_id: "-2092174",
//             search_type: "CITY",
//             arrival_date: "<REQUIRED>",
//             departure_date: "<REQUIRED>",
//             adults: "1",
//             children_age: "0,17",
//             room_qty: "1",
//             page_number: "1",
//             languagecode: "en-us",
//             currency_code: "AED",
//           },
//           headers: {
//             "X-RapidAPI-Key":
//               "d275ed8749msh9c4994d1decc1e4p1208f5jsn9fa5576c4196",
//             "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
//           },
//         };

//         const response = await axios.request(options);
//         this.hotels = response.data;
//       } catch (error) {
//         console.error(error);
//       }
//     },
//   },
// });

// export function setupSearchHotelsStore() {
//   return useSearchHotelsStore();
// }
