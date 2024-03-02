const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const emailInput = form.elements['email'];
  const passwordInput = form.elements['password'];
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(formData);
    form.reset();
  }
});
