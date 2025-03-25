const AuthenticationController = require('./controllers/authentication-controller')
const AuthenticationControllerPolicy = require('./policies/authentication-controller-policy')
const SongsController = require('./controllers/songs-controller')

module.exports = (app) => {
  app.post("/register", 
    AuthenticationControllerPolicy.register, 
    AuthenticationController.register)

  app.post("/login", 
    AuthenticationController.login)

  app.get("/songs", 
    SongsController.index)
  
  app.post("/songs", 
    SongsController.post)
}
