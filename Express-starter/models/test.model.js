const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestSchema = new Schema({
    text:{ type:String, required:true }
});

module.exports = User = mongoose.model("Tests", TestSchema, "Tests");
