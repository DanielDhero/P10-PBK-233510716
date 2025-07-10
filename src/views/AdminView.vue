<template>
    <v-container>
      <v-row justify="space-between" align="center" class="mb-4">
        <v-col>
          <h1 class="text-h4">Manajemen Produk</h1>
        </v-col>
        <v-col class="text-right">
          <v-btn color="primary" @click="openDialog()">
            Tambah Produk
          </v-btn>
        </v-col>
      </v-row>
  
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Nama Produk</th>
            <th class="text-left">Brand</th>
            <th class="text-left">Harga</th>
            <th class="text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.brand }}</td>
            <td>{{ new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price) }}</td>
            <td>
              <v-icon small class="mr-2" @click="openDialog(item)">mdi-pencil</v-icon>
              <v-icon small @click="deleteProduct(item.id)">mdi-delete</v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
  
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="editedItem.name" label="Nama Produk"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="editedItem.brand" label="Brand"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model.number="editedItem.price" label="Harga" type="number"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="editedItem.thumbnail" label="URL Gambar Utama (Thumbnail)"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea v-model="otherImages" label="URL Gambar Lainnya (pisahkan dengan koma)"></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-textarea v-model="editedItem.description" label="Deskripsi"></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="closeDialog">Batal</v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="saveProduct">Simpan</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted, computed, watch } from 'vue';
  import apiClient from '@/api/axios.js';
  
  const products = ref([]);
  const dialog = ref(false);
  const otherImages = ref(''); // State sementara untuk menampung URL gambar tambahan
  
  // ==== STRUKTUR DATA BARU UNTUK FORM ====
  const defaultItem = {
    name: '',
    brand: '',
    price: 0,
    thumbnail: '', // Menggantikan imageUrl
    images: [],      // Menambahkan array images
    description: ''
  };
  const editedItem = ref({ ...defaultItem });
  const editedId = ref(null);
  
  const formTitle = computed(() => (editedId.value ? 'Edit Produk' : 'Tambah Produk Baru'));
  
  async function fetchProducts() {
    try {
      const response = await apiClient.get('/products');
      products.value = response.data;
    } catch (error) {
      console.error("Gagal mengambil data produk:", error);
    }
  }
  
  // Fungsi openDialog diperbarui untuk menangani 'images' array
  function openDialog(item) {
    if (item) {
      editedId.value = item.id;
      editedItem.value = { ...item };
      // Menggabungkan gambar selain thumbnail menjadi string untuk ditampilkan di textarea
      otherImages.value = item.images.filter(img => img !== item.thumbnail).join(', ');
    } else {
      editedId.value = null;
      editedItem.value = { ...defaultItem };
      otherImages.value = '';
    }
    dialog.value = true;
  }
  
  function closeDialog() {
    dialog.value = false;
  }
  
  // ==== LOGIKA SIMPAN DIPERBARUI ====
  async function saveProduct() {
    // Gabungkan thumbnail dan gambar lainnya ke dalam array 'images'
    const additionalImages = otherImages.value ? otherImages.value.split(',').map(s => s.trim()) : [];
    editedItem.value.images = [editedItem.value.thumbnail, ...additionalImages];
  
    try {
      if (editedId.value) {
        await apiClient.put(`/products/${editedId.value}`, editedItem.value);
      } else {
        await apiClient.post('/products', editedItem.value);
      }
      closeDialog();
      fetchProducts();
    } catch (error) {
      console.error("Gagal menyimpan produk:", error);
    }
  }
  
  async function deleteProduct(id) {
    if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      try {
        await apiClient.delete(`/products/${id}`);
        fetchProducts();
      } catch (error) {
        console.error("Gagal menghapus produk:", error);
      }
    }
  }
  
  onMounted(() => {
    fetchProducts();
  });
  </script>