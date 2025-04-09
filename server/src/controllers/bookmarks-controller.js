const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query

      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      
      res.send(bookmark)
    } catch(err) {
      console.log(err)
      return res.status(500).send({
        error: 'An error has occured retrieving bookmark.'
      })
    }
  },
  async post (req, res) {
    try {
      const {songId, userId} = req.body
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })

      console.log('bookmark: ' + bookmark)
      if (bookmark) {
        return res.status(400).send({
          error: "You already have this song bookmarked."
        })
      }

      const newBookmark = await Bookmark.create({
          SongId: songId,
          UserId: userId
      })
      
      res.send(newBookmark)
    } catch(err) {
      console.log(err)
      return res.status(500).send({
        error: 'An error has occured creating bookmark.'
      })
    }
  },
  async delete (req, res) {
    try {
      const { bookmarkId } = req.params
      console.log('bookmarkId: ' + bookmarkId)
      const bookmark = await Bookmark.findByPk(bookmarkId)

      console.log('bookmark: ' + bookmark)
      if (!bookmark) {
        return res.status(400).send({ 
          error: `Bookmark with ID ${bookmarkId} not found`
        });
      } else {
        await bookmark.destroy()
        res.send(bookmark)
      }
    } catch(err) {
      console.log(err)
      return res.status(500).send({
        error: 'An error has occured deleting bookmark.'
      })
    }
  }
}