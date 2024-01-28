// callbacks (old)
var data;
var request = new XMLHttpRequest();

function loadData() {
    request.open('GET', 'https://opentdb.com/api.php?amount=1&category=20&type=multiple');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    data = JSON.parse(request.responseText);
    console.log(data);
}

loadData();


// promises (new)
let url = "https://opentdb.com/api.php?amount=1&category=20&type=multiple";

fetch(url)
    .then(response => response.json())
    .then(promise_data => {
        console.log(promise_data);
        console.log(promise_data.results[0].incorrect_answers[1]) //call second incorrect answer
    })
    .catch(err => console.log(err)); //technically all one line