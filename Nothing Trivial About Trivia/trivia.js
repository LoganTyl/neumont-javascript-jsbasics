const question = document.getElementById('question');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const feedback = document.getElementById('feedback');
const difficulty_html = document.getElementById('difficulty');
const category_html = document.getElementById('categories');
const startRestart = document.getElementById('startRestartBtn');

let category = "";
let difficulty = "";
let questionNum = 1;
let correctGuesses = 0;
let correctButton = "";
let index = 0;

const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const initializeGame = () => {
    switch(difficulty_html.value){
        case "any_diff":
            difficulty = "";
            break;
        case "easy":
            difficulty = "&difficulty=easy"
            break;
        case "medium":
            difficulty = "&difficulty=medium"
            break;
        case "hard":
            difficulty = "&difficulty=hard"
            break;
        default:
            console.log("unrecognized");
            break;
    }
    switch(category_html.value){
        case "any_categ":
            category = "";
            break;
        case "general_knowledge":
            category = "&category=9";
            break;
        case "entertain_books":
            category = "&category=10";
            break;
        case "entertain_film":
            category = "&category=11";
            break;
        case "entertain_music":
            category = "&category=12";
            break;
        case "entertain_musicals_theaters":
            category = "&category=13";
            break;
        case "entertain_tv":
            category = "&category=14";
            break;
        case "entertain_videogames":
            category = "&category=15";
            break;
        case "entertain_boardgames":
            category = "&category=16";
            break;
        case "science_and_nature":
            category = "&category=17";
            break;
        case "science_computers":
            category = "&category=18";
            break;
        case "science_math":
            category = "&category=19";
            break;
        case "mythology":
            category = "&category=20";
            break;
        case "sports":
            category = "&category=21";
            break;
        case "geography":
            category = "&category=22";
            break;
        case "history":
            category = "&category=23";
            break;
        case "politics":
            category = "&category=24";
            break;
        case "art":
            category = "&category=25";
            break;
        case "celebrities":
            category = "&category=26";
            break;
        case "animals":
            category = "&category=27";
            break;
        case "vehicles":
            category = "&category=28";
            break;
        case "entertain_comics":
            category = "&category=29";
            break;
        case "science_gadgets":
            category = "&category=30";
            break;
        case "entertain_anime_manga":
            category = "&category=31";
            break;
        case "entertain_cartoons":
            category = "&category=32";
            break;
        default:
            console.log("unrecognized");
    }
    difficulty_html.style.display = "none";
    category_html.style.display = "none";
    startRestart.style.display = "none";
    question.style.display = "block";
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
    btn4.style.display = "block";
    feedback.style.display = "block";
    startGame();
}

const restartGame = () => {
    document.location.reload();
}

const startGame = () => {
    let url = "https://opentdb.com/api.php?amount=5" + category + difficulty + "&type=multiple";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const checkAnswer = evt => {
                if (evt.target.id == correctButton) {
                    feedback.innerHTML = "You got it right! Good job!";
                    correctGuesses++;
                }
                else{
                    feedback.innerHTML = "That's the wrong answer. The right answer is " + data.results[index].correct_answer;
                }
                btn1.style.backgroundColor = "red";
                btn2.style.backgroundColor = "red";
                btn3.style.backgroundColor = "red";
                btn4.style.backgroundColor = "red";
                document.getElementById(correctButton).style.backgroundColor = "green";
                btn1.removeEventListener('click', checkAnswer);
                btn2.removeEventListener('click', checkAnswer);
                btn3.removeEventListener('click', checkAnswer);
                btn4.removeEventListener('click', checkAnswer);
                setTimeout(function() {
                    if(questionNum == 5){
                        question.style.display = "none";
                        btn1.style.display = "none";
                        btn2.style.display = "none";
                        btn3.style.display = "none";
                        btn4.style.display = "none";
                        feedback.innerHTML = `You got ${correctGuesses} out of 5 questions right.`
                        startRestart.style.display = "block";
                        startRestart.innerHTML = "Play Again?";
                        startRestart.removeEventListener('click', initializeGame);
                        startRestart.addEventListener('click', restartGame);
                    }
                    else{
                        btn1.style.backgroundColor = "rgb(100, 143, 209)";
                        btn2.style.backgroundColor = "rgb(100, 143, 209)";
                        btn3.style.backgroundColor = "rgb(100, 143, 209)";
                        btn4.style.backgroundColor = "rgb(100, 143, 209)";
                        btn1.addEventListener('click', checkAnswer);
                        btn2.addEventListener('click', checkAnswer);
                        btn3.addEventListener('click', checkAnswer);
                        btn4.addEventListener('click', checkAnswer);
                        feedback.innerHTML = "";
                        questionNum++;
                        newQuestion(questionNum);
                    }
                }, 3000)
            }

            const newQuestion = num => {
                index = num - 1;
                question.innerHTML = data.results[index].question;
        
                let options = [data.results[index].correct_answer, data.results[index].incorrect_answers[0], data.results[index].incorrect_answers[1], data.results[index].incorrect_answers[2]];
                shuffle(options);
                correctButton = "btn" + (options.indexOf(data.results[index].correct_answer) + 1).toString();
                console.log(correctButton);
        
                btn1.innerHTML = options[0];
                btn2.innerHTML = options[1];
                btn3.innerHTML = options[2];
                btn4.innerHTML = options[3];
            }

            btn1.addEventListener('click', checkAnswer);
            btn2.addEventListener('click', checkAnswer);
            btn3.addEventListener('click', checkAnswer);
            btn4.addEventListener('click', checkAnswer);

            console.log(data);
            newQuestion(questionNum);
        })
        .catch(error => console.log(error));
}

startRestart.addEventListener('click', initializeGame)
