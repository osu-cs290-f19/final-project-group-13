var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;


// var bodyParser = require('body-parser');



var itemData = require('./itemData');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
// app.use(bodyParser.json());

app.get('/', function(req, res){
  res.status(200).render('itemPage', {
     itemDatas: itemData
  });
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
