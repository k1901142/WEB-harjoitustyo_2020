const Palvelu = require('../models/palvelu')

const express = require('express')
const router = express.Router()

const cors = require('cors')
router.use(cors())

module.exports = router

//let palvelut = []

router.route('/palvelut')

    // hae kaikki tapahtumat
    .get((req, res) => {
        const serviceName = req.query.serviceName
        if (serviceName != undefined) {
            Palvelu.find({serviceName: req.query.serviceName}).exec(function (err, list) {
                if (err) throw err

                console.log(list)
                return res.json(list)
            })
        }
        Palvelu.find({}, (err, list) => {
            if (err) throw err

            console.log(list)
            return res.json(list)
        })
    })

    // luo uusi tapahtuma
    .post((req, res) => {
        console.log("POST: " + req.body)

        if (!req.body.hasOwnProperty('serviceName')) {
            res.nameCode=400
            return res.json({message: 'Error 400: Nimeä ei annettu.'})
        }

        // määritellään tallennettava olio
        const uusiPalvelu = new Palvelu({
            serviceName: req.body.serviceName,
            duration: req.body.duration,
        })
        console.log(uusiPalvelu)

        // tallenna mongoosen save-metodilla
        uusiPalvelu.save(err => {
            if (err) throw err
            console.log('Uusi palvelu on tallennettu.')
        })

        return res.json({message: 'Uusi palvelu on ' + req.body.serviceName})
    })

    .delete((req, res) => {
        console.log("POISTA: " + req.body)

        Palvelu.remove({}, err => {
            if (err) throw err
        })

        return res.json({message: 'Kaikki palvelut on poistettu.'})
    })

