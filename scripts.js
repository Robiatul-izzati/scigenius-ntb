// script.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("Selamat datang di SciGenius NTB!");
  });
  
  // Pastikan kode ini berada di file script.js yang ter-link di pendaftaran.html
  document.getElementById("registrationForm")?.addEventListener("submit", function(e) {
    e.preventDefault(); // Cegah pengiriman form secara default
    
    // Ambil nilai input
    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let lomba = document.getElementById("lomba").value;
    
    if(nama === "" || email === "") {
      alert("Harap isi semua data!");
      return false;
    }
    
    // Dapatkan waktu pendaftaran saat ini
    let registrationDate = new Date();
    let registrationTime = registrationDate.toLocaleString();
    
    // Buat query string dengan encodeURIComponent agar aman
    const queryParams = `?nama=${encodeURIComponent(nama)}&lomba=${encodeURIComponent(lomba)}&email=${encodeURIComponent(email)}&time=${encodeURIComponent(registrationTime)}`;
    
    // Redirect ke halaman response.html dengan parameter
    window.location.href = "response.html" + queryParams;
    
    return true;
  });
  