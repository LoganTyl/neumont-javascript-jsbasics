let firstNameInput = document.getElementById("first_name");
let lastNameInput = document.getElementById("last_name");
let emailInput = document.getElementById("email");
let addressInput = document.getElementById("address");
let cityInput = document.getElementById("city");
let stateInput = document.getElementById("state");
let zipCodeInput = document.getElementById("zip_code");
let phoneNumInput = document.getElementById("phone_number");
let passwordInput = document.getElementById("password");
let verifyPasswordInput = document.getElementById("verify_password");
let submitBtn = document.getElementById("submitBtn")

let firstNameError = document.getElementById("first_name_error");
let lastNameError = document.getElementById("last_name_error");
let emailError = document.getElementById("email_error");
let addressError = document.getElementById("address_error");
let cityError = document.getElementById("city_error");
let stateError = document.getElementById("state_error");
let zipCodeError = document.getElementById("zip_code_error");
let phoneNumError = document.getElementById("phone_number_error");
let passwordError = document.getElementById("password_error");
let verifyPasswordError = document.getElementById("verify_password_error");

const nameRegex = /^\S{2,}$/;
const emailRegex = /^\S+@\S{2,}[.]\S{2,}$/;
const addressRegex = /^\S+ \S+$/;
const cityRegex = /^\S{2,}$/;
const stateAbbr = [
    'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID',
    'IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS',
    'MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK',
    'OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV',
    'WI','WY'
   ];
const zipRegex = /^[0-9]{5}(-[0-9]{4})?$/;
const phoneNumRegex = /^(1?\([0-9]{3}\)( |)|(1-|1)?[0-9]{3}-?)[0-9]{3}-?[0-9]{4}$/;
const passwordRegex = /^.*[A-Z].*$/;
const passwordRegex2 = /^.*[0-9].*$/;
const passwordRegex3 = /^\S{8,}$/;
const passwordRegex4 = /^(.*[!@#$%^&*()\[\]{};:'"<>,./?].*)$/;

let validationArr = [0,0,0,0,0,0,0,0,0,0]

const inputChanged = evt => {
    switch(evt.target.id){
        case "first_name":
            if(nameRegex.test(firstNameInput.value)){
                firstNameError.innerHTML = " ";
                validationArr[0] = 1;
            }
            else{
                firstNameError.innerHTML = "Error: First name must be at least two characters";
                validationArr[0] = 0;
            }
            break;
        case "last_name":
            if(nameRegex.test(lastNameInput.value)){
                lastNameError.innerHTML = "";
                validationArr[1] = 1;
            }
            else{
                lastNameError.innerHTML = "Error: Last name must be at least two characters";
                validationArr[1] = 0;
            }
            break;
        case "email":
            if(emailRegex.test(emailInput.value)){
                emailError.innerHTML = "";
                validationArr[2] = 1;
            }
            else{
                emailError.innerHTML = "Error: Email must be at least one character, then @, then at least two characters, then ., then at least two characters";
                validationArr[2] = 0;
            }
            break;
        case "address":
            if(addressRegex.test(addressInput.value)){
                addressError.innerHTML = "";
                validationArr[3] = 1;
            }
            else{
                addressError.innerHTML = "Error: Address must be at least one character followed by a space, then at least one character";
                validationArr[3] = 0;
            }
            break;
        case "city":
            if(cityRegex.test(cityInput.value)){
                cityError.innerHTML = "";
                validationArr[4] = 1;
            }
            else{
                cityError.innerHTML = "Error: City must be at least two characters";
                validationArr[4] = 0;
            }
            break;
        case "state":
            if(stateAbbr.includes(stateInput.value.toUpperCase())){
                stateError.innerHTML = "";
                stateInput.value = stateInput.value.toUpperCase();
                validationArr[5] = 1;
            }
            else{
                stateError.innerHTML = "Error: State must be abbreviated and valid";
                validationArr[5] = 0;
            }
            break;
        case "zip_code":
            if(zipRegex.test(zipCodeInput.value)){
                zipCodeError.innerHTML = "";
                validationArr[6] = 1;
            }
            else{
                zipCodeError.innerHTML = "Error: Zip code must be five digits, optionally followed by a hyphen and four digits";
                validationArr[6] = 0;
            }
            break;
        case "phone_number":
            if(phoneNumRegex.test(phoneNumInput.value)){
                phoneNumError.innerHTML = "";
                validationArr[7] = 1;
            }
            else{
                phoneNumError.innerHTML = "Error: Phone number must be formatted like one of these: 1(801)555-1212 | 1(801) 555-1212 | (801)555-1212 | (801) 555-1212 | 801-555-1212 | 8015551212";
                validationArr[7] = 0;
            }
            break;
        case "password":
            if(passwordRegex.test(passwordInput.value) && passwordRegex2.test(passwordInput.value) && passwordRegex3.test(passwordInput.value) && passwordRegex4.test(passwordInput.value)){
                passwordError.innerHTML = "";
                validationArr[8] = 1;
            }
            else{
                passwordError.innerHTML = "Error: Password must contain at least one capital letter, digit, and special character";
                validationArr[8] = 0;
            }
        case "verify_password":
            if(verifyPasswordInput.value == passwordInput.value){
                verifyPasswordError.innerHTML = "";
                validationArr[9] = 1;
            }
            else{
                verifyPasswordError.innerHTML = "Error: Must be the same as the password";
                validationArr[9] = 0;
            }
            break;
        default:
            console.log("Unrecognized event id");
    }
}

const checkSubmission = evt => {
    for(let i = 0; i<validationArr.length; i++){
        if(validationArr[0] == 0){
            return false;
        }
        else{
            return true;
        }
    }
}

firstNameInput.addEventListener("input", inputChanged);
lastNameInput.addEventListener("input", inputChanged);
emailInput.addEventListener("input", inputChanged);
addressInput.addEventListener("input", inputChanged);
cityInput.addEventListener("input", inputChanged);
stateInput.addEventListener("input", inputChanged);
zipCodeInput.addEventListener("input", inputChanged);
phoneNumInput.addEventListener("input", inputChanged);
passwordInput.addEventListener("input", inputChanged);
verifyPasswordInput.addEventListener("input", inputChanged);