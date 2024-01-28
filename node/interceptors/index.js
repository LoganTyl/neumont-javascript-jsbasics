const express = require('express');

const app = express();

const globalInterceptor = (req,res,next) => { //runs after any request
    console.log('Global interceptor has run: ', req.path);
    next(); //after running interceptor, move onto next thing
};

app.use(globalInterceptor); //setting interceptor as global; looks for favicon.ico on first page only

const singleInterceptor = (req,res,next) => {
    console.log('Single interceptor has run: ', req.path);
    next();
};

app.get('/', (req, res) => {
    res.send('This is the root page.')
});

app.get('/apples', singleInterceptor, (req, res) => { //setting interceptor as single
    res.send('This is the Apple\'s page')
});

app.listen(3000);