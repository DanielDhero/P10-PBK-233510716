<template>
  <v-list>
    <v-list-item
      v-for="item in visibleItems" 
      :key="item.title"
      :to="item.path"
      link
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { ref, computed } from 'vue'; 
import { useAuthStore } from '@/stores/authStore'; 

const authStore = useAuthStore();

const allItems = ref([
  { title: 'Home', path: '/' },
  { title: 'Produk', path: '/produk' },
  { title: 'Admin', path: '/admin', requiresAuth: true }, 
  { title: 'Tentang Kami', path: '/tentang' },
  { title: 'Akun Saya', path: '/akun' },
]);

const visibleItems = computed(() => {
  return allItems.value.filter(item => !item.requiresAuth || authStore.isAdmin);
});
</script>