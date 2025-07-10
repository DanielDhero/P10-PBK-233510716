<template>
  <v-container>
    <h2 class="text-h5 mb-4">Produk Unggulan</h2>

    <div v-if="loading" class="text-center">
      <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
    </div>

    <v-row v-else>
      <v-col
        v-for="product in featuredProducts"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
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

const featuredProducts = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    // Mengambil data dari json-server
    const response = await apiClient.get('/products');
    // Kita hanya akan menampilkan 3 produk sebagai unggulan
    featuredProducts.value = response.data.slice(0, 3);
  } catch (error) {
    console.error('Gagal mengambil data produk unggulan:', error);
  } finally {
    // Hentikan loading setelah proses selesai
    loading.value = false;
  }
});
</script>