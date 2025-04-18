const {
  sequelize,
  Song,
  User,
  Bookmark,
  History
} = require('../models')

// const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json');
const histories = require('./histories.json');

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

  for (const history of histories) {
    await History.create(history);
  }
});
