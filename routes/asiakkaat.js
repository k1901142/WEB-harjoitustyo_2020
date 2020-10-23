const Asiakas = require('../models/asiakas')

const express = require('express')
const router = express.Router()

const cors = require('cors')
router.use(cors())

module.exports = router

let asiakkaat = []

router.route('/asiakkaat')

    // hae kaikki tapahtumat
    .get((req, res) => {
        const lastName = req.query.lastName
        if (lastName != undefined) {
            Asiakas.find({lastName: req.query.lastName}).exec(function (err, list) {
                if (err) throw err

                console.log(list)
                return res.json(list)
            })
        }
        Asiakas.find({}, (err, list) => {
            if (err) throw err

            console.log(list)
            return res.json(list)
        })
    })

    // luo uusi tapahtuma
    .post((req, res) => {
        console.log("POST: " + req.body)

        if (!req.body.hasOwnProperty('lastName')) {
            res.nameCode=400
            return res.json({message: 'Error 400: Nimeä ei annettu.'})
        }

        // määritellään tallennettava olio
        const uusiAsiakas = new Asiakas({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        })
        console.log(uusiAsiakas)

        // tallenna mongoosen save-metodilla
        uusiAsiakas.save(err => {
            if (err) throw err
            console.log('Uusi asiakas tallennettu.')
        })

        return res.json({message: 'Uusi asiakas on ' + req.body.firstName + " " + req.body.lastName})
    })

    .delete((req, res) => {
        console.log("POISTA: " + req.body)

        Asiakas.remove({}, err => {
            if (err) throw err
        })

        return res.json({message: 'Kaikki asiakkaat on poistettu.'})
    })


