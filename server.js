// Using Express Framework Services
var express = require('express');

// Creating Our First App
var app = express();

app.use(express.static('public'));

app.listen('3000',function () {

    console.log('server is running on port 3000')

});
