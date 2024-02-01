// Slider image
let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const transformValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + transformValue + ')';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Automatic slide change every 3 seconds (adjust as needed)
setInterval(nextSlide, 3000);

// Validasi Form
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const interest = document.getElementById('interest').value;
  const errorMessages = document.getElementById('errorMessages');
  errorMessages.innerHTML = '';

  if (name === '') {
      displayError('Name is required.');
  }

  if (email === '') {
      displayError('Email is required.');
  } else if (!isValidEmail(email)) {
      displayError('Invalid email address.');
  }

  if (interest === '') {
      displayError('Please select an interest.');
  }

  // If no errors, you can submit the form or perform other actions
  if (errorMessages.innerHTML === '') {
      alert('Form submitted successfully!');
      document.getElementById('myForm').reset();
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayError(message) {
  const errorMessages = document.getElementById('errorMessages');
  errorMessages.innerHTML += `<p>${message}</p>`;
}