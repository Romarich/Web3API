/**
 * Load modules
 */

const express = require('express');
const usersRouter = require('../routes/users');
const quotesRouter = require('../routes/quotes');


/**
 * Variables
 */

// Global variables
const host = 'localhost';
const port = 8080;
const app = express();



/**
 * Configuration
 */

// Configure routes
app.use('/users', usersRouter);
app.use('/quotes', quotesRouter);

// Start server
var start = function (callback) {
    app.listen(port, host, () => {
        console.info(`[SERVER] Listening on http://${host}:${port}`);
        if (callback) callback(null);
    });
};



/**
 * Exports
 */
exports.start = start;