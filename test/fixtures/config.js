var express = require('express'),
    mongoose = require('mongoose'),
    moviesfix = require('./movies'),
    usersfix = require('./users'),
    restful = require('../../'),
    movieparams,
    userparams,
    app;

exports.app = app = express();
app.use(express.bodyParser());
mongoose.connect('mongodb://localhost/unittest');

userparams = usersfix.register(app);
movieparams = moviesfix.register(app);

exports.movies = movieparams.movies;
exports.users = userparams.users;
exports.movie = movieparams.movie;
exports.user = userparams.user;