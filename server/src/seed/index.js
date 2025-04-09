const {
  sequelize,
  Song,
  User,
  Bookmark
} = require('../models')

// const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json');

sequelize.sync({ force: true }).then(async () => {
  for (const user of users) {
    await User.create(user);
  }

  for (const song of songs) {
    await Song.create(song);
  }

  for (const bookmark of bookmarks) {
    await Bookmark.create(bookmark);
  }
});
