const express = require('express'); //delete node_modules before submitting
const routes = require('./routes/routes.js');

const app = express();

app.get('/', routes.index);
app.get('/hello', routes.hello);
app.get('/goodbye/:name/:info', routes.goodbye);
app.get('/:whatever', routes.whatever); //goes top to bottom

app.listen(3000);