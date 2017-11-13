var express = require('express')
var knex = require('../knex')
var router = express.Router()

// Get all technologies
router.get('/', function (req, res) {
  knex.select('id', 'name', 'description', 'url', 'category')
    .from('tech')
    .then( function (data) {
      res.json(data)
    })
})

// Get technology by id
router.get('/byId', function (req, res) {
  let id = req.query.id
  knex.select('name', 'description', 'url', 'category')
    .from('tech')
    .where('id', id)
    .then( function (data) {
      res.json(data)
    })
})

// Insert new technology
router.post('/', function (req, res) {
  var row = req.body
  knex('tech')
    .insert(row)
    .returning('*')
      .then( () => {
        res.json(row);
      })
})

// Delete technology by id
router.delete('/:id', function (req, res) {
  let techId = req.params.id
  knex('review')
    .where('review.tech_id', techId)
    .del()
    .then(
      knex('tech')
        .where('tech.id', techId)
        .del()
        .then( () => {
          res.send('woop woop')
        })
    )
})

router.put('/:id', function (req, res) {
  let techId = req.params.id
  var info = req.body
  knex('tech')
    .where('tech.id', techId)
    .update(info)
    .returning('*')
      .then( () => {
        res.json(info);
      })
})


module.exports = router
