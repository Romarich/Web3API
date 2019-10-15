/**
 * Load modules
 */

var express = require('express')
var router = express.Router()
const db = require('../modules/db')



/**
 * Routes
 */

// Return all quotes
router.get('/all', function (req, res) {
    db.db.collection('Quotes').find({}).toArray(function(err, result) {
        res.json(result)
    })
})
// Return a simple quote
router.get('/:id', function (req, res) {
    var idPourLaPage = req.params["id"];
    db.db.collection('Quotes').find({realId : idPourLaPage}).toArray(function(err, result) {
        res.json(result)
    })
})

// Delete a simple quote
router.get('/delete/:id', function (req, res) {
    var idPourLaPage = req.params["id"];
    db.db.collection('Quotes').deleteOne({realId : idPourLaPage})
    return res.json(idPourLaPage+" a bien été delete")
})

// Update a simple quote
router.get('/update/:id', function (req, res) {
    var idPourLaPage = req.params["id"];
    db.db.collection('Quotes').updateOne({realId : idPourLaPage},{$set: {realId : "6"}})
    return res.json(idPourLaPage+" a bien été update")
})



/**
 * Exports
 */

module.exports = router