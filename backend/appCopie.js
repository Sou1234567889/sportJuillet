/***********************  Modules Imporetes***************************/
// importer express module
const express = require("express");
//importer body parser  module
const bodyParser = require("body-parser")
//importer mngoose  module
const mongoose=require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');
/******************** Express Application ******************************/
// create express application
const app = express();

//Models importation
const Match =  require("./models/match");
/********************** App Configuration ****************************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Security configuration

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader(

        "Access-Control-Allow-Headers",

        "Origin, Accept, Content-Type, X-Requested-with, Authorization"

    );

    res.setHeader(

        "Access-Control-Allow-Methods",

        "GET, POST, DELETE, OPTIONS, PATCH, PUT"

    );

    next();

});


let matchesTab = [
    { id: 1, scoreOne: 2, scoreTwo: 0, teamOne: "EST", teamTwo: "CA" },
    { id: 2, scoreOne: 2, scoreTwo: 1, teamOne: "JUV", teamTwo: "ROM" },
    { id: 3, scoreOne: 3, scoreTwo: 0, teamOne: "RMD", teamTwo: "ATM" },
    { id: 4, scoreOne: 2, scoreTwo: 2, teamOne: "CIT", teamTwo: "LIV" }

]

let playersTab = [
    { id: 1, name: 'saleh', age: 20, nbr: 12, position: "lefet" },
    { id: 2, name: 'Farouk', age: 20, nbr: 12, position: "......" },
    { id: 3, name: 'Yassine', age: 20, nbr: 12, position: "lefet" },
    { id: 4, name: 'Hama', age: 20, nbr: 12, position: "/////" }
]

let teamsTab = [
    { id: 1, name: 'Ali', owner: 'ahmed', foundation: 1234 },
    { id: 2, name: 'ili', owner: 'faysel', foundation: 1234 },
    { id: 3, name: 'amen', owner: 'hama', foundation: 1234 }
]



function genereId(T){
    let max;
    if (T.length==0) {
        max=0;
    } else {
        max=T[0].id;
        for (let i = 0; i < T.length; i++) {
            if(T[i].id>max){
                max=T[i].id;
            }
            
        }
        
    }
    return max+1;
}
/************************* Business Logics ***************************************/

//Business logic: addMatch
app.post('/api/matches', (req, res) => {
    console.log('here into BL:Add Matches', req.body);
    req.body.id=genereId(matchesTab)
    matchesTab.push(req.body);
    res.json({isAddMatch:true});
});


//Business logic: editMatch
app.put('/api/matches', (req, res) => {
    console.log('here into BL:Edit Matches', req.body);
    for (let i = 0; i < matchesTab.length; i++) {
        if(matchesTab[i].id==req.body.id){
            matchesTab[i]=req.body;
            break;
        }
        
    }
    res.json({isEditMatch:'Succes'})
});


//Business logic: Get All Match
app.get('/api/matches', (req, res) => {
    console.log('here into BL:Get All Match');
    res.json({ matches: matchesTab });
});


//Business logic: Delete Matches by ID
app.delete('/api/matches/:id', (req, res) => {
    console.log('here into BL:Delete Matches by ID', req.params.id);
    for (let i = 0; i < matchesTab.length; i++) {
        if (matchesTab[i].id == req.params.id) {
            matchesTab.splice(i, 1);
            break;
        }

    }
    res.json({ isDeleted: true });
})

//Business logic: Get Matches by ID
app.get('/api/matches/:id', (req, res) => {
    console.log('here into BL:Get Matches by ID', req.params.id)
    for (let i = 0; i < matchesTab.length; i++) {
        if (matchesTab[i].id == req.params.id) {
            res.json({ match: matchesTab[i] });
            break;
        }

    }
})

app.post('/api/matches/search', (req, res) => {
    console.log('here into BL:Search Matches', req.body);
    res.json({ matches: matchesTab });
});



//Business logic: add teams
app.post('/api/teams', (req, res) => {
    console.log('here into BL:Add Teams',req.body);
    req.body.id=genereId(teamsTab)
    teamsTab.push(req.body);
    res.json({isAddTeam:true})
})





//Business logic: edit teams
app.put('/api/teams', (req, res) => {
    console.log('here into BL:Edit Teams', req.body);
    for (let i = 0; i < teamsTab.length; i++) {
      if (teamsTab[i].id == req.body.id) {
        teamsTab[i] = req.body;
        break;
      }
    }
    res.json({ isEditTeam: "Success" });
  });





//Business logic: Delete teams by id
app.delete('/api/teams/:id', (req, res) => {
    console.log('here into BL:delete Teams by id', req.params.id);
    for (let i = 0; i < teamsTab.length; i++) {
        if (teamsTab[i].id==req.params.id){
            teamsTab.splice(i,1)
            break;
        }
        
    }
    res.json({ isDeleteTeam:true})
})





//Business logic: get teams by id
app.get('/api/teams/:id', (req, res) => {
    console.log('here into BL:get teams by id')
    for (let i = 0; i < teamsTab.length; i++) {
        if (teamsTab[i].id == req.params.id) {
            res.json({ team: teamsTab[i] });
            break;
        }

    }
    

})

//Business logic: get all teams
app.get('/api/teams', (req, res) => {
    console.log('here into BL:get All teams');
    res.json({ teams: teamsTab });
});


//Business logic: add player
app.post('/api/players', (req, res) => {
    console.log('here into BL:add player',req.body);
    req.body.id=genereId(playersTab);
    playersTab.push(req.body);
    res.json({isAddPlayer:true});
})


//Business logic: Edit player
app.put('/api/players', (req, res) => {
    console.log('here into BL:Edit player')
    for (let i = 0; i < playersTab.length; i++) {
        if(playersTab[i].id==req.body.id){
            playersTab[i]=req.body;
            break;
        }
        
    }
    res.json({isEditPlayer:'Succes'})
})

//Business logic: get All  player
app.get('/api/players', (req, res) => {
    console.log('here into BL:get All  player')
    res.json({ players: playersTab });
})

//Business logic: get All  player by id
app.get('/api/players/:id', (req, res) => {
    console.log('here into BL:get All  player by id ')
    for (let i = 0; i < playersTab.length; i++) {
        if (playersTab[i].id == req.params.id) {
            res.json({ player: playersTab[i] });
            break;
        }

    }
    
})


//Business logic: delete  player by id
app.delete('/api/players/:id', (req, res) => {
    console.log('here into BL:delete player by id ')
    for (let i = 0; i < playersTab.length; i++) {
        if (playersTab[i].id == req.params.id) {
            playersTab.splice(i, 1);
            break;
        }

    }
    res.json({ isDeletedPlayer: true });
})

//**************************Exportation ************/

// make app importable

module.exports = app;