<template>
  <v-app class="d-flex flex-column" style="min-height: 100vh;">
    
    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>DDKicks</v-toolbar-title>
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

    <v-main class="bg-grey-lighten-3 flex-grow-1">
      <router-view></router-view>
    </v-main>

    <v-footer class="text-center d-flex flex-column pa-4">
      <div>
        <v-btn
          v-for="social in socials"
          :key="social.icon"
          :icon="social.icon"
          class="mx-2"
          variant="text"
          :href="social.link"
          target="_blank"
        ></v-btn>
      </div>

      <div class="pt-4" style="width: 100%;">
        <v-divider></v-divider>
      </div>

      <div class="pt-4 text-caption text-medium-emphasis">
        © {{ new Date().getFullYear() }} — <strong>DDKicks</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import SideBar from '@/components/SideBar.vue';
import { useCartStore } from '@/stores/cartStore.js';

const drawer = ref(null);
const cartStore = useCartStore();

const socials = ref([
  { icon: 'mdi-facebook', link: 'https://facebook.com' },
  { icon: 'mdi-instagram', link: 'https://instagram.com' },
  { icon: 'mdi-twitter', link: 'https://twitter.com' },
  { icon: 'mdi-youtube', link: 'https://youtube.com' },
]);
</script>

<style>
</style>