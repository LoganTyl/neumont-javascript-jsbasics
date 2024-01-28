const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser('This is my passphrase'));

app.get('/', (req, res) => {
    if(req.cookies.beenHereBefore == 'yes') {
        res.send('You have been here before');
    } else {
        res.cookie('beenHereBefore', 'yes');
        res.send('This is your first time here');
    }
});

app.get('/clear', (req, res) => {
    res.clearCookie('beenHereBefore');
    res.redirect('/');
})

app.listen(3000);