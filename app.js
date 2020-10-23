const app = require('./AjanvarausDemo') //Require our app

const server = app.listen(process.env.PORT || 9000, function () {
    console.log('Express server listening on port ' + server.address().port)
})

