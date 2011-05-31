var express = require('express')
var app = express.createServer();

// Define the public dir
app.use(express.static(__dirname + '/public'));

// Make haml the view engine and register so we can call views without the extension
app.set('view engine', 'haml');
app.register('.haml', require('hamljs'));

// Load up the shared file
var OMG = require('./public/js/omg')

// Capture the homepage
app.get ("/", function (req, res) {
  // Render the demo!
  res.render('demo', {  locals: { 'OMG': OMG }});
});

// Make sure the port can be supplied using the env vars (for Heroku)
var port = process.env.PORT || 3000;
console.log("Listening on " + port);

// Let the dogs out
app.listen(port);
