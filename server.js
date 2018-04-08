let express = require('express');
let app = express();
let mongoose = require('mongoose');
var path = require('path');
let bodyParser = require('body-parser');
let rout = require('./router');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
mongoose.connect("mongodb://localhost:27017/varun");

app.use(bodyParser.urlencoded({extended:false}),rout);






app.listen(8081);
