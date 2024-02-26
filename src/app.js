const express = require("express");
const hltb = require("howlongtobeat");
const hltbService = new hltb.HowLongToBeatService();
const config = require("../env/prod.cfg")

const PORT = 8080;


const app = express();
app.set("view-engine", "ejs");
app.use(express.json());

app.get('/', (req, res) => {
    data = hltbService.search(req.query.game).then(result => res.send(result));
})

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});