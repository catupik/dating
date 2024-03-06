const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./AnswerRoutes");
const cors = require("cors");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("dotenv").config();
mongoose.set("strictQuery", false);
const PORT = 8080 || ProcessingInstruction.env.port;

app.use(express.json());
app.use(cors())

mongoose
  .connect(process.env.MONGODB_LINK)
  .then(() => console.log("connected to MDB"))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Works at port ${PORT}`);
});
// gnedyshevaeg    GwVJJGIyaAtSIMtN

// mongodb+srv://gnedyshevaeg:<password>@cluster0.ztx7d31.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
