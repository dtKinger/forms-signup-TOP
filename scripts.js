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
const submitBtn = document.querySelector('#submit');
const animText = document.querySelectorAll('.anim')

function checkMatch() {
  if (confirmPass.value === password.value) {
    console.log(confirmPass.value);
    confirmPass.setCustomValidity('');
    submitBtn.removeAttribute('disabled');
  } else {
    confirmPass.setCustomValidity('Passwords do not match');
    submitBtn.setAttribute('disabled');
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

password.addEventListener('input', () => {
  checkMatch();
});

confirmPass.addEventListener('input', () => {
  checkMatch();
});

animText.forEach((anim) =>{
  anim.addEventListener('animationend', () =>{
    anim.style.opacity = 1;
  });
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

