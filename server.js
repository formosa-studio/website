require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/pageRoute"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running successfully on port *${PORT}*`);
});