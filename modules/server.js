/**
 * Load modules
 */

const express = require('express')
const usersRouter = require('../routes/users')
const quotesRouter = require('../routes/quotes')
const loginRouter = require('../routes/login')


/**
 * Variables
 */

// Global variables
const host = process.env.SERVER_HOST
const port = process.env.SERVER_PORT
const app = express()



/**
 * Configuration
 */

// Configure routes
var myLogger = function (req, res, next) {
    console.log('[SERVER] ' + req.method + ' ' + req.path)
    next()
}
app.use(myLogger)
app.use('/login', loginRouter)
app.use('/users', usersRouter)
app.use('/quotes', quotesRouter)


// Start server
var start = function (callback) {
    app.listen(port, host, () => {
        console.info(`[Server] Listening on http://${host}:${port}`)
        if (callback) callback(null)
    })
};

/**
 * Exports
 */
exports.start = start