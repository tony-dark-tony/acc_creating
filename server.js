const express = require('express');

const app = express();
var http = require('http').createServer(app);

app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

http.listen("1212");