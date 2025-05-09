const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./models");
const config = require("./config/config");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:8080', // Change this to the actual frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: false
}));

require('./routes')(app)

sequelize.sync({force: false}).then(() => {
  app.listen(config.port);
  console.log(`Server started on port ${config.port}`);
});
