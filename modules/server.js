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

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://honorez.romaric@yahoo.fr:9AU&SMr=@cluster0-r4est.mongodb.net/test?retryWrites=true&w=majority';

// Database Name
const dbName = 'Web3APIServ';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
});





/**
 * Exports
 */
exports.start = start;