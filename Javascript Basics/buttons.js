const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

const handleClick = evt => {
    console.log(evt.target.id);
    document.getElementById('container').style.display = "none"; //set to block to bring back; change visible property if you want to leave space for something else
}

btn1.addEventListener('click', handleClick);
btn2.addEventListener('click', handleClick);
btn3.addEventListener('click', handleClick);
btn4.addEventListener('click', handleClick);

btn1.innerHTML = Math.floor(Math.random()*10); //text inside button; 0-9