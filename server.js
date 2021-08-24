const express = require('express');
const {Server} = require('socket.io');
const axios = require('axios');

const app = express();
var http = require('http').createServer(app);
var io = new Server(http);

app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/manage_user', (req, res) => {
    res.render('admin', {
        active: 1
    })
});
app.get('/manage_account', (req, res) => {
    res.render('manager_account', {
        active: 2
    })
});
app.get('/token', (req, res)=>{
    res.render('token', {
        active: 3
    })
});
app.get('/change_pass', (req, res) => {
    res.render('change_pass')
})
io.on('connection', (socket) => {
    socket.on("submit", (data)=>{
        console.log(data)
    })
})

http.listen("1212");