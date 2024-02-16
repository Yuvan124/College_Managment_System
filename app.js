const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose
= require("passport-local-mongoose");

mongoose.connect(
"mongodb://localhost:27017/passport-forget", {
useNewUrlParser: true
});

const app = express()

app.use(passport.initialize());

const userSchema = new mongoose.Schema({
username: String,
password: String,
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
done(null, user.id);
});

passport.deserializeUser(function (id, done) {
User.findById(id, function (err, user) {
done(err, user);
});
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}))

app.get('/register', function (req, res) {
res.sendFile('register.html', {
root: __dirname
});
});

app.get('/changepassword', function (req, res) {
res.sendFile('changepassword.html', {
root: __dirname
});
});

app.post('/register', function (req, res) {
User.register({
username: req.body.username
}, req.body.password, function (err) {
if (err) {
res.send(err);
} else {
res.send('successfully registered')
}
});
});

app.post('/changepassword', function (req, res) {
User.findByUsername(req.body.username, (err, user) => {
if (err) {
res.send(err);
} else {
user.changePassword(req.body.oldpassword,
req.body.newpassword, function (err) {
if (err) {
res.send(err);
} else {
res.send('successfully change password')
}
});
}
});
});


app.listen(3000);

