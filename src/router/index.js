import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductDetailView from '../views/ProductDetailView.vue' 
import AdminView from '../views/AdminView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import AkunView from '../views/AkunView.vue'
import TentangView from '../views/TentangView.vue'
import { useAuthStore } from '../stores/authStore';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView,
  },
  {
    path: '/produk',
    name: 'Products',
    component: ProductsView,
  },
  {
    path: '/tentang',
    name: 'About',
    component: TentangView, 
  },
  {
    path: '/produk/:id', // <-- INI RUTE YANG HILANG
    name: 'ProductDetail',
    component: ProductDetailView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAdmin) {
        // Jika pengguna adalah admin, izinkan akses
        next();
      } else {
        // Jika bukan admin, alihkan ke halaman utama
        alert('Anda tidak memiliki akses ke halaman ini!');
        next({ name: 'Home' });
      }
    }
  },
  {
    path: '/keranjang',
    name: 'Cart',
    component: CartView
  },
  {
    path: '/akun',
    name: 'Akun',
    component: AkunView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router