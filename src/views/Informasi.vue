<template>
  <div class="travel-container">
    <header class="hero">
      <h1>🌍 Travelala</h1>
      <p>Solusi Digital Pemesanan Perjalanan yang Mudah dan Lengkap</p>
    </header>

    <section class="content">
      <div class="highlight">
        <p>
          <strong>Travelala</strong> adalah platform pemesanan perjalanan daring
          yang menyediakan layanan lengkap untuk membantu wisatawan dalam
          merencanakan perjalanan dengan lebih mudah, cepat, dan aman. Dengan tampilan
          modern dan sistem terintegrasi, Travelala cocok untuk semua kalangan pelancong.
        </p>
      </div>

      <h2>🎯 Tujuan dan Visi</h2>
      <p>
        Travelala hadir untuk menyederhanakan proses perencanaan perjalanan dengan
        memberikan pilihan terbaik, harga bersaing, serta akses mudah ke berbagai
        layanan perjalanan. Kami berkomitmen menjadi pemimpin dalam industri pariwisata
        digital yang berorientasi pada pelanggan dan inovasi.
      </p>

      <h2>🧭 Fitur Unggulan</h2>
      <ul>
        <li><strong>Pencarian & Pemesanan Tiket:</strong> Tiket pesawat, kereta, dan bus dalam satu platform.</li>
        <li><strong>Reservasi Hotel:</strong> Lebih dari 1 juta penginapan di seluruh dunia.</li>
        <li><strong>Paket Wisata:</strong> Tour lengkap dengan pemandu lokal profesional.</li>
        <li><strong>Sewa Kendaraan:</strong> Rental mobil & motor dengan opsi sopir.</li>
        <li><strong>Manajemen Itinerary:</strong> Rancang dan simpan rencana perjalanan digital.</li>
        <li><strong>Pembayaran Aman:</strong> Mendukung berbagai metode pembayaran dan perlindungan data.</li>
        <li><strong>Layanan 24/7:</strong> Dukungan pelanggan kapan saja dibutuhkan.</li>
      </ul>

      <h2>🌐 Teknologi yang Digunakan</h2>
      <ul>
        <li><strong>Frontend:</strong> Vue.js atau React untuk antarmuka dinamis.</li>
        <li><strong>Backend:</strong> Node.js atau Laravel untuk performa server tinggi.</li>
        <li><strong>Database:</strong> PostgreSQL / MongoDB</li>
        <li><strong>Integrasi API:</strong> Amadeus, Skyscanner, Booking.com, Midtrans, Stripe</li>
        <li><strong>Keamanan:</strong> HTTPS, tokenisasi, dan autentikasi dua faktor (2FA)</li>
      </ul>

      <h2>👥 Segmentasi Pengguna</h2>
      <ul>
        <li>Wisatawan individu (solo traveler)</li>
        <li>Keluarga dan grup wisata</li>
        <li>Pelancong bisnis</li>
        <li>Agen travel dan korporat</li>
      </ul>

      <h2>💡 Keunggulan Kompetitif</h2>
      <ul>
        <li>Desain responsif dan mudah digunakan</li>
        <li>Promo eksklusif untuk pengguna setia</li>
        <li>Ulasan pengguna asli & terpercaya</li>
        <li>Fleksibilitas penyesuaian paket wisata</li>
      </ul>

      <h2>🌟 Kesimpulan</h2>
      <p>
        Travelala bukan sekadar situs pemesanan, tapi sahabat perjalanan Anda. 
        Kami memberikan kemudahan, kenyamanan, dan kepercayaan dalam setiap langkah perjalanan. 
        Jelajahi dunia bersama Travelala, karena setiap perjalanan berhak dimulai dengan sempurna.
      </p>
    </section>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.travel-container {
  font-family: 'Poppins', sans-serif;
  background-color: #f4f7fa;
  color: #333;
}

.hero {
  background: linear-gradient(90deg);
  color: black;
  padding: 60px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 36px;
  margin: 0;
}

.hero p {
  font-size: 18px;
  margin-top: 10px;
}

.content {
  max-width: 960px;
  margin: 40px auto;
  padding: 0 20px;
}

h2 {
  border-left: 5px solid;
  padding-left: 12px;
  margin-top: 40px;
  font-size: 24px;
}

ul {
  padding-left: 20px;
}

ul li {
  margin-bottom: 10px;
}

.highlight {
  background-color: #ecfdf5;
  border-left: 4px solid;
  padding: 10px 15px;
  margin: 20px 0;
  border-radius: 6px;
}

</style>
