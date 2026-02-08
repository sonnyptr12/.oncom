document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     HAMBURGER MENU
  ================================= */
  const menuToggle = document.getElementById('mobile-menu');
  const navList = document.querySelector('.nav-list');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  }

  /* ===============================
     SMOOTH SCROLL
  ================================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        if (navList) navList.classList.remove('active');
      }
    });
  });

  /* ===============================
     TOMBOL DEMO (opsional)
  ================================= */
  const tombol = document.getElementById('klikSaya');
  const pesan = document.getElementById('pesan');

  if (tombol && pesan) {
    tombol.addEventListener('click', function () {
      pesan.textContent = "Halo! Kamu baru saja menekan tombol!";
    });
  }

});
