// Disabling form submissions if there are invalid fields
(() => {
  window.addEventListener(
    'load',
    () => {
      // TODO: add special class to forms needed validation
      // const form = document.querySelectorAll('.form--needs-validation');
      const form = document.getElementById('registerForm');
      form.addEventListener(
        'submit',
        event => {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('form--validated');
        },
        false
      );
    },
    false
  );
})();
