import { createPinia } from "pinia";
import axios from "axios";
import { defineStore } from "pinia";
export const pinia = createPinia();

export const useApiStore = defineStore("api", {
  state: () => ({
    hotels: [],
    numberOfHotels: 0,
  }),

  actions: {
    ///////////////////////////////////////////////api 1
    async searchHotels(searchTerm) {
      try {
        const response = await axios.request({
          method: "GET",
          url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
          params: {
            dest_id: "-2092174",
            search_type: "CITY",
            arrival_date: "<REQUIRED>",
            departure_date: "2023-12-04",
            adults: "1",
            children_age: "0,17",
            room_qty: "1",
            page_number: "1",
            languagecode: "en-us",
            currency_code: "AED",
          },
          headers: {
            "X-RapidAPI-Key":
              "6326864156mshfdb62e53dcfd7bfp168784jsn4365b4c7f478",
            "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
          },
        });
        this.hotels = response.data;
        this.numberOfHotels = response.data.length;
      } catch (error) {
        console.error(error);
      }
    },
    // ////////////////////////////////////////////api 2
    async searchDestinations(query) {
      try {
        const response = await axios.request({
          method: "GET",
          url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
          params: { query },
          headers: {
            "X-RapidAPI-Key":
              "6326864156mshfdb62e53dcfd7bfp168784jsn4365b4c7f478",
            "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
          },
        });
        console.log(response.data);
        // Handle the destination data as needed
      } catch (error) {
        console.error(error);
      }
    },

    // ////////////////////////////////////////////api 3
  },
});

export function setupStore() {
  pinia.useStore(useApiStore);
}
