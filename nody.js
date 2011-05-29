var express = require('express')
var OMG = require('./public/omg').OMG
var app = express.createServer();

app.use(express.static(__dirname + '/public'));

app.register('.haml', require('hamljs'));

app.get ("/test", function (req, res) {
  res.render ('test.haml', { layout: false, locals: { 'OMG': OMG }});
});

app.listen(3000);
