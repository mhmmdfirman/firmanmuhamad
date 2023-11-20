// Data produk
const produkData = [
  { nama: 'Beras', harga: 15000 },
  { nama: 'Minyak Goreng', harga: 20000 },
  { nama: 'Gula', harga: 12000 }
  // Tambahkan produk lainnya sesuai kebutuhan
];

// Data keranjang belanja
const keranjangBelanja = [];

// Fungsi untuk menambahkan data produk
function tambahData() {
  const namaProduk = document.getElementById('nama').value;
  const hargaProduk = document.getElementById('produk').value;

  // Validasi input
  if (!namaProduk || !hargaProduk) {
    alert('Harap isi nama dan harga produk.');
    return;
  }

  // Tambahkan produk baru ke dalam data produk
  const newProduk = { nama: namaProduk, harga: parseInt(hargaProduk) };
  produkData.push(newProduk);

  // Tampilkan ulang data produk pada tabel
  tampilkanDataProduk();
}

// Fungsi untuk menampilkan data produk pada tabel
function tampilkanDataProduk() {
  const tbody = document.getElementById('data-body');
  tbody.innerHTML = '';

  for (const produk of produkData) {
    const row = tbody.insertRow();
    row.innerHTML = `<td>${produk.nama}</td><td>Rp. ${produk.harga}</td><td><button onclick="addToCart('${produk.nama}', ${produk.harga})">Tambah ke Keranjang</button></td>`;
  }
}

// Fungsi untuk menambahkan produk ke keranjang belanja
function addToCart(namaProduk, hargaProduk) {
  const cartItems = document.getElementById('cart-items');
  const listItem = document.createElement('li');
  listItem.textContent = `${namaProduk} - Rp. ${hargaProduk}`;
  cartItems.appendChild(listItem);

  keranjangBelanja.push({ nama: namaProduk, harga: hargaProduk });

  updateTotal();
}

// Fungsi untuk mengupdate total belanja pada keranjang
function updateTotal() {
  let totalHarga = 0;

  for (const item of keranjangBelanja) {
    totalHarga += item.harga;
  }

  document.getElementById('total').textContent = `Rp. ${totalHarga}`;
}

// Fungsi untuk melakukan checkout
function checkout() {
  alert('Checkout berhasil! Total belanja: ' + document.getElementById('total').textContent);
}

// Fungsi untuk mengedit keranjang belanja (contoh)
function editCart() {
  alert('Edit keranjang belanja');
}

// Fungsi untuk menghapus produk dari keranjang belanja (contoh)
function deleteProduct() {
  alert('Hapus produk dari keranjang belanja');
}

// Panggil fungsi untuk menampilkan data produk pada saat halaman dimuat
tampilkanDataProduk();
