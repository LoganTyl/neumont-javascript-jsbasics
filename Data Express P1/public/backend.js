//Login Page
const usernameLogin = document.getElementById('usernameLogin');
const passwordLogin = document.getElementById('passwordLogin');
//Sign Up Page
const usernameCreation = document.getElementById('usernameCreation');
const passwordCreation = document.getElementById('passwordCreation');
const emailCreation = document.getElementById('emailCreation');
const ageCreation = document.getElementById('ageCreation');
//Edit Page
const usernameUpdate = document.getElementById('usernameUpdate');
const passwordUpdate = document.getElementById('passwordUpdate');
const emailUpdate = document.getElementById('emailUpdate');
const ageUpdate = document.getElementById('ageUpdate');
const colorUpdate = document.getElementById('color');
const cRegex = /^[1-9,a-f]{6}$/i;

const checkLogin = () => {
    if(usernameLogin.value.trim() === "" || passwordLogin.value.trim() === ""){
        return false;
    }
    else{
        return true;
    }
};

const checkCreation = () => {
    if(usernameCreation.value.trim() === "" || passwordCreation.value.trim() === "" || emailCreation.value.trim() === "" || ageCreation.value.trim() === ""){
        return false;
    }
    else{
        return true;
    }
};

const checkUpdate = () => {
    if(usernameUpdate.value.trim() === "" || passwordUpdate.value.trim() === "" || emailUpdate.value.trim() === "" || ageUpdate.value.trim() === "" || !cRegex.test(colorUpdate.value)){
        return false;
    }
    else{
        return true;
    }
};