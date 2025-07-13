import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import apiClient from '@/api/axios.js';

export const useCartStore = defineStore('cart', () => {
  const items = ref([]);

  // --- GETTERS ---
  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0);
  });

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0);
  });

  // --- ACTIONS ---
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

  // ==== AKSI BARU UNTUK MANAJEMEN KUANTITAS ====
  function incrementQuantity(productId) {
    const item = items.value.find(i => i.id === productId);
    if (item) {
      item.quantity++;
    }
  }

  function decrementQuantity(productId) {
    const item = items.value.find(i => i.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
    } else if (item && item.quantity <= 1) {
      // Jika kuantitas 1 atau kurang, hapus item
      removeItem(productId);
    }
  }

  function removeItem(productId) {
    items.value = items.value.filter(i => i.id !== productId);
  }
  // ===============================================

  async function validateCart() {
    try {
      const response = await apiClient.get('/products');
      const availableProductIds = response.data.map(p => p.id);
      items.value = items.value.filter(item => availableProductIds.includes(item.id));
    } catch (error) {
      console.error("Gagal memvalidasi keranjang:", error);
    }
  }

  return {
    items,
    totalItems,
    totalPrice,
    addToCart,
    clearCart,
    validateCart,
    // Jangan lupa tambahkan aksi baru di sini
    incrementQuantity,
    decrementQuantity,
    removeItem
  };
});