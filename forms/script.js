const myText = document.getElementById('myText');
var errors = false;

const validate = evt => {
    //Regex
    errors = true;
}

const mySubmit = () => {
    console.log(document.getElementById('myText').value);
    if(errors){
        return false; //does not take form to submitted.html; will do that if true
    }
    else{
        return true;
    } 
}


myText.addEventListener('input', validate);