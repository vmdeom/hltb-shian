const express = require("express");
const hltb = require("howlongtobeat");

const app = express();
app.set("view-engine", "ejs");
app.use(express.json());

app.listen(3000 ,"localhost", () => {
    console.log("listening");
});