// Part 1: Event Handling Example
const messageBtn = document.getElementById("messageBtn");
const messageArea = document.getElementById("messageArea");

messageBtn.addEventListener("click", () => {
  messageArea.textContent = "🎉 Button was clicked!";
});

// Part 2: Interactive Elements

// Light/Dark Mode Toggle
const toggleModeBtn = document.getElementById("toggleMode");
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// Part 3: Form Validation
const form = document.getElementById("registerForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop form submission
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    feedback.textContent = "❌ Name cannot be empty.";
    feedback.style.color = "red";
  } else if (!emailRegex.test(email)) {
    feedback.textContent = "❌ Invalid email address.";
    feedback.style.color = "red";
  } else if (password.length < 6) {
    feedback.textContent = "❌ Password must be at least 6 characters.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "✅ Registration successful!";
    feedback.style.color = "green";
  }
});
