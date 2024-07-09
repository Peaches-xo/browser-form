//get all dom elements
const email = document.querySelector('#email');
const countryInput = document.querySelector('#country');
const zip = document.querySelector('#zip');
const password = document.querySelector('#password');
const passwordconf = document.querySelector('#passwordconf');

const submit = document.querySelector('#submit');
const clear = document.querySelector('#clear');

const form = document.querySelector('#form');


import countrydata from './countries.json' assert { type: 'json' };


//add listener on input field
// if field.validity.valid 
    //remove error message if one is visible
    //reset error class from error active to error 
//if field not valid
    //call showError()


    // email.addEventListener('change', (event) => {
    //     if (email.validity.valid){
    //         email_error.textContent="";
    //         email_error.classList.remove('active'); //maybe remove
           
    //     } else {
    //         event.preventDefault();
    //         showError();
    //     }
    // })




//get all inputs inside form
const allInputs = form.querySelectorAll('input');


// allInputs.forEach(input => {
//     input.addEventListener('change', (event) => {
//     validateInput(input);
// })})




function validateInput(input){
    //get errorspan
    let errorSpan = input.nextElementSibling;

    if (input.validity.valid){
        // email_error.textContent="";
        errorSpan.textContent = "";
        //input.setCustomValidity("");

        //email_error.classList.remove('active'); //maybe remove
    } else {
        // event.preventDefault();
       // showError(input,errorSpan);
    }

}

    //showError()
        //if statement for all different validity errors and their corresponding error message 
        function showError(input,errorSpan) {
            if (input.validity.valueMissing) {
              // If the field is empty,
              // display the following error message.
              errorSpan.textContent = `PLEASE FILL IN THIS FIELD`;
             // input.setCustomValidity('Please FILL in this FIELD');

            } else if (input.validity.typeMismatch) {
              // If the field doesn't contain an email address,
              // display the following error message.
              errorSpan.textContent = "Entered value needs to be an email address.";

            } else if (input.validity.tooShort) {
              // If the data is too short,
              // display the following error message.
              errorSpan.textContent = `Field should be at least ${input.minLength} characters; you entered ${input.value.length}.`;

            } else if (input.validity.patternMismatch) {
                errorSpan.textContent = `Please enter a valid zippedycode`;
            }
          
            // Set the styling appropriately
           // email_error.className = "error active";
          }





    //add listener on form submit
    // if field not valid
        //prevent default (dont let form submit)
        //showError()

        form.addEventListener('submit', onFormSubmit);

        function onFormSubmit(e){
            console.log('form submit function reached');
           
           
            //not working
            // if (form.validity.valid){
                if (form.checkValidity()){
                    console.log('Form valid');
                    e.preventDefault();
                } else {
                    e.preventDefault();
                }
       
        

        }

// ------------------ CREATING COUNTRIES DROPDOWN 


//Once country has been selected, find country, get corresponding regex, set regex pattern for zip field 
countryInput.addEventListener('change', () => {
 

    for (let country of countrydata){
        if (countryInput.value == country.abbrev){
                if (country.postal){
                    zip.setAttribute('pattern',country.postal)
                } else {
                    zip.removeAttribute('pattern');
                }
        }
    }
});




//write script to loop through all countries and make new array of objects of countries that have a country.postal 
let countriesWithPostal = [];
for (let country2 of countrydata){
    if (country2.postal){
        countriesWithPostal.push(country2);
    }
}


// ---------------------------------
document.addEventListener('blur', function (event) {
    // Validate the field
    const isValid = event.target.validity.valid;
    const message = event.target.validationMessage;
    const connectedValidationId = event.target.getAttribute('aria-describedby');
    const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false;
  
    if (connectedValidation && message && !isValid) {
      connectedValidation.innerText = message;
    } else if (connectedValidation && isValid){
      connectedValidation.innerText = '';
    }
}, true);


document.addEventListener('change', function(event){
    const connectedValidationId = event.target.getAttribute('aria-describedby');
    const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false;

    if (event.target.validity.valid){
        connectedValidation.innerText = '';
    }

   
});

