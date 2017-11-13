var express = require('express')
var knex = require('../knex')
var router = express.Router()

router.post('/', function (req, res) {
  var row = req.body
  knex('endorse')
    .insert(row)
    .returning('*')
      .then( () => {
        res.json(row);
      })
})

router.delete('/:id', function (req, res) {
  let endorsementId = req.params.id
  knex('endorse')
    .where('endorse.id', endorsementId)
    .del()
    .then( () => {
      res.send(
        'cool'
      )
    })
})

router.put('/:id', function (req, res) {
  let endorsementId = req.params.id
  var info = req.body
  knex('endorse')
    .where('endorse.id', endorsementId)
    .update(info)
    .returning('*')
      .then( () => {
        res.json(info);
      })
})

module.exports = router
