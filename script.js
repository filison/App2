function toggleForm() {
  const login = document.getElementById('loginContainer');
  const register = document.getElementById('registerContainer');
  if (login.style.display === 'none') {
    login.style.display = 'block';
    register.style.display = 'none';
  } else {
    login.style.display = 'none';
    register.style.display = 'block';
  }
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    localStorage.setItem('user', email);
    window.location.href = 'home.html';
  } else {
    alert("Zadejte email a heslo.");
  }
}

function register() {
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  if (email && password) {
    alert("Úspěšná registrace! Nyní se můžete přihlásit.");
    toggleForm();
  } else {
    alert("Zadejte email a heslo.");
  }
}