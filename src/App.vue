<template>
  <v-app>
    <v-layout class="d-flex flex-column min-h-screen">
      <!-- Navbar -->
      <v-app-bar color="primary">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
        <v-toolbar-title>Travelala</v-toolbar-title>
        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <!-- Sidebar -->
      <SideBar v-model="drawer" />

      <!-- Main Content -->
      <v-main class="flex-grow-1">
        <v-container fluid>
          <RouterView />
        </v-container>
      </v-main>

      <!-- Footer -->
      <v-footer
        class="d-flex align-center justify-center flex-wrap py-3"
        color="surface-light"
      >
        <v-btn
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
          rounded
        />
        <div class="flex-1-0-100 text-center mt-2">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </div>
      </v-footer>
    </v-layout>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import SideBar from './components/SideBar.vue'

const drawer = ref(false)

const links = [
  'Home',
  'About Us',
  'Team',
  'Services',
  'Blog',
  'Contact Us',
]
</script>
