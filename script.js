// Hamburger menu toggle
const toggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Smooth scroll for menu links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        // Close menu on mobile after click
        navUl.classList.remove('show');
    });
});

  // Pilih tombol dan paragraf
  const tombol = document.getElementById('klikSaya');
  const pesan = document.getElementById('pesan');

  // Tambahkan event klik
  tombol.addEventListener('click', function() {
      pesan.textContent = "Halo! Kamu baru saja menekan tombol!";
  });

  // Hamburger menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Hamburger Menu
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});