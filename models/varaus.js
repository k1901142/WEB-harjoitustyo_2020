const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema for asiakkaat
const varausSchema = new Schema({
    palvelu: {
        type: Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    asiakas: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    date: String,
    time: String,
    reservationCode: String
});

let Varaus = mongoose.model('Varaus', varausSchema);

module.exports = Varaus;