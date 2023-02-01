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

const password = document.querySelector('#password');
const confirm2 = document.querySelector('#confirm-password');

function onChange() {
  if (confirm2.value === password.value) {
    console.log(confirm2.value);
    confirm2.setCustomValidity('');
  } else {
    confirm2.setCustomValidity('Passwords do not match');
  }
};

password.addEventListener('input', function(){
  onChange();
});

confirm2.addEventListener('input', () => {
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

