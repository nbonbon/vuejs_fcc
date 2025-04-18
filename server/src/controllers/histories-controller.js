const {
  History,
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

      const histories = (await History.findAll({
        where: where,
        include: [
          {
            model: Song
          }
        ]
      })).map(history => history.toJSON())
        .map(history => _.extend({}, 
          history.Song,
          history
        ))
      
      res.send(_.uniqBy(histories, history => history.SongId))
    } catch(err) {
      console.log(err)
      return res.status(500).send({
        error: 'An error has occured retrieving history.'
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.body

      const newHistory = await History.create({
          SongId: songId,
          UserId: userId
      })
      
      res.send(newHistory)
    } catch(err) {
      console.log(err)
      return res.status(500).send({
        error: 'An error has occured creating history.'
      })
    }
  }
}