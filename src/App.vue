<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>DKicks</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn to="/keranjang" icon>
        <v-badge :content="cartStore.totalItems" color="error" v-if="cartStore.totalItems > 0">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
        <v-icon v-else>mdi-cart-outline</v-icon>
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <SideBar />
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import SideBar from '@/components/SideBar.vue';
import { useCartStore } from '@/stores/cartStore.js'; // <-- Impor store keranjang

// State untuk sidebar
const drawer = ref(false);

// Akses ke store keranjang
const cartStore = useCartStore(); // <-- Gunakan store
</script>