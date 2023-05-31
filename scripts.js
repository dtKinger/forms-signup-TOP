 /* ========================= \
|     GLOBAL DECLARATIONS      |
 \ ========================= */

// GETS + SELECTORS
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');
const submitBtn = document.querySelector('#submit');


/// Groups
const animText = document.querySelectorAll('.anim')
const divs = document.querySelectorAll('.form-field');
const inputs = document.querySelectorAll('input');


 /* ========================== \
|       SPECIAL BEHAVIOUR       |
 \ ========================== */

password.addEventListener('input', () => {
  checkMatch();
});

confirmPass.addEventListener('input', () => {
  checkMatch();
});


/* Remove the Required tag once a field is valid */
inputs.forEach((input) =>{
  input.addEventListener('input', () => {
    if (input.checkValidity()){
      input.parentElement.classList.remove('unfulfilled');
    } else if (input['required']){
      input.parentElement.classList.add('unfulfilled');
    }
  });
});


/* Set opacity to 1 since animation end normally
reverts it to its original 0 */
animText.forEach((anim) =>{
  anim.addEventListener('animationend', () =>{
    anim.style.opacity = 1;
  });
});

 /* ========================== \
|          FUNCTIONS            |
 \ ========================== */

function checkMatch() {
  if (confirmPass.value === password.value) {
    confirmPass.setCustomValidity('');
    /* This works but is not a great behaviour
    with other validations doing heavy lifting
    // submitBtn.removeAttribute('disabled');
    */
  } else {
    confirmPass.setCustomValidity('Passwords do not match');
    /* This works but is not a great behaviour
    with other validations doing heavy lifting
    // submitBtn.setAttribute('disabled', true);
    */
  }
};
