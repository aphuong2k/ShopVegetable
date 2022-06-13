const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose'); 
const { mutipleMongooseToObject } = require('../../util/mongoose'); 
const { json } = require('express/lib/response');


class CourseController {
    show(req,res,next){
        Course.findOne({slug: req.params.slug})
        .then(course =>{
            res.render('single',{course : mongooseToObject(course)})
            
    })
        .catch(next);
    }
    create(req,res,next){
        res.render('create')
    }
    store(req,res,next){
        const course = new Course(req.body);
        course.save()
        .then(()=>res.redirect('/'))
        .catch(error => {
            
        })
        
    }
    update(req,res,next){
        Course.find({})
            .then(courses => {
                res.render('update',{
                    courses:mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
    edit(req,res,next){
        Course.findById(req.params.id)
        .then(course =>{
            res.render('edit',{course : mongooseToObject(course)})
            
    })
        .catch(next);
    }
    post(req,res,next){
        Course.updateOne({_id:req.params.id},req.body)
        .then(()=>res.redirect('update'))
        .catch(next)
    }
    delete(req,res,next){
        Course.deleteOne({_id:req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next)

    }
    LoaiSP(req,res,next){
        Course.find({TenLoaiSP:req.params.tLoaiSP})
            .then(courses => {
                res.render('shop',{
                    courses:mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

}
module.exports = new CourseController;