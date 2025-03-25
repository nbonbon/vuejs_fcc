const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch(err) {
      console.log(err)
      return res.status(500).send({
        error: 'An error has occured retrieving songs.'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch(err) {
      console.log(err)
      return res.status(500).send({
        error: 'An error has occured creating song.'
      })
    }
  }
}