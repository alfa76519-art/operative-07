function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
}

// Jalankan fungsi tiap 1 detik
setInterval(updateClock, 1000);
updateClock(); // Panggil langsung biar gak nunggu 1 detik pertama
