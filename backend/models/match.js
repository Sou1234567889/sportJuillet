//importer mongoose module
const mongoose = require('mongoose');
//create match schema
const matchSchema = mongoose.Schema({
    scoreOne:Number,
    scoreTwo:Number,
    teamOne:String,
    teamTwo:String
});

//affecter name to matchSchema
const match = mongoose.model("Match",matchSchema)

//make model exporter
module.exports = match;
