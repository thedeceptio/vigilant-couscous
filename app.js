require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = process.env.PORT || 3006;

app.get("/", (req, res) => {
  res.json({message: "Welcome to Vigilant Couscous"});
});

app.get("*", (req, res) => {
  res.status(404).json({error: `Couldn't find the route.`});
});


app.listen(port, () => {
    console.log("running on ", port);
});
