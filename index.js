var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var socket = require('./socket.js');
var session = require('express-session');
var React = require('react/addons');
var passport = require('passport');
var SteamStrategy = require('passport-steam').Strategy;
var reactViews = require('express-react-views');

app.use(session({
  secret: 'keyboard cat'
}));
app.use(passport.initialize());
app.use(passport.session());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());
app.use(express.static(path.join(__dirname, 'public')));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new SteamStrategy({
    returnURL: 'http://localhost:4000/auth/steam/return',
    realm: 'http://localhost:4000/',
    apiKey: 'C1797373C07E4F2F658C1E6E2C2679D4'
  },
  function(identifier, profile, done) {
    process.nextTick(function() {
      profile.identifier = identifier;
      return done(null, profile);
    });
  }
));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/auth/steam',
  passport.authenticate('steam'),
  function(req, res) {
  });

app.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

io.sockets.on('connection', socket);

http.listen(4000, function(){
  console.log('listening on *:4000');
});
