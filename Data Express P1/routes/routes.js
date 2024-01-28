const config = require('../config');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt-nodejs');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data');

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {

});

var accountSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    age: String,
    q1answer: String,
    q2answer: String,
    q3answer: String,
    visited: Array,
    faceSettings: Array
});

var Account = mongoose.model('Account_Collection', accountSchema);


exports.index = (req, res) => { //login page
    Account.find((err, account) => {
        if (err) return console.error(err);
        res.render('login', {
            title: 'Log In To Your Account',
            accounts: account
        });
    });
    // res.render('login', {
    //     "title": 'Log In To Your Account',
    //     "config": config
    // })
};

exports.login = (req, res) => { //logging in
    Account.find({username: `${req.body.username}`}, (err, account) => {
        if(account.length){ //true if account has values
            bcrypt.compare(`${req.body.password}`, account[0].password, (err, response) => {
                if(response == true){
                    req.session.user = {
                        isAuthenticated: true,
                        username: req.body.username,
                        id: account[0].id,
                        visited: account[0].visited
                    };
                    let message;
                    let d = new Date();
                    req.session.user.visited.shift();
                    req.session.user.visited.push(`${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()} ${d.getHours() < 10 ? '0' + d.getHours() : d.getHours()}:${d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()}:${d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()}`);
                    if(req.session.user.visited[0] == null){
                        message = "You have not visited this website before";
                    }
                    else{
                        message = `You last visited this website on ${req.session.user.visited[0]}`;
                    }
                    res.cookie("lastVisited", message, {maxAge: 9999999999999});
                    account[0].visited = req.session.user.visited;
                    account[0].save((err, person) => {
                        if (err) return console.error(err);                
                    });
                    res.render('signedIn', {
                        title: "Welcome Back!",
                        id: account[0].id,
                        lastVisited: message,
                        account: account[0]
                    });
                }
                else{
                    res.redirect('/');
                }
            })
        }
        else {
            res.redirect('/');
        }
    });
};

exports.signup = (req, res) => { //signing up
    res.render('signUp', {
        "title": 'Sign Up For An Account',
        "config": config
    })
};

exports.createAccount = (req, res) => { //finishing signup
    Account.find({username: `${req.body.username}`}, (err, account) => {
        if(!account.length){
            bcrypt.hash(req.body.password, null, null, (err, hash) => {
                var myHash = hash;
                q1answer = req.body.q1answers;
                q2answer = req.body.q2answers;
                q3answer = req.body.q3answers;
                let eye = config.eyes[Math.floor(Math.random()*9)];
                let nose = config.nose[Math.floor(Math.random()*9)];
                let mouth= config.mouth[Math.floor(Math.random()*9)];
                let color = ""+ Math.floor(Math.random()*9)+ Math.floor(Math.random()*9)+ Math.floor(Math.random()*9)+ Math.floor(Math.random()*9)+ Math.floor(Math.random()*9)+ Math.floor(Math.random()*9);
                let account = new Account({
                    username: req.body.username,
                    password: myHash,
                    email: req.body.email,
                    age: req.body.age,
                    q1answer: q1answer,
                    q2answer: q2answer,
                    q3answer: q3answer,
                    visited: [null,null],
                    faceSettings: [eye,nose,mouth,color]
                });
                console.log(account.faceSettings)
                account.save((err, person) => {
                    if (err) return console.error(err);                
                });
                res.redirect('/');
            });
        }
        else {
            res.redirect('/signUp');
        }
    });
};

// exports.signedIn = (req, res) => { //when signed in
//     Account.findById(req.params.id, (err, acc) => {
//         if (err) return console.error(err);
//         res.render('signedIn', {
//             title: 'Welcome Back!',
//             "config": config
//         })
//     });
// };

exports.edit = (req, res) => { //editing page
    Account.findById(req.params.id, (err, acc) => {
        if (err) return console.error(err);
        res.render('edit', {
            "title": 'Update Information',
            "config": config,
            account: acc
        })
    });
};

exports.updateAccount = (req, res) => { //finishing edit
    // console.log('in updateAccount')
    Account.findById(req.params.id, function (err, acc) {
        if (err) return console.error(err);
        if(acc){
            Account.find({username: `${req.body.username}`}, (err, account) => {
                if(!account.length || req.body.username == acc.username){
                    bcrypt.hash(req.body.password, null, null, (err, hash) => {
                        var myHash = hash;
                        q1answer = req.body.q1answers;
                        q2answer = req.body.q2answers;
                        q3answer = req.body.q3answers;
                        eyes = req.body.eyes;
                        nose = req.body.nose;
                        mouth = req.body.mouth;
                        color = req.body.color;
                        
                        acc.username = req.body.username;
                        acc.password = myHash;
                        acc.email = req.body.email;
                        acc.age = req.body.age;
                        acc.q1answer = q1answer;
                        acc.q2answer = q2answer;
                        acc.q3answer = q3answer;
                        acc.faceSettings = [eyes,nose,mouth,color]
                        acc.save((err, person) => {
                            if (err) return console.error(err);                
                        });
                        res.render('signedIn', {
                            title: "Welcome Back!",
                            id: acc.id,
                            lastVisited: req.cookies.lastVisited,
                            account: acc
                        })
                    });
                }
                else {
                    res.redirect('/edit/'+req.session.user.id);
                }
            });
        }
        else{
            res.redirect('/edit/'+req.session.user.id);
        }
    });
};

exports.logout = (req,res) => { //logging out
    req.session.destroy(err => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
}

exports.deleteAll = (req,res) => {
    Account.deleteMany({}, err => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
}

exports.getAPI = (req, res) => {
    //Get Answer Amounts
    let q1results = [0,0,0,0];
    let q2results = [0,0,0,0];
    let q3results = [0,0,0,0];
    let results = [q1results, q2results, q3results];
    const matchAnswers = (userAnswer, answerArray, answerAmtArray) => {
        let index = 0;
        answerArray.forEach(element => {
            if(element == userAnswer){
                answerAmtArray[index]++;
            }
            index++;
        });
    }

    Account.find({}, (err, accounts) => {
        accounts.forEach(element => {
            matchAnswers(element.q1answer, config.questions[0][1], q1results);
            matchAnswers(element.q2answer, config.questions[1][1], q2results);
            matchAnswers(element.q3answer, config.questions[2][1], q3results);
        });

        //Make API
        let APIResults = [];
        let resultIndex = 0;
        let totalResultIndex = 0;
        (config.questions).forEach(element => { //each question
            let answerArray = [];
            element[1].forEach(e => { //each answer
                answerArray.push([e, results[totalResultIndex][resultIndex]]);
                resultIndex++;
            });
            let result = {"question":element[0],"answers":answerArray};
            APIResults.push(result);
            resultIndex = 0;
            totalResultIndex++;
        });

        var myJSON = {"results":APIResults};
        let myJSONstringified = JSON.stringify(myJSON);
        // console.log(typeof(myJSON));
        // console.log(typeof(myJSONstringified));
        // console.log(myJSONstringified);
        res.send(myJSONstringified);
        // res.send(myJSON);
    });
};