const express = require('express');
const path = require('path');
const mainRouter = require('./routes/router');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});