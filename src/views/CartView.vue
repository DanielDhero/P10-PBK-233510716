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
            <div class="font-weight-bold mb-2">{{ new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price) }}</div>
            <div class="d-flex align-center">
              <span class="mr-3">Kuantitas:</span>
              <v-btn
                @click="cartStore.decrementQuantity(item.id)"
                icon="mdi-minus"
                size="x-small"
                variant="tonal"
              ></v-btn>
              <span class="mx-4 font-weight-bold text-h6">{{ item.quantity }}</span>
              <v-btn
                @click="cartStore.incrementQuantity(item.id)"
                icon="mdi-plus"
                size="x-small"
                variant="tonal"
              ></v-btn>
            </div>
          </template>

          <template v-slot:append>
            <v-btn
              @click="cartStore.removeItem(item.id)"
              icon="mdi-delete-outline"
              variant="text"
              color="grey"
            ></v-btn>
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

function getSafeImage(item) {
  if (item.thumbnail) return item.thumbnail;
  if (item.images && item.images.length > 0) return item.images[0];
  return '';
}

onMounted(() => {
  if (cartStore) {
    cartStore.validateCart();
  }
});
</script>