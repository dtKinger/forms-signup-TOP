 /* ========================= \
|     GLOBAL DECLARATIONS      |
 \ ========================= */

// GETS + SELECTORS

const div = document.getElementById('message');

/// Groups

/// One-off buttons


// INITIALIZE VARIABLES


// FUNCTIONS


 /* ========================== \
|  END OF GLOBAL DECLARATIONS   |
 \ ========================== */




 /* ========================== \
|       SPECIAL BEHAVIOUR       |
 \ ========================== */

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');
const divs = document.querySelectorAll('.form-field');
const inputs = document.querySelectorAll('input');

console.log(inputs);

function onChange() {
  if (confirmPass.value === password.value) {
    console.log(confirmPass.value);
    confirmPass.setCustomValidity('');
  } else {
    confirmPass.setCustomValidity('Passwords do not match');
  }
};

inputs.forEach((input) =>{
  input.addEventListener('input', () => {
    if (input.checkValidity()){
      input.parentElement.classList.remove('unfulfilled');
    } else if (input['required']){
      input.parentElement.classList.add('unfulfilled');
    }
  });
});

/*
email.addEventListener('input', () => {
  if (email.checkValidity()){
    email.classList.remove('unfulfilled');
  }
});
*/

password.addEventListener('input', () => {
  onChange();
});

confirmPass.addEventListener('input', () => {
  onChange();
});




 /* ========================== \
|   END OF SPECIAL BEHAVIOUR    |
 \ ========================== */



 /* ========================= \
|       NUMKEYS - CLICKS       |
 \ ========================= */

 /* ========================== \
|         END OF NUMKEYS        |
 \ ========================== */



 /* ========================= \
|      OPERATORS - CLICKS      |
 \ ========================= */

 /* ========================== \
|        END OF OPERATORS       |
 \ ========================== */




 /* ========================= \
|            KEYDOWNS          |
 \ ========================= */

 /* ========================== \
|        END OF KEYDOWNS        |
 \ ========================== */





 /* ========================= \
|           SETTINGS           |
 \ =========================* /

 /* ========================== \
|        END OF SETTINGS        |
 \ ========================== */



/* ========================== \
|          COMPONENTS          |
 \ =========================* /

 /* ========================== \
|        END OF COMPONENTS      |
 \ ========================== */

