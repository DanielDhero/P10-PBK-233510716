<template>
    <v-container>
      <h2 class="text-h5 mb-4">Semua Produk</h2>
  
      <div v-if="loading" class="text-center">
        <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
      </div>
  
      <v-row v-else>
        <v-col
          v-for="product in allProducts"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <ProductCard :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import apiClient from '@/api/axios.js';
  import ProductCard from '@/components/ProductCard.vue';
  
  const allProducts = ref([]);
  const loading = ref(true);
  
  // Fungsi untuk mengambil SEMUA produk dari API
  async function fetchAllProducts() {
    try {
      const response = await apiClient.get('/products');
      // Ambil semua data produk tanpa .slice()
      allProducts.value = response.data;
    } catch (error) {
      console.error('Gagal mengambil semua produk:', error);
    } finally {
      loading.value = false;
    }
  }
  
  onMounted(() => {
    fetchAllProducts();
  });
  </script>