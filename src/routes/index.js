const homeRouter = require('./home');
const coursesRouter = require('./courses');
const loginRouter = require('./sever');

function route(app){
    app.use('/sever',loginRouter);
    app.use('/courses',coursesRouter);
    app.use('/',homeRouter);
}
module.exports = route;