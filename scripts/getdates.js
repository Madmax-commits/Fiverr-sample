// Insert current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Insert last modified
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Hamburger menu toggle
const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  navMenu.classList.toggle('active');
});

// Auto-close mobile nav on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    toggleBtn.classList.remove('open');
  });
});

// Form validation and success message
document.getElementById("booking-form").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const successBox = document.getElementById("form-success");

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    event.preventDefault();
  } else {
    successBox.classList.add("visible");
  }
});

