const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const morgan = require("morgan");
const path = require("path");
const indexRouter = require("./routes");
const db = require("./database/db.config");

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("short"));
app.use(indexRouter);

app.listen(port, (error) => {
  if (error) {
    console.error(error);
    throw error;
  } else console.log(`Server is listening on port ${port} 🚀`);
});
