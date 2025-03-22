const AuthenticationController = require('./controllers/authentication-controller')

module.exports = (app) => {
  app.post("/register", AuthenticationController.register)
}
