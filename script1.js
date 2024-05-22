const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm-password');

function validatePassword() {
  if (password.value !== confirmPass.value) {
    confirmPass.setCustomValidity("Пароли должны совпадать");
  } else {
    confirmPass.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirmPass.onkeyup = validatePassword;