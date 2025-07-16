// === Footer Dynamic Dates ===
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// === Navigation Toggle ===
const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    toggleBtn.classList.remove('open');
  });
});

// === Form Validation and Success Handling ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("booking-form");
  const successBox = document.getElementById("form-success");

  form.addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    successBox.classList.remove("visible");
    successBox.textContent = "";

    if (!name || !email || !message) {
      alert("⚠️ Please complete all required fields before submitting.");
      event.preventDefault();
    } else {
      // Delay display message after successful send
      setTimeout(() => {
        successBox.textContent = "✅ request Sent!";
        successBox.classList.add("visible");

        // Auto-hide message after 5 seconds
        setTimeout(() => {
          successBox.classList.remove("visible");
          successBox.textContent = "";
        }, 5000);
      }, 500); // Short delay before showing message
    }
  });
});

