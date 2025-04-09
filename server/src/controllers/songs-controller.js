const {Song} = require('../models')
const { Op } = require('sequelize');

module.exports = {
  async index (req, res) {
    try {
      let songs = null
      const search = req.query.search
      if (search) {
        songs = await Song.findAll({
          where: {
            [Op.or]: [
              { title: { [Op.like]: `%${search}%` } },
              { artist: { [Op.like]: `%${search}%` } },
              { genre: { [Op.like]: `%${search}%` } },
              { album: { [Op.like]: `%${search}%` } }
            ]
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(songs)
    } catch(err) {
      console.log(err)
      return res.status(500).send({
        error: 'An error has occured retrieving songs.'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findByPk(req.params.songId)
      res.send(song)
    } catch(err) {
      console.log(err)
      return res.status(500).send({
        error: 'An error has occured retrieving song.'
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
  },
  async put(req, res) {
    try {
      await Song.update(req.body,  {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch(err) {
      console.log(err)
      return res.status(500).send({
        error: 'An error has occured updating song.'
      })
    }
  },
}