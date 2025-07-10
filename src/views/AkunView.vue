<template>
    <v-container>
      <h1 class="text-h4 mb-4">Akun Saya</h1>
      <div v-if="authStore.user.isLoggedIn">
        <p>Anda login sebagai: <strong>{{ authStore.user.role }}</strong></p>
        <v-btn color="error" class="mt-4" @click="authStore.logout()">
          Logout
        </v-btn>
      </div>
      <div v-else>
        <p>Anda belum login. Silakan login untuk mengakses fitur tertentu.</p>
        <v-btn color="primary" class="mt-4" @click="authStore.loginAsAdmin()">
          Login sebagai Admin
        </v-btn>
      </div>
    </v-container>
  </template>
  
  <script setup>
  import { useAuthStore } from '@/stores/authStore.js';
  const authStore = useAuthStore();
  </script>