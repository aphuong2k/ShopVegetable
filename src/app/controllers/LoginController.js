const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport')
const {users,role} = require('../../data')
const app = express();
const initializePassport = require('../../routes/passport-config')
initializePassport(
    passport,
    email=>users.find(user => user.email === email),
    id => users.find(user => user.id === id)

)

    
class LoginController {
        login(req,res){
            res.render('login/login')
        }
        register(req,res){
            res.render('login/register')
        }
        Logout(req,res){
            req.logOut()
            res.redirect('/sever/login')
            
        }
      async Register(req,res){
            try {
                const hashedPw = await bcrypt.hash(req.body.password,10)
                users.push({
                    id : Date.now.toString(),
                    name : req.body.name,
                    email:req.body.email,
                    password:req.body.password,
                    check: role.BASIC
                })
                res.redirect('/')  
            } catch {
                res.redirect('/sever/register')  
            }
            console.log(users)
        }
    }

module.exports = new LoginController;