// login.js
// This code assumes that you have a server that can verify the login
// information and return a JSON object containing the user's data

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    })
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      // Handle error (e.g., show an error message)
    }
  }).then((data) => {
    if (data) {
      // Store the user's data in local storage and redirect to the dashboard
      localStorage.setItem('user', JSON.stringify(data));
      window.location.href = '/dashboard.html';
    } else {
      // Handle error (e.g., show an error message)
    }
  });
});
