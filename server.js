const app = require('express')();

const bodyParser      = require('body-parser');
const express         = require('express');
const methodOverride  = require('method-override');
const logger          = require('morgan');
const path            = require('path');
const playerRouter    = require('./routes/playerRouter');
const gameRouter      = require('./routes/gameRouter');

const PORT = 3000;

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/players', playerRouter);
app.use('/games', gameRouter);
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on port: ${3000}`));
