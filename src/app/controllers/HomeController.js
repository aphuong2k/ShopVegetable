const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');



var PAGE_SIZE = 6;
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
class HomeController {
    index(req,res,next){
        // res.render('home');
        Course.find({})
        .limit(PAGE_SIZE)
            .then(courses => {
                res.render('home',{
                    courses:mutipleMongooseToObject(courses),name:req.user.name
                    // name :req.user.name
                });
            })
            .catch(next);
        };
        guess(req,res,next){
            // res.render('home');
            Course.find({})
            .limit(PAGE_SIZE)
                .then(courses => {
                    res.render('guess',{
                        courses:mutipleMongooseToObject(courses),
                        name :req.user.name
                    });
                })
                .catch(next);
            };
    shop(req,res,next){
            var page = req.query.page
        if (page) {
            page = parseInt(page)
            var S = (page - 1) * PAGE_SIZE
            Course.find({})
                .skip(S)
                .limit(PAGE_SIZE)
                .then(courses => {

                    res.render('shop', { courses: mutipleMongooseToObject(courses) })
                })
                .catch(next)
        }
        else{
            Course.find({})
            .then(courses => {
                res.render('shop',{
                    courses:mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
        }
        }
        search(req,res,next){
            const regex = new RegExp(escapeRegex(req.query.term), 'gi')
            Course.find({TenSP:regex})
            .then(courses => {
                res.render('shop',{
                    courses:mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
        }
        cart(req,res){
            res.render('cart');
        }
    }

module.exports = new HomeController;