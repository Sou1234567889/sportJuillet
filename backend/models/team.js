//importer mongoose module
const mongoose = require('mongoose');
//create match schema
const teamSchema = mongoose.Schema({
name:String,
owner:String,
foundation:Number


})
const team = mongoose.model("Team",teamSchema)

//make model exporter
module.exports = team;