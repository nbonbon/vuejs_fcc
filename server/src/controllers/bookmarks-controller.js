const {
  Bookmark,
  Song
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.query

      const where = {
        UserId: userId
      }

      if (songId) {
        where.SongId = songId
      }

      const bookmarks = (await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Song
          }
        ]
      })).map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend({}, 
          bookmark.Song,
          bookmark
        ))
      
      res.send(bookmarks)
    } catch(err) {
      console.log(err)
      return res.status(500).send({
        error: 'An error has occured retrieving bookmarks.'
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.body
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
      const userId = req.user.id
      const { bookmarkId } = req.params
      console.log('bookmarkId: ' + bookmarkId)
      const bookmark = await Bookmark.findOne({
        id: bookmarkId,
        UserId: userId
      })

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