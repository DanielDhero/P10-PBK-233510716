<template>
    <v-navigation-drawer location='left' temporary>
        <v-list :items="items">
        <v-list-item
            v-for="(item) in items"
            :to="item.path">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
const items = ref ([
    {title: 'Home', path: '/'},
    {title: 'Akun', path: '/akun'},
    {title: 'Book Now', path: '/about'},
    {title: 'Informasi', path: '/info'}
  ])
</script>