let email = document.getElementById('email');
let submit = document.getElementById('submit');

submit.addEventListener('click', function(event) {
  event.preventDefault();
  if(email.value === '') {
    alert('Enter email address');
  }
});

console.log(document);
