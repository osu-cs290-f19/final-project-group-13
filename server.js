var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
// var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var $ = require('jQuery');

var itemData = require('./itemData');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
// app.use(bodyParser.json());

app.get('/:recipePage', function(req, res){
  var recipePage = req.params.recipePage;
  var index = itemData.findIndex(obj=>obj.CAPTION===recipePage);
  
  res.status(200).render('recipePage', itemData[index]);
});

app.get('/', function(req, res){
  res.status(200).render('itemPage', {
     itemDatas: itemData
  });
});

// Still in testing
app.post('/:addItem', function (req, res){
  if (req.body && req.body.CATEGORIES && req.body.IMG_URL && req.body.CAPTION) {
    console.log("== Client added the following item:");
    console.log("  - person:", req.body.CATEGORIES);
    console.log("  - url:", req.body.IMG_URL);
    console.log("  - caption:", req.body.CAPTION);

    // Add photo to DB here.

    res.status(200).send("Item successfully added");
  } else {
    res.status(400).send("Requests to this path must " +
      "contain a JSON body with CATEGORIES, IMG_URL and CAPTION " +
      "fields.");
  }
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
