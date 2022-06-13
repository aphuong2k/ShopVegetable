const express = require('express');
const route = express.Router();
const { authRole , name } = require('../middleware/basicAuth')
const { role , users } = require('../data')


const homeController = require('../app/controllers/HomeController');
route.get("/cart",checkAuthenticated,homeController.cart)
route.get("/guess",checkAuthenticated,homeController.guess)
route.get("/search",checkAuthenticated,homeController.search)
route.get('/shop',checkAuthenticated,homeController.shop)
route.get('/',checkAuthenticated,authRole(role.ADMIN),homeController.index);

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('sever/login')
  }



module.exports = route;