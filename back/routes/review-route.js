var express = require('express')
var knex = require('../knex')
var router = express.Router()

router.get('/', function (req, res) {
  knex.select('review.title', 'review.body', 'review.rating', 'tech.name as tech_name', 'tech.url', 'username.name as user_name')
    .from('review')
    .join('username', function () {
      this.on('username.id', 'review.username_id')
    })
    .join('tech', function () {
      this.on('review.tech_id', 'tech.id')
    })
    .then( data => {
      res.json(data)
    })
})

router.get('/:id', function (req, res) {
  let id = req.params.id
  knex.select('*')
    .from('review')
    .where('tech_id', id)
    .then( data => {
      res.json(data)
    })
})

router.post('/', function (req, res) {
  var row = req.body
  knex('review')
    .insert(row)
    .returning('*')
      .then( () => {
        res.json(row);
      })
})

router.delete('/:id', function (req, res) {
  let reviewId = req.params.id
  knex('review')
    .where('review.id', reviewId)
    .del()
    .then( () => {
      res.send('l;alsdkfja;kdjla;j')
    })
})

router.put('/:id', function (req, res) {
  let reviewId = req.params.id
  var info = req.body
  knex('review')
    .where('review.id', reviewId)
    .update(info)
    .returning('*')
      .then( () => {
        res.json(info);
      })
})


module.exports = router
