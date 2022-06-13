
const role = {
    ADMIN: 'admin',
    BASIC: 'basic'
}
 
 const users = [
     {
         id:"admin",
         name:"admin",
         email:"admin@admin",
         password : 'admin',
         check : role.ADMIN,
     }
 ];

 module.exports = {
     role,users
 }