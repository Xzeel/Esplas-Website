// Fungsi untuk menampilkan alert peringatan
function showAlert() {
    alert("Maaf dilarang copas ya :)");
}

// Mencegah salin dan potong
document.addEventListener('copy', function(event) {
    event.preventDefault(); // Mencegah aksi salin
    showAlert(); // Tampilkan alert
});

document.addEventListener('cut', function(event) {
    event.preventDefault(); // Mencegah aksi potong
    showAlert(); // Tampilkan alert
});

/**
 __  __              _ _  __    _       _          
 \ \/ / _______  ___| | |/ /___| |_ ___| |__   ___ 
  \  / |_  / _ \/ _ \ | ' // _ \ __/ __| '_ \ / _ \
  /  \  / /  __/  __/ | . \  __/ || (__| | | |  __/
 /_/\_\/___\___|\___|_|_|\_\___|\__\___|_| |_|\___|
 * @INFO
 * Source code by | XzeelKetche
 * @INFO
 * Source code ID | Esplas-Website
 * @INFO
 * Perhatian      | Credit & watermark jangan pernah di hapus!
 * @INFO
*/