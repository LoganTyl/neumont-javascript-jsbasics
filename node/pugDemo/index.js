const express = require('express');
const pug = require('pug');
const path = require('path');
const routes = require('./routes/routes') //don't need .js extension
const config = require('./config');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname+'/views');
app.use(express.static(path.join(__dirname+'/public')));

app.get('/', routes.index);
app.get('/page1', routes.page1);
app.get('/page2', routes.page2);
app.get('/contact', routes.contact);

app.listen(3000);