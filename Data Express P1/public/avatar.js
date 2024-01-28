const eyes = document.getElementById('eyes');
const nose = document.getElementById('nose');
const mouth = document.getElementById('mouth');
const color = document.getElementById('color');
const editAvatar = document.getElementById('editAvatar')
const resp = document.getElementById('regexResp')

let colorRegex = /^[1-9,a-f]{6}$/i

const activeCheck = (element, regex) => {
	return regex.test(element.value);
}
const response = (element, test, text) =>{
	if (!test){
		element.innerHTML = text;
	}else{
		element.innerHTML = ' '
	}
}
const colorCheck = () =>{
	let test = activeCheck(color,colorRegex);
	response(resp, test, "Please enter only digits 1-9 or letters a-f; do not use any special characters")
	return test;
}
const edit = () => {
	if(colorCheck()){
		editAvatar.src = `http://api.adorable.io/avatars/face/${eyes.value}/${nose.value}/${mouth.value}/${color.value}`;
	}
}
eyes.addEventListener("input", edit);
nose.addEventListener("input", edit);
mouth.addEventListener("input", edit);
color.addEventListener("keyup", colorCheck);
color.addEventListener("keyup", edit);