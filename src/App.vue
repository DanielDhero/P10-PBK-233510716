<template>
  <v-layout>
      <v-app-bar color="primary">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <SideBar v-model="drawer"/>

      <v-main style="height: 500px;">
        <v-card-text>
          <RouterView />
        </v-card-text>
      </v-main>
    </v-layout>
</template>

<script setup>
  import { ref } from 'vue'
  import SideBar from './components/SideBar.vue'


  const drawer = ref(false)

</script>