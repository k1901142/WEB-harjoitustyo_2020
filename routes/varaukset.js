const Asiakas = require('../models/asiakas')
const Palvelu = require('../models/palvelu')
const Varaus = require('../models/varaus')

const express = require('express')
const router = express.Router()

const cors = require('cors')
router.use(cors())

module.exports = router

//let varaukset = []

router.route('/varaukset')

    // hae kaikki tapahtumat
    .get((req, res) => {
        const resCode = req.query.reservationCode
        if (resCode != undefined) {
            Varaus.find({reservationCode: req.query.reservationCode}).exec(function (err, list) {
                if (err) throw err

                console.log(list)
                return res.json(list)
            })
        }
        Varaus.find({}, (err, list) => {
            if (err) throw err

            console.log(list)
            return res.json(list)
        })
    })


    // luo uusi tapahtuma
    //.post((req, res) => {
        //console.log("POST: " + req.body)

        // Tästä kehitellen
        // var varausAsiakas=req.Customer.lastName
        // Asiakas.findOne({lastName:varausAsiakas})
        //     .populate('Varaus')
        //     .exec(function (err, list){
        //         if (err) throw err
        //
        //         return res.json(list)
        //     })

        //Asiakas.findOne({_id: req.query.lastName})

    //
    //     if (!req.body.hasOwnProperty('lastName')) {
    //         res.nameCode=400
    //         return res.json({message: 'Error 400: Nimeä ei annettu.'})
    //     }
    //
    //     // määritellään tallennettava olio
    //     const uusiVaraus = new Varaus({
    //         palvelu: req.body.serviceName,
    //         asiakas: req.body.lastName,
    //         date: req.body.date,
    //         time: req.body.time,
    //         reservationCode: req.body.reservationCode
    //     })
    //     console.log(uusiVaraus)
    //
    //     // tallenna mongoosen save-metodilla
    //     uusiVaraus.save(err => {
    //         if (err) throw err
    //         console.log('Aika varattu.')
    //     })
    //
    //     return res.json({message: 'Aika on varattu ' + req.body.lastName})
    // })

    .delete((req, res) => {
        console.log("POISTA: " + req.body)

        Varaus.remove({}, err => {
            if (err) throw err
        })

        return res.json({message: 'Kaikki varaukset on poistettu.'})
    })


