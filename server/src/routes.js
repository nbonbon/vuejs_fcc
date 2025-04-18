const AuthenticationController = require('./controllers/authentication-controller')
const AuthenticationControllerPolicy = require('./policies/authentication-controller-policy')
const SongsController = require('./controllers/songs-controller')
const BookmarksController = require('./controllers/bookmarks-controller')
const HistoriesController = require('./controllers/histories-controller')
const isAuthenticated = require('./policies/isAuthenticated')

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
    isAuthenticated,
    BookmarksController.index)

  app.post("/bookmarks",  
    isAuthenticated,
    BookmarksController.post)

  app.delete("/bookmarks/:bookmarkId",  
    isAuthenticated,
    BookmarksController.delete)

  app.get("/histories",   
    isAuthenticated,
    HistoriesController.index)

  app.post("/histories",   
    isAuthenticated,
    HistoriesController.post)
}
