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