// Inisialisasi variabel timer untuk menyimpan ID interval dan variabel count untuk menghitung mundur
let timer;
let count = 0;

// Fungsi untuk menangani ketika tombol "Enter" ditekan pada input
function handleKeyPress(event) {
    // Memeriksa apakah tombol yang ditekan adalah "Enter"
    if (event.key === "Enter") {
        startTimer(); // Memanggil fungsi startTimer jika "Enter" ditekan
    }
}

// Fungsi untuk memulai timer
function startTimer() {
    // Mengambil nilai input dari elemen dengan id 'inputNumber'
    const inputNumber = document.getElementById('inputNumber').value;
    // Memeriksa apakah input kosong atau nol
    if (inputNumber == "" || inputNumber == 0) {
        alert("Please enter a number greater than zero"); // Menampilkan peringatan jika input kosong atau nol
        return;
    }
    // Menetapkan nilai input sebagai tampilan timer
    document.getElementById('timerDisplay').innerHTML = inputNumber;
    count = inputNumber; // Menetapkan nilai input ke variabel count untuk menghitung mundur
    // Menjalankan timer dengan memanggil fungsi updateTimer setiap 1000ms (1 detik)
    timer = setInterval(updateTimer, 1000);
}

// Fungsi untuk mengupdate tampilan timer setiap detik
function updateTimer() {
    count--; // Mengurangi nilai count
    document.getElementById('timerDisplay').innerHTML = count; // Memperbarui tampilan timer
    if (count <= 0) {
        clearInterval(timer); // Menghentikan timer jika hitungan mundur mencapai nol atau kurang
    }
}

// Fungsi untuk menghentikan timer
function stopTimer() {
    const inputNumber = document.getElementById('inputNumber').value;
    // Memeriksa apakah input kosong atau nol
    if (inputNumber == "" || inputNumber == 0) {
        alert("Please enter a number"); // Menampilkan peringatan jika input kosong atau nol
        return;
    } else {
        clearInterval(timer); // Menghentikan timer
    }
}

// Fungsi untuk mengatur ulang timer
function resetTimer() {
    const inputNumber = document.getElementById('inputNumber').value;
    // Memeriksa apakah input kosong atau nol
    if (inputNumber == "" || inputNumber == 0) {
        alert("Please enter a number"); // Menampilkan peringatan jika input kosong atau nol
        return;
    } else {
        clearInterval(timer); // Menghentikan timer
        document.getElementById('timerDisplay').innerHTML = 0; // Mengatur tampilan timer kembali ke 0
        document.getElementById('inputNumber').value = ""; // Mengosongkan input
        count = 0; // Mengatur ulang count ke 0
    }
}
