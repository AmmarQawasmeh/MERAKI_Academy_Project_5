const express = require("express");
const app = express();
const PORT = 5000;
require("dotenv").config();
const { pool } = require("./db");

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
