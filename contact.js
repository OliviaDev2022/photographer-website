// DECLARATION DU FORMULAIRE  

(function() {
 'use strict'

 let form = document.getElementById('form');

 form.addEventListener('submit', function(event) {
     
  Array.from(form.elements).forEach((input) => {
   if (input.type !== "submit") {
    if (!validateFields(input)) {    
     event.preventDefault();
     event.stopPropagation();
     
     input.classList.remove("is-valid");
     input.classList.add("is-invalid");
     input.nextElementSibling.style.display = 'block';
    } 

    else {
     input.nextElementSibling.style.display = 'none';
     input.classList.remove("is-invalid");
     input.classList.add("is-valid");
    }
   }
  });
 }, 
 false)
})()

// Validation d'un champ REQUIRED
function validateRequired(input) {
 return !(input.value == null || input.value == "");
}

// Validation des caractères : LATIN & LETTRES
function validateText(input) {
 return input.value.match("^[A-Za-z]+$");
}

// Validation du nombre de caractéres : MIN & MAX
function validateLength(input, minLength, maxLength) {
 return !(input.value.length < minLength || input.value.length > maxLength);
}

// Validation d'un e-mail
function validateEmail(input) {
 let EMAIL = input.value;
 let POSAT = EMAIL.indexOf("@");
 let POSDOT = EMAIL.lastIndexOf(".");

 return !(POSAT < 1 || (POSDOT - POSAT < 2));
}

// VALIDATION DES CHAMPS DU FORMULAIRE 

function validateFields(input) {

 // Validaton de l'input NOM
 if (fieldName == "lastName") {
  if (!validateRequired(input)) {
   return false;
  }

  if (!validateLength(input, 2, 20)) {
   return false;
  }

  if (!validateText(input)) {
   return false;
  }

  return (true);
 }

 // Validaton de l'input PRENOM
 if (fieldName == "firstName") {
  if (!validateRequired(input)) {
   return false;
  }

 if (!validateText(input)) {
  return false;
 }

  return (true);
 }

 // Validaton de l'input EMAIL
 if (fieldName == "email") {
  if (!validateRequired(input)) {
   return false;
  }

  if (!validateEmail(input)) {
   return false;
  }

  return (true);
}
}