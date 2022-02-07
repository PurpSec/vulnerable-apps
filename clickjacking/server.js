'use strict';

const express = require('express');
var path = require('path');
var count = 0

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use("/public", express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('win');
});


function pushLike() {
  count = 1;
  document.getElementById("like").src = './public/images/rlike.png';
  console.log('liked');
  console.log(count);
};


app.get('/like', (req, res) => { 
  res.render('like', { pushLike: pushLike });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
