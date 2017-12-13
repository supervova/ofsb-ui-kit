(() => {

  // document.ready
  document.addEventListener('DOMContentLoaded', () => {

    /**
     * Disabling form submissions if there are invalid fields
     * TODO: add special class to forms needed validation in HTML output
     * const form = document.querySelectorAll('.form--needs-validation');
     */
    const form = document.getElementById('registerForm');
    form.addEventListener('submit', event => {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('form--validated');
    }, false);

    /**
     * Set placeholders for inline form inputs
     */
    const labels = document.querySelectorAll('label');
    for (let i = 0; i < labels.length; i++) {
      if (labels[i].offsetWidth === 20 && labels[i].offsetHeight === 20) {

        const family      =  labels[i].parentNode.children;
        const placeholder = labels[i].textContent.replace(/^\s+/mg, '');

        for (let j = 0; j < family.length; j++) {
          if (family[j].tagName === 'INPUT') {
            family[j].placeholder = placeholder;
          }
        }
      }
    }

  }, false); // document.ready

})();

