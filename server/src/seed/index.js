const {
  sequelize,
  Song,
  User
} = require('../models')

// const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')

sequelize.sync({ force: true }).then(async () => {
  for (const user of users) {
    await User.create(user);
  }

  for (const song of songs) {
    await Song.create(song);
  }
});
