
const handlebars  = require('express-handlebars');
const express = require('express');
// const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport')
const port = 5000; 
const route = require('./routes');
const db = require('./config/db');
const { Passport } = require('passport/lib');



db.connect();
app.use(flash());
app.use(session({
  secret: 'somevalue',
  resave:false,
  saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(express.urlencoded({extended:false}))

app.use(methodOverride('_method'));
// app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'public')));

app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers : {
    sum: (a,b) => a + b,
  }
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource', 'views'))



app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 





