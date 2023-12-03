import { createPinia } from "pinia";
import axios from "axios";

export const pinia = createPinia();

export const useSearchHotelDetailesStore = pinia.defineStore(
  "searchHotelDetailes",
  {
    state: () => ({
      searchResults: [],
    }),

    actions: {
      async searchHotels(query) {
        try {
          const response = await axios.request({
            method: "GET",
            url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
            params: { query },
            headers: {
              "X-RapidAPI-Key":
                "d275ed8749msh9c4994d1decc1e4p1208f5jsn9fa5576c4196",
              "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
            },
          });
          this.searchResults = response.data;
        } catch (error) {
          console.error(error);
        }
      },
    },
  }
);

export function setupSearchHotelDetailesStore() {
  pinia.useStore(useSearchHotelDetailesStore);
}
