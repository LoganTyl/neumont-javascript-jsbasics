var express = require('express'),
  pug = require('pug'),
  path = require('path'),
  route = require('./routes/routes.js'),
  bodyParser = require('body-parser'),
  bcrypt = require('bcrypt-nodejs'),
  cookieParser = require('cookie-parser'),
  expressSession = require('express-session');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname + '/public')));
app.use(cookieParser("pass"))
app.use(expressSession({
    secret: 'pass',
    saveUninitialized: true,
    resave: true
}));

const checkAuth = (req,res,next) => {
    if(req.session.user && req.session.user.isAuthenticated) {
        next();
    } else {
        res.redirect('/');
    }
};

var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

app.get('/', route.index);
app.post('/signedIn', urlencodedParser, route.login);
app.get('/signUp', route.signup);
app.post('/', urlencodedParser, route.createAccount);
// app.get('/signedIn/:id', checkAuth, route.signedIn);
app.get('/edit/:id', checkAuth, route.edit);
app.post('/edit/:id', urlencodedParser, route.updateAccount);
app.get('/logout', route.logout);
app.get('/deleteAccounts', route.deleteAll);
app.get('/api', route.getAPI);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(3000);