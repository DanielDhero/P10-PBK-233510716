<template>
    <v-container>
      <h1 class="text-h4 mb-6">Checkout</h1>
      <v-row>
        <v-col cols="12" md="7">
          <v-card>
            <v-card-title>Data Pengiriman</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="submitOrder">
                <v-text-field
                  v-model="formData.name"
                  label="Nama Lengkap"
                  variant="outlined"
                  class="mb-3"
                ></v-text-field>
                <v-text-field
                  v-model="formData.email"
                  label="Alamat Email"
                  type="email"
                  variant="outlined"
                  class="mb-3"
                ></v-text-field>
                <v-textarea
                  v-model="formData.address"
                  label="Alamat Lengkap"
                  variant="outlined"
                  class="mb-3"
                ></v-textarea>
                <v-btn type="submit" color="primary" block size="large">
                  Selesaikan Pesanan
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
  
        <v-col cols="12" md="5">
          <v-card>
            <v-card-title>Ringkasan Pesanan</v-card-title>
            <v-card-text>
              <v-list bg-color="transparent">
                <v-list-item
                  v-for="item in cartStore.items"
                  :key="item.id"
                  :title="item.name"
                  :subtitle="`Kuantitas: ${item.quantity}`"
                >
                  <template v-slot:append>
                    <span>{{ new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price * item.quantity) }}</span>
                  </template>
                </v-list-item>
              </v-list>
              <v-divider class="my-3"></v-divider>
              <div class="d-flex justify-space-between align-center">
                <span class="text-h6">Total</span>
                <span class="text-h6 font-weight-bold">{{ new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(cartStore.totalPrice) }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useCartStore } from '@/stores/cartStore.js';
  
  const cartStore = useCartStore();
  const router = useRouter();
  
  const formData = ref({
    name: '',
    email: '',
    address: ''
  });
  
  // Fungsi yang dijalankan saat form disubmit
  function submitOrder() {
    if (!formData.value.name || !formData.value.email || !formData.value.address) {
      alert('Harap isi semua data pengiriman.');
      return;
    }
    
    // Simulasi pengiriman data
    console.log("Order Dibuat:", {
      customer: formData.value,
      items: cartStore.items,
      total: cartStore.totalPrice
    });
  
    alert('Pesanan Anda telah berhasil dibuat!');
    
    // Kosongkan keranjang dan kembali ke halaman utama
    cartStore.clearCart();
    router.push('/');
  }
  </script>