let nameInput = document.getElementById("nameInput");
let addressInput = document.getElementById("addressInput");
let phoneNumInput = document.getElementById("phoneNumInput");
let emailInput = document.getElementById("emailInput");

let validFormArray = [0,0,0,0];
let fileCount = 0;
localStorage.setItem("fileCountKey", fileCount);

const checkSubmission = evt => {
    for(let i = 0; i < validFormArray.length; i++){
        if(validFormArray[i] === 0){
            return false;
        }
    }
    return true;
};

const checkIfEmpty = evt => {
    switch(evt.target.id){
        case "nameInput":
            if(nameInput.value.trim() !== ""){
                validFormArray[0] = 1;
            }
            else{
                validFormArray[0] = 0;
            }
            break;
        case "addressInput":
            if(addressInput.value.trim() !== ""){
                validFormArray[1] = 1;
            }
            else{
                validFormArray[1] = 0;
            }
            break;
        case "phoneNumInput":
            if(phoneNumInput.value.trim() !== ""){
                validFormArray[2] = 1;
            }
            else{
                validFormArray[2] = 0;
            }
            break;
        case "emailInput":
            if(emailInput.value.trim() !== ""){
                validFormArray[3] = 1;
            }
            else{
                validFormArray[3] = 0;
            }
            break;
        default:
            console.log("Unrecognized event id")
            break;
    }
}

nameInput.addEventListener("input", checkIfEmpty);
addressInput.addEventListener("input", checkIfEmpty);
phoneNumInput.addEventListener("input", checkIfEmpty);
emailInput.addEventListener("input", checkIfEmpty);