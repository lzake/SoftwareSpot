var express = require('express')
var knex = require('../knex')
var router = express.Router()

// Get all users
router.get('/', function (req, res) {
  knex.select('username.name', 'username.bio')
    .from('username')
    .then( data => {
      res.json(data)
    })
})

// Get user by id, with that user's skills and reviews
router.get('/byId', function (req, res) {
  let userId = req.query.id
  knex.select('username.name', 'username.img', 'username.bio')
    .from('username')
    .where('username.id', userId)
    .then( function (data) {
      res.json(data)
    })
})


// Get all reviews by a particular user
router.get('/:id/reviews', function (req, res) {
  let userId = req.params.id
  knex.select('review.id', 'review.title', 'review.body', 'review.rating', 'review.username_id', 'review.tech_id')
    .from('review')
    .where('username.id', userId)
    .join('username', function () {
      this.on('username.id', 'review.username_id')
    })
    .then( function (data) {
      res.json(data)
    })
})

// Get all skills of a particular user
router.get('/:id/skills', function (req, res) {
  let userId = req.params.id
  knex.select('skill.id', 'skill.name')
    .from('username')
    .where('username.id', userId)
    .join('skill_user', function () {
      this.on('username.id', 'skill_user.username_id')
    })
    .join('skill', function () {
      this.on('skill_user.skill_id', 'skill.id')
    })
    .then( function (data) {
      res.json(data)
    })
})

// Delete a user
router.delete('/:id', function (req, res) {
  let userId = req.params.id
  knex('review')
    .where('review.username_id', userId)
    .del()
    .then(
      knex('endorse')
        .where('endorse.username_id', userId)
        .del()
        .then(
          knex('skill_user')
            .where('skill_user.username_id', userId)
            .del()
            .then(
              knex('username')
                .where('username.id', userId)
                .del()
                .then( () => {
                  res.send('ayyyyyyyy')
                })
            )
        )
    )
})

router.put('/:id', function (req, res) {
  let userId = req.params.id
  var info = req.body
  knex('username')
    .where('username.id', userId)
    .update(info)
    .returning('*')
      .then( () => {
        res.json(info);
      })
})

router.post('/', function (req, res) {
  let userRow = req.body
  knex('user')
    .insert(userRow)
    .returning('*')
    .then( () => {
      res.json('user')
    })
})

module.exports = router
