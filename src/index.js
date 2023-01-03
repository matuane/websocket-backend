const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

const port = 3001;

app.use(
  cors({
    origin: "*",
  })
);

routes(app);

app.listen(port, () => {
  console.log(`O servidor está ouvindo no http://localhost:${port}`);
});

module.exports = app;
