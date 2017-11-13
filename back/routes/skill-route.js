var express = require('express')
var knex = require('../knex')
var router = express.Router()

// Get skill by id
router.get('/:id', function (req, res) {
  let id = req.params.id
  knex.select('skill.name')
    .from('username')
    .where('username.id', id)
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

// Insert new skill
router.post('/', function (req, res) {
  var row = req.body
  knex('skill')
    .insert(row)
    .returning('*')
      .then( () => {
        res.json(row);
      })
})

// Delete skill by id
router.delete('/:skillid', function (req, res) {
  let skillId = req.params.skillid
  knex('skill')
    .where('skill.id', skillId)
    .del()
    .then( () => {
      res.send('toooooooo ezzzzzz')
    })
})

// Delete skill_user by id
router.delete('/:skillid/:userid', function (req, res) {
  let skillId = req.params.skillid
  let userId = req.params.userid
  knex('skill_user')
    .where('skill_user.username_id', userId)
    .andWhere('skill_user.skill_id', skillId)
    .del()
    .then( () => {
      res.send('toooooooo ezzzzzz')
    })
})

module.exports = router
