import { createPinia } from "pinia";

export const pinia = createPinia();

export const useApiStore = pinia.defineStore("api", {
  state: () => ({
    hotels: [], // To store the list of hotels
    numberOfHotels: 0, // To store the number of hotels in the stored city
  }),

  actions: {
    setHotels(hotels) {
      this.hotels = hotels;
    },

    setNumberOfHotels(number) {
      this.numberOfHotels = number;
    },

    async searchHotels(searchTerm) {
      // Your API request logic here
      // Update this.hotels with the list of hotels
      // Update this.numberOfHotels with the number of hotels
    },
  },
});

export function setupStore() {
  pinia.useStore(useApiStore);
}
