var user={
    username:'user',
    password:'pass'
}

const express = require('express');
const {Server} = require('socket.io');
const axios = require('axios');
const bodyParser = require('body-parser')
const session = require('express-session')
const Passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const { Cookie } = require('express-session')

const app = express();
var http = require('http').createServer(app);
var io = new Server(http);

app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({ 
    secret: 'mysecret',
    cookie:{
        maxAge:1000*60*60*24*3
    }
}))
app.use(Passport.initialize())
app.use(Passport.session())

app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('Home');
    }else{
        res.render('login')
    }
});

app.route('/login')
    .get((req,res)=>{
        res.render('login')
    })
    .post(Passport.authenticate('local', {
        // dieu huong chung thuc
        failureRedirect: '/login',
        successRedirect: '/',
    }))

app.get('/manage_user', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('admin', {
            active: 1
        })
    }else{
        res.render('login')
    }
});
app.get('/manage_account', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('manager_account', {
            active: 2
        })
    }else{
        res.render('login')
    }
});
app.get('/token', (req, res)=>{
    if (req.isAuthenticated()) {
        res.render('token', {
            active: 3
        })
    }else{
        res.render('login')
    }
});
app.get('/change_pass', (req, res) => {
    res.render('change_pass')
    if (req.isAuthenticated()) {
        res.render('change_pass')
    }else{
        res.render('login')
    }
})
io.on('connection', (socket) => {
    socket.on("submit", (data)=>{
        socket.emit("callback", "Hello")
    })
})


//-------------------------------------------------------------------------------------------------
Passport.use(new LocalStrategy(
    // phuong thuc chung thuc
    (username, password, done) => {
        if (username == user.username && password == user.password) {
            return done(null, user)
        } else {
            return done(null, false)
        }
    }
))

Passport.serializeUser((user, done) => {
    done(null, user.username)
    // ghi vao cookie
})

Passport.deserializeUser((name, done) => {
    // lay cookie so sanh
    if (name == user.username) {
        return done(null, name)
    } else {
        return done(null, false)
    }
})
http.listen("1212");
