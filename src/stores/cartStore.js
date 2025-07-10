import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import apiClient from '@/api/axios.js';

export const useCartStore = defineStore('cart', () => {
  // State
  const items = ref([]);

  // Getters
  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0);
  });

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0);
  });

  // Actions
  function addToCart(product) {
    const existingItem = items.value.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
  }
  
  function clearCart() {
    items.value = [];
  }

  async function validateCart() {
    try {
      const response = await apiClient.get('/products');
      const availableProductIds = response.data.map(p => p.id);

      // Filter item keranjang, hanya pertahankan yang ID-nya ada di daftar produk yang tersedia
      items.value = items.value.filter(item => availableProductIds.includes(item.id));
    } catch (error) {
      console.error("Gagal memvalidasi keranjang:", error);
    }
  }

  return { items, totalItems, totalPrice, addToCart, clearCart, validateCart };
});