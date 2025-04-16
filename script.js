document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const responseBox = document.getElementById('responseBox');
  const displayMessage = document.getElementById('displayMessage');

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    return;
  }

  // email validation
  if (!email.includes('@') || !email.includes('.')) {
    alert("Please enter a valid email address.");
    return;
  }

  displayMessage.innerText = `Hey ${name}, we appreciate your feedback! 😊`;
  responseBox.classList.remove('hidden');

  // Clear form fields
  document.getElementById('feedbackForm').reset();
});
