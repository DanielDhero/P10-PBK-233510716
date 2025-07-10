<template>
    <v-container>
      <h1 class="text-h4 mb-4">Keranjang Belanja Saya</h1>
  
      <v-alert v-if="!cartStore || cartStore.items.length === 0" type="info" variant="tonal">
        Keranjang belanja Anda masih kosong.
      </v-alert>
  
      <div v-else>
        <v-list lines="three">
          <v-list-item
            v-for="item in cartStore.items"
            :key="item.id"
            
            :prepend-avatar="getSafeImage(item)" 
            
            :title="item.name"
          >
            <template v-slot:subtitle>
              <div>Kuantitas: {{ item.quantity }}</div>
              <div class="font-weight-bold">{{ new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price) }}</div>
            </template>
          </v-list-item>
        </v-list>
  
        <v-divider class="my-4"></v-divider>
  
        <div class="text-right">
          <h2 class="text-h5">Total: {{ new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(cartStore.totalPrice) }}</h2>
          <v-btn to="/checkout" color="primary" size="large" class="mt-4">Lanjut ke Checkout</v-btn>
        </div>
      </div>
    </v-container>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useCartStore } from '@/stores/cartStore.js';
  
  const cartStore = useCartStore();
  
  // ==== FUNGSI BARU UNTUK MENDAPATKAN GAMBAR SECARA AMAN ====
  function getSafeImage(item) {
    // Prioritaskan thumbnail
    if (item.thumbnail) {
      return item.thumbnail;
    }
    // Jika tidak ada thumbnail, gunakan gambar pertama dari array 'images'
    if (item.images && item.images.length > 0) {
      return item.images[0];
    }
    // Jika tidak ada gambar sama sekali, kembalikan string kosong (aman)
    return '';
  }
  
  onMounted(() => {
    if (cartStore) {
      cartStore.validateCart();
    }
  });
  </script>