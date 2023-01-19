const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes");
mongoose.set("strictQuery", false);

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {})
  .catch(() => {});

app.use(routes);

app.listen(PORT, () => {});
