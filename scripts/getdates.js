// === 📅 Footer Dynamic Dates ===
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// === 🍔 Navigation Toggle ===
const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  navMenu.classList.toggle('active');
});

// === 📱 Auto-close Mobile Menu on Link Click ===
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    toggleBtn.classList.remove('open');
  });
});

// === 📨 Form Validation and Success Handling ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("booking-form");
  const successBox = document.getElementById("form-success");

  form.addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear any previous success message
    successBox.classList.remove("visible");
    successBox.textContent = "";

    // Validation
    if (!name || !email || !message) {
      alert("⚠️ Please complete all required fields before submitting your request.");
      event.preventDefault(); // Prevent sending if invalid
    } else {
      // Show confirmation message if passed validation
      successBox.textContent = "✅ Your request has been prepared. Please check your email to confirm and send.";
      successBox.classList.add("visible");
    }
  });
});

