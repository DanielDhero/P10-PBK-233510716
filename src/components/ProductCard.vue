<template>
    <v-card>
        <v-img
            :src="product.thumbnail"
            height="200px"
            cover
        ></v-img>
  
      <v-card-title>{{ product.name }}</v-card-title>
      
      <v-card-subtitle class="font-weight-bold">
        {{ new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price) }}
      </v-card-subtitle>
      
      <v-card-actions>
        <v-btn
          :to="`/produk/${product.id}`"
          color="primary"
          variant="tonal"
          block
        >
          Lihat Detail
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script setup>
  defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
  </script>