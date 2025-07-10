import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  // STATE: Menyimpan informasi pengguna yang sedang login
  const user = ref({
    isLoggedIn: false,
    role: 'guest' // Peran awal adalah 'tamu'
  });

  // GETTERS: Pengecekan cepat apakah pengguna adalah admin
  const isAdmin = computed(() => user.value.isLoggedIn && user.value.role === 'admin');

  // ACTIONS: Fungsi untuk mengubah state
  function loginAsAdmin() {
    user.value = { isLoggedIn: true, role: 'admin' };
    alert('Anda berhasil login sebagai Admin!');
  }

  function logout() {
    user.value = { isLoggedIn: false, role: 'guest' };
    alert('Anda telah logout.');
  }

  return { user, isAdmin, loginAsAdmin, logout };
});