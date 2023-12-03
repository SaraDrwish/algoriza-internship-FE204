import { createPinia } from "pinia";
import axios from "axios";
import { defineStore } from "pinia";
export const pinia = createPinia();

// ///////////////////////////////

export const useGetSortByStore = defineStore("getSortBy", {
  state: () => ({
    sortByData: null,
  }),

  actions: {
    async fetchSortByData() {
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy",
        params: {
          dest_id: "-2092174",
          search_type: "CITY",
          arrival_date: "<REQUIRED>",
          departure_date: "<REQUIRED>",
          adults: "1",
          children_age: "1,17",
          room_qty: "1",
        },
        headers: {
          "X-RapidAPI-Key":
            "d275ed8749msh9c4994d1decc1e4p1208f5jsn9fa5576c4196",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        this.sortByData = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});

// /////////////////////////////////////////////

export function setupStore() {
  pinia.useStore(useApiStore);
}
