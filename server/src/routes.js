const AuthenticationController = require('./controllers/authentication-controller')
const AuthenticationControllerPolicy = require('./policies/authentication-controller-policy')
const SongsController = require('./controllers/songs-controller')
const BookmarksController = require('./controllers/bookmarks-controller')

module.exports = (app) => {
  app.post("/register", 
    AuthenticationControllerPolicy.register, 
    AuthenticationController.register)

  app.post("/login", 
    AuthenticationController.login)

  app.get("/songs", 
    SongsController.index)

  app.get("/songs/:songId",
    SongsController.show)
  
  app.post("/songs", 
    SongsController.post)

  app.put("/songs/:songId",
    SongsController.put)

  app.get("/bookmarks", 
    BookmarksController.index)

  app.post("/bookmarks", 
    BookmarksController.post)

  app.delete("/bookmarks/:bookmarkId", 
    BookmarksController.delete)
}
