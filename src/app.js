const express = require("express");
const hltb = require("howlongtobeat");
const hltbService = new hltb.HowLongToBeatService();
const config = require("../env/prod.cfg")

const HOST = config.host;
const PORT = config.port;


const app = express();
app.set("view-engine", "ejs");
app.use(express.json());

app.get('/', (req, res) => {
    hltbService.search(req.query.game).then(result => console.log(result));
})

app.listen(PORT, HOST, () => {
    console.log(`Listening at ${HOST}:${PORT}`);
});