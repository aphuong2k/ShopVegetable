
const express = require('express');
const route = express.Router();
const passport = require('passport')


const loginController = require('../app/controllers/LoginController');
route.delete('/logout',loginController.Logout)
route.get('/login',checkNotAuthenticated,loginController.login)
route.get('/register',checkNotAuthenticated,loginController.register);
route.post('/login',checkNotAuthenticated,passport.authenticate(
    'local',{
        successRedirect:'/',
        failureRedirect:'/sever/login',
        failureFlash:true
    }
))
route.post('/register',loginController.Register);
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }


module.exports = route;