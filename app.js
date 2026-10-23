// Soal JS-1
const namaToko = "PC PART PICKER";
const tahunBerdiri = 2016;
let sedangBuka = true;
const alamat = null;

// typeof masing-masing data
console.log("Tipe data namaToko     : " + typeof namaToko);
console.log("Tipe data tahunBerdiri : " + typeof tahunBerdiri);
console.log("Tipe data sedangBuka   : " + typeof sedangBuka);
console.log("Tipe data alamat       : " + typeof alamat);

// Hitung umur toko
let tahunSekarang = new Date();
let umurToko = tahunSekarang.getFullYear() - tahunBerdiri;
console.log("Umur Toko Sekarang     : " + umurToko + " tahun.");
// Template Literal
console.log(`Toko ${namaToko} sudah beroperasi selama ${umurToko} tahun.`)


// Soal JS-2
function cekStatusPesanan(statusKode) {
    switch (statusKode) {
        case 1:
            console.log("Menunggu Pembayaran");
            break;
        case 2:
            console.log("Pembayaran Dikonfirmasi");
            break;
        case 3:
            console.log("Sedang Dikemas");
            break;
        case 4:
            console.log("Sedang Dikirim");
            break;
        case 5:
            console.log("Pesanan Diterima");
            break;
        default:
            console.log("Kode Status Tidak Valid");
    }
}

cekStatusPesanan(6)


// JS-3
// A
let hargaProduk = [45000, 120000, 75000, 550000, 35000, 850000, 95000, 250000, 60000, 150000];
let totalHarga = 0;

for (let i = 0; i < hargaProduk.length; i++) {
    totalHarga += hargaProduk[i];
}

let rataRataHarga = totalHarga / hargaProduk.length;

console.log("=== A. TOTAL & RATA-RATA HARGA ===");
console.log("Total Harga:", totalHarga);
console.log("Rata-rata Harga:", rataRataHarga);


// B. 
let indeksDitemukan = -1;
let hargaDitemukan = null;
let i = 0;

while (i < hargaProduk.length) {
    if (hargaProduk[i] > 500000) {
        indeksDitemukan = i;
        hargaDitemukan = hargaProduk[i];
        break; // Berhenti langsung setelah menemukan yang pertama
    }
    i++;
}

console.log("\n=== B. PRODUK PERTAMA DI ATAS 500.000 ===");
if (indeksDitemukan !== -1) {
    console.log(`Ditemukan di indeks ${indeksDitemukan} dengan harga ${hargaDitemukan}`);
} else {
    console.log("Tidak ada produk di atas 500.000");
}


// C. 
console.log("\n=== C. HARGA DI BAWAH 100.000 ===");
for (let harga of hargaProduk) {
    if (harga < 100000) {
        console.log(harga);
    }
}


// JS-4
// Buat array daftarProduk dengan minimal 8 item string
let daftarProduk = ["Kemeja", "Celana", "Sepatu", "Topi", "Jaket", "Tas", "Dompet", "Ikat Pinggang"];
console.log("Array Awal:", daftarProduk);

// a) Tambahkan 2 produk baru di akhir array (push)
daftarProduk.push("Kaos Kaki", "Kacamata");
console.log("a) Setelah push:", daftarProduk);

// b) Tambahkan 1 produk di awal array (unshift)
daftarProduk.unshift("Jas");
console.log("b) Setelah unshift:", daftarProduk);

// c) Hapus produk terakhir (pop) dan tampilkan produk yang dihapus
let produkDihapusAkhir = daftarProduk.pop();
console.log("c) Produk terakhir yang dihapus:", produkDihapusAkhir);

// d) Hapus produk pertama (shift) dan tampilkan produk yang dihapus
let produkDihapusAwal = daftarProduk.shift();
console.log("d) Produk pertama yang dihapus:", produkDihapusAwal);

// e) Cek apakah "Laptop" ada di dalam array (includes)
let adaLaptop = daftarProduk.includes("Laptop");
console.log("e) Apakah ada 'Laptop'?:", adaLaptop);

// f) Cari posisi indeks "Sepatu" di array (indexOf)
let indeksSepatu = daftarProduk.indexOf("Sepatu");
console.log("f) Indeks 'Sepatu':", indeksSepatu);

// g) Ambil 3 produk dari indeks ke-2 tanpa mengubah array asli (slice)
let ambilTiga = daftarProduk.slice(2, 5); // Mengambil dari index 2 hingga sebelum index 5
console.log("g) Hasil slice (3 produk dari index 2):", ambilTiga);

// h) Sisipkan produk baru "Mouse Wireless" di posisi indeks ke-3 (splice)
daftarProduk.splice(3, 0, "Mouse Wireless");
console.log("h) Setelah splice (sisip di index 3):", daftarProduk);

// i) Tampilkan jumlah total produk saat ini (.length)
console.log("i) Jumlah total produk saat ini:", daftarProduk.length);


// JS5-
// a) Function Declaration: hitungDiskon(harga, persen)
function hitungDiskon(harga, persen) {
    return harga - (harga * persen / 100);
}

// b) Function Expression: hitungPPN dengan default parameter tarif 0.11 (11%)
const hitungPPN = function(harga, tarif = 0.11) {
    return harga + (harga * tarif);
};

// c) Arrow Function: hitungOngkir berdasarkan jarak (km)
const hitungOngkir = (jarak) => {
    if (jarak <= 10) {
        return 10000;
    } else if (jarak <= 25) {
        return 25000;
    } else {
        return 50000;
    }
};

// d) Arrow Function ringkas (tanpa kurung kurawal) untuk kuadrat
const kuadrat = (n) => n * n;


// ==========================================
// e) PENGGABUNGAN FUNGSI & CONTOH PENGGUNAAN
// ==========================================
let hargaAwal = 200000;
let persenDiskon = 15;
let jarakKirim = 12; // km

// Menghitung total belanja dengan menggabungkan fungsi a, b, dan c
let totalBelanja = hitungPPN(hitungDiskon(hargaAwal, persenDiskon)) + hitungOngkir(jarakKirim);

console.log("=== UJI COBA FUNGSI ===");
console.log(`Harga awal: Rp ${hargaAwal}`);
console.log(`Diskon ${persenDiskon}%: Rp ${hitungDiskon(hargaAwal, persenDiskon)}`);
console.log(`Setelah PPN 11%: Rp ${hitungPPN(hitungDiskon(hargaAwal, persenDiskon))}`);
console.log(`Ongkir (${jarakKirim} km): Rp ${hitungOngkir(jarakKirim)}`);
console.log(`Hasil kuadrat (misal angka 6): ${kuadrat(6)}`);
console.log("----------------------------------------");
console.log(`TOTAL BELANJA KESELURUHAN: Rp ${totalBelanja}`);
