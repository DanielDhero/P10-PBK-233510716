<template>
    <v-container class="my-8">
      <h1 class="text-h3 font-weight-bold text-center mb-4">Kenapa Memilih DKicks?</h1>
      <p class="text-h6 text-medium-emphasis text-center mb-12">
        Kami memberikan jaminan dan pelayanan terbaik untuk setiap langkah Anda.
      </p>
  
      <v-row>
        <v-col
          v-for="feature in features"
          :key="feature.title"
          cols="12"
          md="4"
          class="text-center px-6"
        >
          <v-icon :icon="feature.icon" color="primary" size="64"></v-icon>
          
          <h2 class="text-h6 font-weight-bold my-4">{{ feature.title }}</h2>
          
          <p class="text-body-2 text-medium-emphasis">
            {{ feature.text }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Semua konten kita definisikan di sini agar mudah diubah
  const features = ref([
    {
      icon: 'mdi-check-decagram-outline',
      title: '100% Otentik',
      text: 'Setiap item yang kami jual telah melewati proses verifikasi ketat oleh tim ahli kami untuk menjamin keasliannya.'
    },
    {
      icon: 'mdi-shield-check-outline',
      title: 'Transaksi Aman',
      text: 'Dengan sistem keamanan modern, semua transaksi dan data pribadi Anda terlindungi 24/7.'
    },
    {
      icon: 'mdi-truck-fast-outline',
      title: 'Pengiriman Cepat',
      text: 'Kami bekerja sama dengan mitra logistik terpercaya untuk memastikan pesanan Anda tiba dengan cepat dan aman.'
    },
    {
      icon: 'mdi-star-box-outline',
      title: 'Koleksi Pilihan',
      text: 'Kami hanya menyediakan produk-produk terbaik dan paling dicari, mulai dari rilisan umum hingga edisi terbatas.'
    },
    {
      icon: 'mdi-cash-multiple',
      title: 'Harga Transparan',
      text: 'Tidak ada biaya tersembunyi. Harga yang Anda lihat adalah harga final yang akan Anda bayar.'
    },
    {
      icon: 'mdi-headset',
      title: 'Layanan Bantuan',
      text: 'Punya pertanyaan? Tim customer service kami yang berdedikasi siap membantu Anda dengan responsif.'
    }
  ]);
  </script>
  
  <style scoped>
  /* Menambahkan sedikit jarak antar baris untuk tampilan mobile */
  .v-col {
    margin-bottom: 24px;
  }
  </style>