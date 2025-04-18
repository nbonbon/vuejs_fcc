module.exports = (sequalize, DataTypes) => {
  const History = sequalize.define('History', {})

  History.associate = function (models) {
    History.belongsTo(models.User)
    History.belongsTo(models.Song)
  }

  return History
}