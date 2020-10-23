// alustetaan Express-sovellus, josta käytetään Mongoose-rajapintaa yhteyden luomiseksi MongoDB-tietokantaan
const express = require('express')
const path = require('path')
const url = require('url')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const varaukset = require('./routes/varaukset')
const asiakkaat = require('./routes/asiakkaat')
const palvelut = require('./routes/palvelut')

const app = express()

// mongoose connection
const mongoose_url = 'mongodb+srv://ajanvarausappdb:S4nn4n_ajanvarausapp@cluster0.fkqo7.mongodb.net/test';

mongoose.connect(mongoose_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

//config
app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: false})) // to support URL-encoded bodies
app.use('/api', varaukset) // call to route middleware
app.use('/api', asiakkaat)
app.use('/api', palvelut)


//app.listen(process.env.PORT || 9000)
module.exports = app



