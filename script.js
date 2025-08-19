const toggler = document.getElementById('navbar-toggler');
const navLinks = document.getElementById('navbar-links');

toggler.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// Set current year in footer dynamically
document.getElementById('year').textContent = new Date().getFullYear();
