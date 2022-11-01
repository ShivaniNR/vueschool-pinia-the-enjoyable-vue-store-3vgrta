import { defineStore } from 'pinia';
export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      products: [],
    };
  },
  //mutate store's data
  actions: {
    async fill() {
      this.products = (await import('@/data/products.json')).default;
      //this.products = products;
    },
  },
  // getters
});
