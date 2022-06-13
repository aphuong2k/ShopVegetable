const express = require('express');
const route = express.Router();


const courseController = require('../app/controllers/CourseController');
route.get('/:id/edit',checkAuthenticated,courseController.edit)
route.put('/:id',courseController.post)
route.delete('/:id',courseController.delete)
route.get('/create',checkAuthenticated,courseController.create)
route.get('/update',checkAuthenticated,courseController.update)
route.post('/store',courseController.store)
route.get('/LoaiSP/:tLoaiSP',checkAuthenticated,courseController.LoaiSP)
route.get('/:slug',checkAuthenticated,courseController.show)

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
     res.redirect('/sever/login')
  }
module.exports = route;