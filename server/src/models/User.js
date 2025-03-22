module.exports = (sequalize, DataTypes) => 
  sequalize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })