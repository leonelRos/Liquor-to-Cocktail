const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

//route or backend
const cocktailRoutes = require("./routes/cocktails");

//initialize the app
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", cocktailRoutes);

//connect to database
const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to DB");
});

const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server running in ${PORT}`));
  })
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
