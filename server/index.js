const express = require('express');
var path = require('path');
// Express Initialize
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/api/hi', function (req, res) {
    res.send('Hello World! from Vishal');
});

app.listen(process.env.PORT || 8000, () => {
    console.log('listen port 8001');
});