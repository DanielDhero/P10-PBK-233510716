<template>
  <v-container>
    <div v-if="loading" class="text-center pa-16">
      <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
    </div>

    <v-row v-else-if="product">
      <v-col cols="12" md="6">
        <v-carousel show-arrows="hover" height="auto">
          <v-carousel-item
            v-for="(image, i) in product.images"
            :key="i"
            :src="image"
            cover
          ></v-carousel-item>
        </v-carousel>
        </v-col>

      <v-col cols="12" md="6">
        <v-chip color="primary" class="mb-2">{{ product.brand }}</v-chip>
        <h1 class="text-h4 font-weight-bold mb-2">{{ product.name }}</h1>
        <p class="text-h5 mb-4">
          {{ new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price) }}
        </p>
        <p class="body-1 text-medium-emphasis">
          {{ product.description }}
        </p>
        <v-btn
          @click="handleAddToCart"
          color="primary"
          size="large"
          class="mt-6"
          prepend-icon="mdi-cart-plus"
        >
          Tambah ke Keranjang
        </v-btn>
      </v-col>
    </v-row>

    <v-alert v-else type="error">
      Produk tidak ditemukan.
    </v-alert>
  </v-container>
</template>

<script setup>
// Bagian <script setup> tidak perlu diubah sama sekali
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '@/stores/cartStore.js';
import apiClient from '@/api/axios.js';

const route = useRoute();
const cartStore = useCartStore();

const product = ref(null);
const loading = ref(true);

function handleAddToCart() {
  if (product.value) {
    cartStore.addToCart(product.value);
    alert(`${product.value.name} berhasil ditambahkan ke keranjang!`);
  }
}

onMounted(async () => {
  const productId = route.params.id;
  try {
    const response = await apiClient.get(`/products/${productId}`);
    product.value = response.data;
  } catch (error) {
    console.error("Gagal mengambil detail produk:", error);
    product.value = null;
  } finally {
    loading.value = false;
  }
});
</script>