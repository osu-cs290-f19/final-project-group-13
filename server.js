// Nothing Here
/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Hongyiel Suh
 * Email: suhho@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: null }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
/*
app.get('/people/:person', function (req, res, next) {
  var person = req.params.person.toLowerCase();
  if (availablePeople.indexOf(person) >= 0) {
    // res.status(200).sendFile(
    //   __dirname + '/public/people/' + person + '.html'
    // );
    res.render('photoPage', { photoData: [1, 2, 3, 4, 5] });
  } else {
    next();
  }
});
*/
