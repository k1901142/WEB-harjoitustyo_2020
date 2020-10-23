const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema for asiakkaat
const asiakasSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
});

let Asiakas = mongoose.model('Asiakas', asiakasSchema);

module.exports = Asiakas;