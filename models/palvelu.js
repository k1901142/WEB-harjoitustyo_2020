const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema for service
const palveluSchema = new Schema({
    serviceName: {
        type: String,
        enum: ['Leikkaus', 'Värjäys', 'Permanentti']
    },
    duration: Number
});

let Palvelu = mongoose.model('Palvelu', palveluSchema);

module.exports = Palvelu;