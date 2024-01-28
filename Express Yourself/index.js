const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const config = require('./config');
const featuresList = require('./featuresList');
const routes = require('./routes/routes');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

const urlencodedParser = bodyParser.urlencoded({
    extended: true
});

app.get('/', routes.index);
app.get('/features', routes.features);
app.get('/order',  routes.order);
app.post('/submitted', urlencodedParser, routes.dealWithData);

app.listen(3000);