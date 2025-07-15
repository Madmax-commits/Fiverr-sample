// Insert current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Insert last modified date in footer
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('open');
    navMenu.classList.toggle('active');
  });