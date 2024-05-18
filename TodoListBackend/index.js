const express = require('express');
const bodyParser = require('body-parser');
const accountRepo = require('./repository/repository.account')
const listRepo = require('./repository/repositort.list')
require('dotenv').config();
var cors = require("cors");

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/list/:user_id', listRepo.getlistEvent);
app.post('/signup', accountRepo.signupEvent);
app.post('/login', accountRepo.loginEvent);
app.post('/add/:user_id', listRepo.addlistEvent);
app.delete('/delete/:user_id', listRepo.deletelistEvent);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});