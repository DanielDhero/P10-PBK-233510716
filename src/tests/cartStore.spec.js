import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCartStore } from '../stores/cartStore';

// Mendeskripsikan grup tes untuk 'cartStore'
describe('Cart Store', () => {
  // `beforeEach` akan berjalan sebelum setiap tes `it`
  beforeEach(() => {
    // Membuat instance Pinia baru dan menjadikannya aktif
    // Ini memastikan setiap tes berjalan dalam kondisi yang terisolasi
    setActivePinia(createPinia());
  });

  // Tes 1: Memastikan item baru berhasil ditambahkan
  it('adds a new item to the cart', () => {
    // Mendapatkan akses ke store
    const cartStore = useCartStore();
    const product = { id: 1, name: 'Sepatu Keren', price: 500000 };

    // Memanggil action
    cartStore.addToCart(product);

    // Mengecek hasil (Assertion)
    expect(cartStore.items.length).toBe(1);
    expect(cartStore.items[0].name).toBe('Sepatu Keren');
    expect(cartStore.items[0].quantity).toBe(1);
  });

  // Tes 2: Memastikan kuantitas item yang ada bertambah
  it('increments quantity for an existing item', () => {
    const cartStore = useCartStore();
    const product = { id: 1, name: 'Sepatu Keren', price: 500000 };

    // Menambahkan item yang sama dua kali
    cartStore.addToCart(product);
    cartStore.addToCart(product);

    // Mengecek hasil
    expect(cartStore.items.length).toBe(1); // Jumlah item unik tetap 1
    expect(cartStore.items[0].quantity).toBe(2); // Kuantitas bertambah
  });
});