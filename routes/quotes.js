/**
 * Load modules
 */

var express = require('express')
var router = express.Router()



/**
 * Routes
 */

// Return a quote
router.get('/', function (req, res) {
    res.json({
         message: 'I\'ve never met a strong person with an easy past',
         author : 'Atticus'
    });
})


/**
 * Exports
 */

module.exports = router