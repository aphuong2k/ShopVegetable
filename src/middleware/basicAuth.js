
function authRole(role) {
  return (req, res, next) => {
    if (req.user.check !== role) {
    //   res.status(401)
    //   return res.send('Not allowed')
    return res.redirect('/guess')
    }
    next()
  }
}
function name() {
    return (req, res, next) => {
      return res.user.name
    }
  }

module.exports = {
  authRole,name
}