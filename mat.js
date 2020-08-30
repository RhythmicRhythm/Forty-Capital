// WELCOME (Bienvenido)

// Intrest Calculator
const contain = document.querySelector('.contain');
const close = document.querySelector('.close');
const bttn = document.getElementById('bttn');
// Open cal
bttn.addEventListener('click', function() {  
contain.classList.remove('hidden');
});
// Close cal
close.addEventListener('click', function() {
contain.classList.add('hidden');
});

// Intrest Calculator Calculation 
function caal(){
       // Selectors
       const cal1 = document.querySelector('.cal-1').value;
       const cal2 = document.querySelector('.cal-2').value;
       const cal3 = document.querySelector('.cal-3').value;
       //rate cale
       let rate = (cal2 / 100) + 1;
       let raate = Math.pow(rate, cal3);
       let intrest = cal1 * raate;
        // Message
       document.querySelector('.result').innerHTML =
       `Hello there Your intrest is { ${Math.round(intrest)} } ` ;       
};

// form calculation
const firstname = document.getElementById('firstname');
const surname = document.getElementById('surname');
const lastname = document.getElementById('lastname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const address = document.getElementById('address');
const amount = document.getElementById('amount');
const bankName = document.getElementById('bank-name');
const accountName = document.getElementById('account-name');
const accountNumber = document.getElementById('account-number');
const form = document.getElementById('form');

// Form Error function
function setErrorFor(input, message) {
       const formG = input.parentElement;
       const small = formG.querySelector('small');

       //add error msg to small
       small.innerText = message;

       // add error class
       formG.className = 'form-control error';
}
// Form Success function
function setSuccessFor(input) {
       const formG = input.parentElement;

       // add success class
       formG.className = 'form-control success';
}

// Surname
function validateSurname(){

       const surnameValue = surname.value;
       if(surnameValue === ''){
              // show Error Msg
              // add Error Class
              setErrorFor(surname, 'Surname Cannot be Blank');
       }
       else{
              // add Success Class
              setSuccessFor(surname);
       }
}

// firstname
function validateFirstname(){

       const firstnameValue = firstname.value.trim();
       if(firstnameValue === ''){
              // show Error Msg
              // add Error Class
              setErrorFor(firstname, 'Firstname Cannot be Blank');
       }
       else{
              // add Success Class
              setSuccessFor(firstname);
       }
}

// Lastname
function validateLastname(){

       const lastnameValue = lastname.value.trim();
       if(lastnameValue === ''){
              // show Error Msg
              // add Error Class
              setErrorFor(lastname, 'Middlename Cannot be Blank');
       }
       else{
              // add Success Class
              setSuccessFor(lastname);
       }
}

// Phone Number
function validatePhone(){

       const phoneValue = phone.value.trim();
       if(phoneValue === ''){
              // show Error Msg
              // add Error Class
              setErrorFor(phone, 'Phone Cannot be Blank');
       }
       else{
              // add Success Class
              setSuccessFor(phone);
       }
}

// Email
function validateEmail(){

       const emailValue = email.value.trim();
       if(emailValue === ''){
              // show Error Msg
              // add Error Class
              setErrorFor(email, 'Email Cannot be Blank');
       }
       else{
              // add Success Class
              setSuccessFor(email);
       }
}

//Address
function validateAddress(){

       const addressValue = address.value.trim();
       if(addressValue === ''){
              // show Error Msg
              // add Error Class
              setErrorFor(address, 'Address Cannot be Blank');
       }
       else{
              // add Success Class
              setSuccessFor(address);
       }
}

// Amount
function populate(){
       const select = document.getElementById('selectbox');
       const formg = document.getElementById('formg');

       if (select.value ==='sel-1'){
              form.addEventListener('input', (e) => {
                     e.preventDefault();
                      checkInputs();
               });
              
            
        function checkInputs(){
               const formValue = formg.value.trim();

               if( formValue >= 50000){
                      
                     setSuccessFor(formg);
                      
               }else{
                     setErrorFor(formg, 'Amount cannot be less than 50,000');
                      
               }
        }
        

               
} else if(select.value ==='sel-2'){
form.addEventListener('input', (e) => {
              e.preventDefault();
               checkInputs();
        });

        function checkInputs(){
               const formValue = formg.value.trim();

               if( formValue >= 100000){
                      
                     setSuccessFor(formg);
                      
               }else{
                     setErrorFor(formg, 'Amount cannot be less than 100,000');
                      
               }
        }
       
}else if(select.value ==='sel-3'){
form.addEventListener('input', (e) => {
              e.preventDefault();
               checkInputs();
        });

        function checkInputs(){
               const formValue = formg.value.trim();

               if( formValue >= 500000){
                      
                     setSuccessFor(formg);
                      
               }else{
                     setErrorFor(formg, ' Amount cannot be less than 500,000');
                      
               }
        }
       
}
    
}      
//Bank Name
function validateBankname(){

       const bankNameValue = bankName.value.trim();
       if(bankNameValue === ''){
              // show Error Msg
              // add Error Class
              setErrorFor(bankName, 'Bank Name Cannot be Blank');
       }
       else{
              // add Success Class
              setSuccessFor(bankName);
       }
}

//Account Name
function validateAccountname(){

       const accountNameValue = accountName.value.trim();
       if(accountNameValue === ''){
              // show Error Msg
              // add Error Class
              setErrorFor(accountName, 'Account Name Cannot be Blank');
       }
       else{
              // add Success Class
              setSuccessFor(accountName);
       }
}

//Account Name
function validateAccountnumber(){

       const accountNumberValue = accountNumber.value.trim();
       if(accountNumberValue === ''){
              // show Error Msg
              // add Error Class
              setErrorFor(accountNumber, 'Account Number Cannot be Blank');
       }
       else{
              // add Success Class
              setSuccessFor(accountNumber);
       }
}

// BYE-BYE (adios)
