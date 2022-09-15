const express = require("express");
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());

// download schedule endpoint  endpoint
app.get("/", function (req, res) {
  res.download("./HR-schedule-template.xlsx");
});

// run the server
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
