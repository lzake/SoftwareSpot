var express = require('express')
var app = express()
var pg = require('pg')
var cors = require('cors')
var knex = require('./knex.js')
var bodyParser = require('body-parser')

var userRoute = require('./routes/user-route.js')
var reviewRoute = require('./routes/review-route.js')
var skillRoute = require('./routes/skill-route.js')
var techRoute = require('./routes/tech-route.js')
var endorseRoute = require('./routes/endorse-route.js')

app.use(cors({
    origin: function (origin, callback) {
        callback(null,true);
    }
}));
app.use(bodyParser())

app.use('/users', userRoute)
app.use('/skills', skillRoute)
app.use('/reviews', reviewRoute)
app.use('/tech', techRoute)
app.use('/endorsements', endorseRoute)


app.listen(3000, function () {
  console.log('Listening on port 3000')
})

module.exports = app
