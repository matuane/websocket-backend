const bodyParser = require("body-parser");
const users = require("./usersRoute.js");

module.exports = (app) => {
  app.use(bodyParser.json(), users);
};
