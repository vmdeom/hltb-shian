const express = require("express");
const hltb = require("howlongtobeat");
const hltbService = new hltb.HowLongToBeatService();
const config = require("../env/prod.cfg")

const PORT = 8080;


const app = express();
app.set("view-engine", "ejs");
app.use(express.json());

function readGameData(data){

    let dataArr = []
    
    data.forEach(element => {
        //console.log(`${JSON.stringify(element)} ---`);
        let newElement = JSON.stringify(element);
            dataArr.push(newElement);
    });

    return formatGameData(dataArr);
}

function formatGameData(data){

    let relevantGameData = {
        "name": "",
        "gameplayMain": "",
        "gameplayMainExtra": "",
        "gameplayCompletionist": ""
    }

    let dataArr = []

    data.forEach(element => {
        relevantGameData.name = JSON.parse(element).name;
        relevantGameData.gameplayMain = JSON.parse(element).gameplayMain;
        relevantGameData.gameplayMainExtra = JSON.parse(element).gameplayMainExta;
        relevantGameData.gameplayCompletionist = JSON.parse(element).gameplayCompletionist;
        dataArr.push(relevantGameData)
    })

    return dataArr;
}

app.get('/', (req, res) => {
    data = hltbService.search(req.query.game).then(result => console.log(readGameData(result)));
})

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});