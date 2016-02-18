var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/users')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var user = require('./routes/user.js')(app);

var server = app.listen(8080, function(){
	console.log('Server running')
})