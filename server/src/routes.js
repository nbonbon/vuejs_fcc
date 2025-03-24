const AuthenticationController = require('./controllers/authentication-controller')
const AuthenticationControllerPolicy = require('./policies/authentication-controller-policy')

module.exports = (app) => {
  app.post("/register", 
    AuthenticationControllerPolicy.register, 
    AuthenticationController.register)
  app.post("/login", 
    AuthenticationController.login)
}
